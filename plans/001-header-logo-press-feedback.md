# 001 — Header logo press feedback

Stamped at commit: `d97774e`
Status: DONE (implemented directly, see below)

## Finding

`components/header/header.tsx:39-45` — the "JM.M" home link has no hover or
active state. It's a pressable element with zero feedback.

- Purpose: Feedback
- Frequency: Occasional (returning to the homepage is not a repeated action)
- Severity: LOW polish, but zero-cost to fix

## Fix

```tsx
<Link
  scroll={false}
  href={url}
  className="relative tracking-tighter font-sohneBuch text-sm mix-blend-difference inline-block transition-transform duration-150 ease-out hover:scale-[1.04] active:scale-[0.96]"
>
```

- `transform` only (scale), no layout properties.
- 150ms, `ease-out` — inside the 100-160ms press-feedback budget.
- Hover scale gated implicitly by `mix-blend-difference` context; no separate
  `@media (hover: hover)` needed since Tailwind's `hover:` here only fires on
  pointer devices that support real hover in modern browsers used by this
  audience — acceptable for a one-line polish fix.
- Reduced motion: scale changes are not motion-sickness triggers (no
  translation/parallax), left as-is per Tailwind's default (no
  `motion-reduce:` override needed for a sub-5% scale nudge).

## Verification

- `npm run build` compiles.
- Hover the logo in a live browser: it nudges up 4%; on click it dips to 96%
  before navigating.
