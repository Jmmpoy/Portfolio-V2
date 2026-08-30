# 002 — Project image thumbnail feedback

Stamped at commit: `d97774e`
Status: DONE (implemented directly, see below)

## Finding

`components/project/projectImages.tsx:40` — `MediaItem`'s wrapping `div` is
`cursor-pointer` (opens the lightbox) but the `<Image>` inside carries no
hover or active treatment at all.

- Purpose: Feedback (signal clickability before the lightbox opens)
- Frequency: Occasional (viewing one project's image stack)
- Severity: LOW polish

## Fix

Current (`components/project/projectImages.tsx:52-63`):

```tsx
<Image
  src={item}
  alt={name}
  fill
  priority={isPriority}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={90}
  loading={isPriority ? "eager" : "lazy"}
  className={`${objectFitClass} image grain min-h-full`}
/>
```

Target:

```tsx
<Image
  src={item}
  alt={name}
  fill
  priority={isPriority}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={90}
  loading={isPriority ? "eager" : "lazy"}
  className={`${objectFitClass} image grain min-h-full transition-transform duration-200 ease-out group-hover:scale-[1.02] group-active:scale-[0.98]`}
/>
```

Add `group` to the wrapping div on line 40:

```tsx
<div onClick={onClick} className="basis-full project-image-card cursor-pointer w-full group">
```

- `transform` only.
- 200ms hover-in, `ease-out` — inside the hover/dropdown budget tier.
- `group-active` gives a distinct, faster-reading press dip on click, before
  the lightbox's own opacity fade takes over.
- No new easing token invented — `ease-out` is a Tailwind keyword already
  used elsewhere in this codebase's CSS (`styles/main.css:122`).

## Verification

- `npm run build` compiles.
- On a project page, hover a stacked image: it scales up ~2%; clicking dips
  it before the lightbox fades in.
