# AGENTS.md — iPartyUp Website Rules

## Brand Colors & UI Rules (MANDATORY)

1. **Primary Green:** `#1ed765`
   - Text and icons on `#1ed765` MUST ALWAYS be **`#000000` (black)** — never white.
   - Never use dark/off-brand greens (`#16a34a`, `#15803d`, `#22c55e`).
2. **NO Dull Translucent Stroke Pills or Badge Spam (STRICTLY FORBIDDEN):**
   - Never create muddy/dull translucent colored pill boxes with thin colored strokes (e.g., `bg-[#1ed765]/18 border-[#1ed765]/35 text-[#1ed765]`, muted olive-green pills, or dull amber stroke boxes).
   - Never stack multiple pill badges everywhere (such as piling version + status + OS pills together). Use clean typography or rare, high-contrast solid badges (`bg-[#1ed765] text-black`) only where genuinely needed.
3. **No Unsolicited Glows or Heavy Shadows:**
   - Do not add colored neon glows or heavy multi-stop blur shadows unless explicitly requested. Crisp `1px` borders and lightweight shadows (`0 2px 8px rgba(0, 0, 0, 0.3)`) are preferred.
4. **Copy Style:**
   - **Never use em dashes (`—`)** anywhere in website copy (English or Arabic). Use commas, periods, colons, parentheses, or plain hyphens where appropriate.
   - Keep tone clear, honest, friendly, and occasionally witty where it fits naturally.
5. **Performance & Media:**
   - Store display images and icons in `public/` as optimized `.webp` (keep `favicon.png` / `apple-icon.png` for HTML metadata compatibility).
   - Use explicit dimensions, `overflow-x-clip` on page roots (so RTL Arabic and mobile never clip or horizontally scroll), and support Mobile, Tablet, and Desktop cleanly in both EN (LTR) and AR (RTL).
6. **Safety:**
   - Never hardcode private secrets or commit scratch/debug scripts.
   - Never `git push` or deploy without explicit user approval.
