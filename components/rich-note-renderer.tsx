"use client"

import React from "react"
import type { RichDoc, RichDocMark, RichDocNode } from "@/lib/supabase"

function cleanPunctuation(text: string): string {
  return text.replace(/\s*—\s*/g, " - ").replace(/\s*–\s*/g, " - ")
}

function normalizeBrandColor(color: unknown): string | undefined {
  if (typeof color !== "string" || !color.trim()) return undefined
  const c = color.trim().toLowerCase()
  if (c === "#1ed760" || c === "#1db954") return "#1ed765"
  return color.trim()
}

function isSafeLinkHref(href: unknown): href is string {
  if (typeof href !== "string") return false
  try {
    const parsed = new URL(href)
    return parsed.protocol === "https:" || parsed.protocol === "http:"
  } catch {
    return false
  }
}

function renderMarks(
  rawText: string,
  marks: RichDocMark[] | undefined,
  keyPrefix: string
): React.ReactNode {
  const text = cleanPunctuation(rawText)
  if (!marks || marks.length === 0) return text

  let node: React.ReactNode = text
  marks.forEach((mark, idx) => {
    const key = `${keyPrefix}-m${idx}`
    switch (mark.type) {
      case "bold":
        node = <strong key={key} className="font-semibold text-white">{node}</strong>
        break
      case "italic":
        node = <em key={key}>{node}</em>
        break
      case "underline":
        node = <u key={key}>{node}</u>
        break
      case "strike":
        node = <s key={key}>{node}</s>
        break
      case "code":
        node = (
          <code
            key={key}
            className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-[#1ed765]"
          >
            {node}
          </code>
        )
        break
      case "textStyle": {
        const color = normalizeBrandColor(mark.attrs?.color)
        const style: React.CSSProperties = {}
        if (color) style.color = color
        node = (
          <span key={key} style={style}>
            {node}
          </span>
        )
        break
      }
      case "link": {
        const href = mark.attrs?.href
        if (isSafeLinkHref(href)) {
          node = (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1ed765] underline underline-offset-2 hover:text-[#4de087]"
            >
              {node}
            </a>
          )
        }
        break
      }
      default:
        break
    }
  })
  return node
}

function renderNode(node: RichDocNode, key: string): React.ReactNode {
  switch (node.type) {
    case "text":
      return (
        <React.Fragment key={key}>
          {renderMarks(node.text ?? "", node.marks, key)}
        </React.Fragment>
      )
    case "hardBreak":
      return <br key={key} />
    case "paragraph": {
      const children = (node.content ?? []).map((child, idx) =>
        renderNode(child, `${key}-p${idx}`)
      )
      return (
        <p key={key} className="leading-relaxed">
          {children.length > 0 ? children : "\u00A0"}
        </p>
      )
    }
    case "heading": {
      const children = (node.content ?? []).map((child, idx) =>
        renderNode(child, `${key}-h${idx}`)
      )
      return (
        <h4 key={key} className="font-bold text-white leading-snug">
          {children}
        </h4>
      )
    }
    case "bulletList":
      return (
        <ul key={key} className="list-disc ps-5 space-y-1">
          {(node.content ?? []).map((child, idx) =>
            renderNode(child, `${key}-ul${idx}`)
          )}
        </ul>
      )
    case "orderedList":
      return (
        <ol key={key} className="list-decimal ps-5 space-y-1">
          {(node.content ?? []).map((child, idx) =>
            renderNode(child, `${key}-ol${idx}`)
          )}
        </ol>
      )
    case "listItem":
      return (
        <li key={key}>
          {(node.content ?? []).map((child, idx) =>
            renderNode(child, `${key}-li${idx}`)
          )}
        </li>
      )
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="border-s-2 border-[#1ed765] ps-4 text-white/80 italic"
        >
          {(node.content ?? []).map((child, idx) =>
            renderNode(child, `${key}-bq${idx}`)
          )}
        </blockquote>
      )
    default:
      if (node.content) {
        return (
          <React.Fragment key={key}>
            {node.content.map((child, idx) => renderNode(child, `${key}-n${idx}`))}
          </React.Fragment>
        )
      }
      return null
  }
}

export function RichNoteRenderer({
  doc,
  className = "",
}: {
  doc: RichDoc
  className?: string
}) {
  const nodes = doc.content ?? []
  return (
    <div className={className}>
      {nodes.map((node, idx) => renderNode(node, `root-${idx}`))}
    </div>
  )
}

/**
 * Renders plain-string release note items cleanly.
 * If an item begins with a short "Title: description" prefix, highlights
 * the title in brand green #1ed765 to match TipTap-authored notes.
 */
export function PlainNoteItem({ text }: { text: string }) {
  const cleaned = cleanPunctuation(text)
  const colonIdx = cleaned.indexOf(":")
  if (colonIdx > 0 && colonIdx <= 90) {
    const title = cleaned.slice(0, colonIdx + 1)
    const rest = cleaned.slice(colonIdx + 1)
    return (
      <p className="leading-relaxed">
        <strong className="font-semibold text-[#1ed765]">{title}</strong>
        <span>{rest}</span>
      </p>
    )
  }
  return <p className="leading-relaxed">{cleaned}</p>
}
