import * as React from "react"

/**
 * Anpassade SVG-ikoner i samma stil som lucide:
 * 24×24 viewBox, currentColor, stroke 1.6, mjuk fyllning för djup.
 *
 * Ritas inline för att vara helt fristående från lucide-versionen.
 */

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number
}

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

/** Två kupade händer som håller ett hjärta. Illustrativ stil med tunna linjer. */
export function HandHeartIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M12 7.4 C 12.7 6.2, 14 5.7, 15.2 6.2 C 16.5 6.7, 17.1 8.1, 16.7 9.4 C 16.3 10.6, 14.9 11.7, 12 13.6 C 9.1 11.7, 7.7 10.6, 7.3 9.4 C 6.9 8.1, 7.5 6.7, 8.8 6.2 C 10 5.7, 11.3 6.2, 12 7.4 Z"
        fill="currentColor"
        fillOpacity="0.14"
      />

      <path d="M3.2 12.6 C 4.4 11.9, 5.8 11.9, 6.9 12.6 L 10.6 14.7 C 11 14.9, 11.1 15.4, 10.9 15.8 C 10.6 16.4, 9.9 16.6, 9.3 16.4 L 6.2 15.4" />
      <path d="M3.2 12.6 L 3.2 18.2 C 3.2 18.7, 3.6 19.1, 4.1 19.1 L 5.6 19.1 C 6 19.1, 6.4 19.4, 6.5 19.8" />
      <path d="M6.2 15.4 C 7.6 17, 9.4 18, 11.3 18.4" />

      <path d="M20.8 12.6 C 19.6 11.9, 18.2 11.9, 17.1 12.6 L 13.4 14.7 C 13 14.9, 12.9 15.4, 13.1 15.8 C 13.4 16.4, 14.1 16.6, 14.7 16.4 L 17.8 15.4" />
      <path d="M20.8 12.6 L 20.8 18.2 C 20.8 18.7, 20.4 19.1, 19.9 19.1 L 18.4 19.1 C 18 19.1, 17.6 19.4, 17.5 19.8" />
      <path d="M17.8 15.4 C 16.4 17, 14.6 18, 12.7 18.4" />
    </svg>
  )
}

/** Liten växt – två blad och en stjälk. */
export function PlantIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <path d="M12 21 V 12" />
      <path
        d="M12 12 C 12 9, 9.5 7.2, 7 7 C 7 9.6, 9.2 12, 12 12 Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M12 12 C 12 8.5, 14.8 6, 17.5 6 C 17.5 9.5, 14.8 12, 12 12 Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M9 19.5 C 10 19, 11 19, 12 19 C 13 19, 14 19, 15 19.5" />
    </svg>
  )
}

/** Kompass med roterad nål (rumb). */
export function CompassIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="6.5" fill="currentColor" fillOpacity="0.10" />
      <path
        d="M14.5 9.5 L 12 14 L 9.5 14.5 L 12 10 Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  )
}

/** Halvmåne med två små stjärnor. */
export function MoonStarsIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <path
        d="M20 14.5 A 8 8 0 1 1 9.5 4 A 6 6 0 0 0 20 14.5 Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M17 5.5 L 17.6 6.7 L 18.8 7.3 L 17.6 7.9 L 17 9.1 L 16.4 7.9 L 15.2 7.3 L 16.4 6.7 Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M21 10 L 21.4 10.8 L 22.2 11.2 L 21.4 11.6 L 21 12.4 L 20.6 11.6 L 19.8 11.2 L 20.6 10.8 Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  )
}

/** Öppen bok – för "Min loggbok". */
export function BookIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <path
        d="M3.5 5 H 10 C 11.1 5, 12 5.9, 12 7 V 19 C 12 18.1, 11.1 17.4, 10 17.4 H 3.5 Z"
        fill="currentColor"
        fillOpacity="0.10"
      />
      <path
        d="M20.5 5 H 14 C 12.9 5, 12 5.9, 12 7 V 19 C 12 18.1, 12.9 17.4, 14 17.4 H 20.5 Z"
        fill="currentColor"
        fillOpacity="0.10"
      />
      <path d="M5.5 8.5 H 9.5" />
      <path d="M5.5 11 H 9.5" />
      <path d="M14.5 8.5 H 18.5" />
      <path d="M14.5 11 H 18.5" />
    </svg>
  )
}
