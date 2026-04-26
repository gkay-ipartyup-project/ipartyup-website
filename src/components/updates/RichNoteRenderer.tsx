"use client";

/**
 * RichNoteRenderer — read-only renderer for the TipTap JSON release notes
 * produced by the in-app RichNoteEditor (apps/desktop/src/components/RichNoteEditor).
 *
 * Implemented as a hand-rolled JSON walker so the public website never has to
 * ship the full ProseMirror runtime just to display release notes. Mirrors the
 * subset of nodes/marks supported by the desktop renderer:
 *   nodes: doc, paragraph, heading, bulletList, orderedList, listItem,
 *          blockquote, horizontalRule, hardBreak, container, codeBlock, text
 *   marks: bold, italic, underline, strike, code, link, highlight,
 *          textStyle (color, fontFamily, fontSize, fontWeight, textShadow,
 *                     textStroke, backgroundColor, lineHeight)
 *
 * Unknown nodes / marks fall back to rendering their children, so mismatched
 * desktop ↔ website schema versions degrade gracefully instead of throwing
 * React error #31.
 */
import type { CSSProperties, ReactNode } from "react";
import { Fragment, useMemo } from "react";
import type { RichDoc } from "@/lib/releaseNotes";

interface RichNoteRendererProps {
    doc: RichDoc | null | undefined;
    className?: string;
    /** Inline style applied to the wrapper. */
    style?: CSSProperties;
}

export default function RichNoteRenderer({
    doc,
    className,
    style,
}: RichNoteRendererProps) {
    const tree = useMemo(() => (doc ? renderNode(doc) : null), [doc]);
    if (!tree) return null;
    return (
        <span className={className} style={{ display: "inline", ...style }}>
            {tree}
        </span>
    );
}

/* ─── helpers ─── */

let nodeKeyCounter = 0;
function nextKey() {
    nodeKeyCounter = (nodeKeyCounter + 1) & 0x7fffffff;
    return `n${nodeKeyCounter}`;
}

interface MarkAttrs {
    [k: string]: unknown;
}

interface ParsedMarks {
    style: CSSProperties;
    href?: string;
    wrappers: ("strong" | "em" | "u" | "s" | "code" | "mark")[];
}

function parseMarks(
    marks: { type: string; attrs?: MarkAttrs }[] | undefined,
): ParsedMarks {
    const out: ParsedMarks = { style: {}, wrappers: [] };
    if (!marks?.length) return out;
    for (const m of marks) {
        switch (m.type) {
            case "bold":
                out.wrappers.push("strong");
                break;
            case "italic":
                out.wrappers.push("em");
                break;
            case "underline":
                out.wrappers.push("u");
                break;
            case "strike":
                out.wrappers.push("s");
                break;
            case "code":
                out.wrappers.push("code");
                break;
            case "link":
                if (typeof m.attrs?.href === "string") out.href = m.attrs.href;
                break;
            case "highlight": {
                const color = m.attrs?.color;
                if (typeof color === "string") {
                    (out.style as CSSProperties).backgroundColor = color;
                }
                out.wrappers.push("mark");
                break;
            }
            case "textStyle": {
                const a = m.attrs ?? {};
                if (typeof a.color === "string") (out.style as CSSProperties).color = a.color;
                if (typeof a.fontFamily === "string") (out.style as CSSProperties).fontFamily = a.fontFamily;
                if (typeof a.fontSize === "string") (out.style as CSSProperties).fontSize = a.fontSize as string;
                if (typeof a.fontWeight === "number" || typeof a.fontWeight === "string") {
                    (out.style as CSSProperties).fontWeight = a.fontWeight as CSSProperties["fontWeight"];
                }
                if (typeof a.textShadow === "string") (out.style as CSSProperties).textShadow = a.textShadow;
                if (typeof a.textStroke === "string") {
                    (out.style as CSSProperties).WebkitTextStroke = a.textStroke;
                    (out.style as CSSProperties).paintOrder = "stroke fill";
                }
                if (typeof a.backgroundColor === "string") {
                    (out.style as CSSProperties).backgroundColor = a.backgroundColor;
                }
                if (typeof a.lineHeight === "string" || typeof a.lineHeight === "number") {
                    (out.style as CSSProperties).lineHeight = a.lineHeight as CSSProperties["lineHeight"];
                }
                break;
            }
            default:
                break;
        }
    }
    return out;
}

/* ─── core walker ─── */

