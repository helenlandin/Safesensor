import * as React from "react"

/**
 * Watercolor illustrations for the body-awareness grid.
 * PNGs live in /public/illustrations/<id>.png and are loaded as <img>.
 *
 * To swap to a different style/source later, change the `make` factory below.
 */

export type BodyAreaId =
  | "mage"
  | "brost"
  | "hals"
  | "kakar"
  | "huvud"
  | "axlar"
  | "armar"
  | "ben"
  | "hela"

const make = (id: BodyAreaId): React.ComponentType => {
  const Component = () => (
    <img
      src={`/illustrations/${id}.png`}
      alt=""
      className="h-full w-full object-cover"
      loading="lazy"
      draggable={false}
    />
  )
  Component.displayName = `BodyArt_${id}`
  return Component
}

export const BODY_AREA_ART: Record<BodyAreaId, React.ComponentType> = {
  mage: make("mage"),
  brost: make("brost"),
  hals: make("hals"),
  kakar: make("kakar"),
  huvud: make("huvud"),
  axlar: make("axlar"),
  armar: make("armar"),
  ben: make("ben"),
  hela: make("hela"),
}
