import * as React from "react"

import { cn } from "@/lib/utils"

export type LeafCornerBackgroundProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Crémevit/mint bakgrund med stora akvarell-aktiga lövgrenar i tre hörn:
 * top-left, top-right och bottom-left. Inline-SVG, inga assets behövs.
 */
export function LeafCornerBackground({
  children,
  className,
}: LeafCornerBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-svh w-full overflow-hidden",
        "bg-gradient-to-b from-[#F7F4EC] via-[#F1F4EA] to-[#E8EFE2]",
        className,
      )}
    >
      <LeafBranch
        idKey="tl"
        className="absolute -top-10 -left-10 w-[78%] max-w-[360px]"
        rotation="rotate(-12 160 160)"
      />
      <LeafBranch
        idKey="tr"
        className="absolute -top-12 -right-12 w-[68%] max-w-[330px]"
        rotation="translate(320 0) scale(-1 1) rotate(-8 160 160)"
      />
      <LeafBranch
        idKey="bl"
        className="absolute -bottom-16 -left-12 w-[74%] max-w-[350px]"
        rotation="rotate(168 160 160)"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/10"
      />

      <div className="relative">{children}</div>
    </div>
  )
}

type Leaf = {
  /** x i 0..320 */
  x: number
  /** y i 0..320 */
  y: number
  /** rotation i grader runt mitten av lövet */
  r: number
  /** lövets storlek (höjd) i px (bredd ≈ 0.6×) */
  size: number
  /** opacitet 0..1 */
  o?: number
}

const LEAVES: Leaf[] = [
  { x: 30, y: 70, r: -32, size: 78, o: 0.9 },
  { x: 64, y: 38, r: -8, size: 86, o: 0.95 },
  { x: 110, y: 22, r: 18, size: 90, o: 1 },
  { x: 156, y: 30, r: 38, size: 82, o: 0.95 },
  { x: 200, y: 54, r: 58, size: 76, o: 0.9 },
  { x: 230, y: 96, r: 78, size: 70, o: 0.85 },

  { x: 78, y: 102, r: -42, size: 70, o: 0.85 },
  { x: 124, y: 90, r: -2, size: 78, o: 0.92 },
  { x: 168, y: 106, r: 28, size: 72, o: 0.88 },

  { x: 50, y: 158, r: -56, size: 66, o: 0.8 },
  { x: 96, y: 168, r: -18, size: 72, o: 0.85 },
  { x: 144, y: 176, r: 12, size: 68, o: 0.82 },
  { x: 190, y: 168, r: 42, size: 64, o: 0.78 },

  { x: 70, y: 224, r: -32, size: 60, o: 0.75 },
  { x: 130, y: 240, r: 0, size: 64, o: 0.78 },
  { x: 184, y: 232, r: 32, size: 58, o: 0.72 },
]

/** Huvudgren + grenkurvor, ritas under löven. */
const BRANCH_PATHS: { d: string; w: number; o: number }[] = [
  { d: "M 250 -10 C 230 30, 200 60, 170 80 C 130 110, 90 150, 60 220", w: 1.6, o: 0.5 },
  { d: "M 170 80 C 160 100, 150 130, 140 170", w: 1.1, o: 0.4 },
  { d: "M 140 170 C 130 200, 110 230, 80 260", w: 1.0, o: 0.35 },
  { d: "M 200 50 C 220 70, 240 90, 260 110", w: 0.9, o: 0.3 },
  { d: "M 110 110 C 90 130, 70 150, 50 180", w: 0.9, o: 0.3 },
]

function LeafBranch({
  idKey,
  className,
  rotation,
}: {
  idKey: string
  className?: string
  rotation: string
}) {
  const fillId = `leaf-fill-${idKey}`
  const haloId = `leaf-halo-${idKey}`
  const shapeId = `leaf-shape-${idKey}`
  const haloShapeId = `leaf-halo-shape-${idKey}`
  const branchColor = "rgba(58, 92, 70, 0.45)"

  return (
    <svg
      aria-hidden
      viewBox="0 0 320 320"
      className={cn(
        "pointer-events-none select-none mix-blend-multiply",
        className,
      )}
    >
      <defs>
        <radialGradient id={fillId} cx="40%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#C7DCBF" stopOpacity="0.65" />
          <stop offset="50%" stopColor="#8FB78A" stopOpacity="0.58" />
          <stop offset="100%" stopColor="#3F6F5C" stopOpacity="0.50" />
        </radialGradient>
        <radialGradient id={haloId} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#B6D4B2" stopOpacity="0.42" />
          <stop offset="80%" stopColor="#B6D4B2" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#B6D4B2" stopOpacity="0" />
        </radialGradient>

        <symbol id={shapeId} viewBox="0 0 40 70">
          <path
            d="M20 2 C 34 16, 38 36, 20 68 C 2 36, 6 16, 20 2 Z"
            fill={`url(#${fillId})`}
            stroke="#3A5C46"
            strokeOpacity="0.32"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
          <path
            d="M20 8 L 20 62"
            stroke="#2F4A3A"
            strokeOpacity="0.30"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M20 22 L 28 32 M 20 30 L 30 38 M 20 38 L 30 44 M 20 22 L 12 32 M 20 30 L 10 38 M 20 38 L 10 44"
            stroke="#2F4A3A"
            strokeOpacity="0.18"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </symbol>

        <symbol id={haloShapeId} viewBox="0 0 40 70">
          <ellipse
            cx="20"
            cy="35"
            rx="18"
            ry="32"
            fill={`url(#${haloId})`}
          />
        </symbol>
      </defs>

      <g transform={rotation}>
        {BRANCH_PATHS.map((b, i) => (
          <path
            key={i}
            d={b.d}
            stroke={branchColor}
            strokeWidth={b.w}
            strokeLinecap="round"
            fill="none"
            opacity={b.o}
          />
        ))}

        {LEAVES.map((leaf, i) => {
          const w = leaf.size * 0.6
          const h = leaf.size
          const cx = leaf.x + w / 2
          const cy = leaf.y + h / 2
          return (
            <use
              key={`halo-${i}`}
              href={`#${haloShapeId}`}
              x={leaf.x - 6}
              y={leaf.y - 6}
              width={w + 12}
              height={h + 12}
              transform={`rotate(${leaf.r} ${cx} ${cy})`}
              opacity={(leaf.o ?? 1) * 0.7}
            />
          )
        })}

        {LEAVES.map((leaf, i) => {
          const w = leaf.size * 0.6
          const h = leaf.size
          const cx = leaf.x + w / 2
          const cy = leaf.y + h / 2
          return (
            <use
              key={`leaf-${i}`}
              href={`#${shapeId}`}
              x={leaf.x}
              y={leaf.y}
              width={w}
              height={h}
              transform={`rotate(${leaf.r} ${cx} ${cy})`}
              opacity={leaf.o ?? 1}
            />
          )
        })}
      </g>
    </svg>
  )
}