function renderNode(node: unknown): ReactNode {
    if (!node || typeof node !== "object") return null;
    const n = node as { type?: string; content?: unknown[]; attrs?: MarkAttrs; text?: string };
    switch (n.type) {
        case "doc":
            return (
                <Fragment key={nextKey()}>
                    {(n.content ?? []).map(renderNode)}
                </Fragment>
            );
        case "paragraph":
            return (
                <p
                    key={nextKey()}
                    style={{ margin: 0, ...alignmentStyle(n.attrs) }}
                >
                    {(n.content ?? []).map(renderInline)}
                </p>
            );
        case "heading": {
            const level = clampLevel(n.attrs?.level);
            const Tag = `h${level}` as unknown as "h1";
            return (
                <Tag key={nextKey()} style={alignmentStyle(n.attrs)}>
                    {(n.content ?? []).map(renderInline)}
                </Tag>
            );
        }
        case "bulletList":
            return (
                <ul key={nextKey()} style={{ paddingLeft: 18, margin: 0 }}>
                    {(n.content ?? []).map(renderNode)}
                </ul>
            );
        case "orderedList":
            return (
                <ol
                    key={nextKey()}
                    start={typeof n.attrs?.start === "number" ? (n.attrs!.start as number) : 1}
                    style={{ paddingLeft: 18, margin: 0 }}
                >
                    {(n.content ?? []).map(renderNode)}
                </ol>
            );
        case "listItem":
            return <li key={nextKey()}>{(n.content ?? []).map(renderNode)}</li>;
        case "blockquote":
            return (
                <blockquote
                    key={nextKey()}
                    style={{
                        margin: "4px 0",
                        paddingLeft: 12,
                        borderLeft: "3px solid rgba(255,255,255,0.15)",
                    }}
                >
                    {(n.content ?? []).map(renderNode)}
                </blockquote>
            );
        case "horizontalRule":
            return <hr key={nextKey()} style={{ borderColor: "rgba(255,255,255,0.1)" }} />;
        case "hardBreak":
            return <br key={nextKey()} />;
        case "codeBlock":
            return (
                <pre
                    key={nextKey()}
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 6,
                        padding: "8px 10px",
                        fontSize: 12,
                        margin: "6px 0",
                        overflowX: "auto",
                    }}
                >
                    <code>{(n.content ?? []).map(renderInline)}</code>
                </pre>
            );
        case "container":
            return renderContainer(n);
        case "text":
            return renderInline(n);
        default:
            // Unknown node — render its children if any so future schema
            // additions don't crash older website builds.
            if (Array.isArray(n.content)) {
                return (
                    <Fragment key={nextKey()}>
                        {n.content.map(renderNode)}
                    </Fragment>
                );
            }
            return null;
    }
}

function clampLevel(n: unknown): 1 | 2 | 3 | 4 | 5 | 6 {
    const v = Number(n);
    if (Number.isFinite(v) && v >= 1 && v <= 6) return v as 1 | 2 | 3 | 4 | 5 | 6;
    return 2;
}

function alignmentStyle(attrs: MarkAttrs | undefined): CSSProperties | undefined {
    const align = attrs?.textAlign;
    if (typeof align !== "string" || align === "left") return undefined;
    if (align === "center" || align === "right" || align === "justify") {
        return { textAlign: align };
    }
    return undefined;
}

function renderInline(node: unknown): ReactNode {
    if (!node || typeof node !== "object") return null;
    const n = node as {
        type?: string;
        text?: string;
        marks?: { type: string; attrs?: MarkAttrs }[];
    };
    if (n.type === "hardBreak") return <br key={nextKey()} />;
    if (n.type !== "text") return renderNode(n);

    const text: string = n.text ?? "";
    const parsed = parseMarks(n.marks);

    let inner: ReactNode = text;
    for (let i = parsed.wrappers.length - 1; i >= 0; i--) {
        const tag = parsed.wrappers[i];
        const Tag = tag as unknown as "strong";
        inner = <Tag key={nextKey()}>{inner}</Tag>;
    }

    const hasStyle = Object.keys(parsed.style).length > 0;

    if (parsed.href) {
        return (
            <a
                key={nextKey()}
                href={parsed.href}
                rel="noopener noreferrer"
                target="_blank"
                style={hasStyle ? parsed.style : undefined}
            >
                {inner}
            </a>
        );
    }

    if (hasStyle) {
        return (
            <span key={nextKey()} style={parsed.style}>
                {inner}
            </span>
        );
    }

    return <Fragment key={nextKey()}>{inner}</Fragment>;
}

function renderContainer(node: { attrs?: MarkAttrs; content?: unknown[] }) {
    const attrs = node.attrs ?? {};
    const bg = (attrs.background as string) ?? "rgba(255,255,255,0.03)";
    const border = (attrs.border as string) ?? "1px solid rgba(255,255,255,0.08)";
    const accent = (attrs.accent as string) ?? "rgba(255,255,255,0.4)";
    const radius = (attrs.radius as string) ?? "12px";
    const padding = (attrs.padding as string) ?? "12px 14px";

    return (
        <div
            key={nextKey()}
            style={{
                background: bg,
                border,
                borderLeft: `3px solid ${accent}`,
                borderRadius: radius,
                padding,
                margin: "6px 0",
            }}
        >
            {(node.content ?? []).map(renderNode)}
        </div>
    );
}
