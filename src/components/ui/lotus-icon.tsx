import * as React from "react"

export type LotusIconProps = React.SVGProps<SVGSVGElement> & {
  /** Storleken på ikonen i pixlar (standard 24). */
  size?: number
}

/**
 * Anpassad lotus-ikon i samma stil som lucide (1.5 stroke, currentColor).
 * Har även en mjuk fyllning för en lite mer botanisk känsla.
 */
export function LotusIcon({ size = 24, ...props }: LotusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M3.8 16.6 C5.6 19.2 8.6 20.7 12 20.7 C15.4 20.7 18.4 19.2 20.2 16.6"
        fill="currentColor"
        fillOpacity="0.12"
      />

      <path
        d="M12 6 C13.7 8.4 14.4 11 14.4 13.4 C14.4 15.6 13.5 17.6 12 19.2 C10.5 17.6 9.6 15.6 9.6 13.4 C9.6 11 10.3 8.4 12 6 Z"
        fill="currentColor"
        fillOpacity="0.18"
      />

      <path
        d="M12 8 C9 9.4 7.2 12 6.6 14.6 C6.3 16.1 6.5 17.6 7.1 19 C9.1 18.6 10.7 17.4 11.7 15.7"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path
        d="M12 8 C15 9.4 16.8 12 17.4 14.6 C17.7 16.1 17.5 17.6 16.9 19 C14.9 18.6 13.3 17.4 12.3 15.7"
        fill="currentColor"
        fillOpacity="0.14"
      />

      <path
        d="M4.4 13.5 C5.6 16.2 8.4 17.8 11.6 17.5"
        fill="currentColor"
        fillOpacity="0.10"
      />
      <path
        d="M19.6 13.5 C18.4 16.2 15.6 17.8 12.4 17.5"
        fill="currentColor"
        fillOpacity="0.10"
      />

      <path d="M12 19.2 C8.5 19.2 5.6 17.5 4 14.8" />
      <path d="M12 19.2 C15.5 19.2 18.4 17.5 20 14.8" />
    </svg>
  )
}
