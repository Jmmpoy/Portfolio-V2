# 003 — In-progress grid card state indication

Stamped at commit: `d97774e`
Status: DONE (implemented directly, see below)

## Finding

`components/grid.tsx:41-90` — `isInProgress` cards (Agathe Marimbert,
Antonin Saurat) render the exact same hover scrim + name-reveal animation
(l.71-90) as clickable cards, contradicted only by a static "En cours" badge
and `cursor-not-allowed`. The motion invites a click the card won't honor.

- Purpose: State indication
- Frequency: Occasional (scrolling the homepage grid)
- Severity: MEDIUM — actively misleading, not just missing polish

## Fix

In `components/grid.tsx`, gate the scrim opacity and skip the name-reveal
entirely when `isInProgress` is true — the badge already carries the label,
so revealing the name on hover is redundant on top of being misleading.

Current (l.71-90):

```tsx
<AnimatePresence>
  {isHovering && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`z-10 absolute inset-0 h-full w-full filter bg-black/30`}
    />
  )}
</AnimatePresence>
<AnimatePresence>
  {isHovering && (
    <span className="z-20 absolute bottom-4 left-4 block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        exit={{ y: "110%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="block uppercase text-white font-founders text-xl"
      >
        {project.name}
      </motion.span>
    </span>
  )}
</AnimatePresence>
```

Target:

```tsx
<AnimatePresence>
  {isHovering && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInProgress ? 0.12 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`z-10 absolute inset-0 h-full w-full filter ${isInProgress ? "bg-black" : "bg-black/30"}`}
    />
  )}
</AnimatePresence>
{!isInProgress && (
  <AnimatePresence>
    {isHovering && (
      <span className="z-20 absolute bottom-4 left-4 block overflow-hidden">
        <motion.span
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block uppercase text-white font-founders text-xl"
        >
          {project.name}
        </motion.span>
      </span>
    )}
  </AnimatePresence>
)}
```

- Reuses the existing `ease: "easeInOut"` token on the scrim (l.77) — only
  the target opacity and background strength change, not the curve.
- The name-reveal block is skipped outright for in-progress cards rather
  than retuned, since revealing a name for an unclickable card has no
  purpose to preserve.

## Verification

- `npm run build` compiles.
- Hover Agathe Marimbert / Antonin Saurat: a faint darken only, no name
  slides up. Hover a real project: unchanged from today.
