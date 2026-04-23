import { useState } from "react";

function getColor(value: number) {
  if (value <= 3) return "#4A90D9";
  if (value <= 6) return "#F5A623";
  return "#E03A3A";
}

function getLabel(value: number) {
  if (value <= 3) return "Låg aktivering – du är lugn";
  if (value <= 6) return "Mellannivå – du är vaken";
  return "Hög aktivering – du är påslagen";
}

export default function ActivationSlider() {
  const [level, setLevel] = useState(5);
  const color = getColor(level);

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "400px",
      margin: "0 auto",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      <h2 style={{ color: color, transition: "color 0.3s" }}>
        Aktiveringsnivå
      </h2>
      <div style={{
        fontSize: "5rem",
        fontWeight: "bold",
        color: color,
        transition: "color 0.3s"
      }}>
        {level}
      </div>
      <p style={{
        color: color,
        fontSize: "1rem",
        marginBottom: "1.5rem",
        transition: "color 0.3s"
      }}>
        {getLabel(level)}
      </p>
      <input
        type="range"
        min={1}
        max={10}
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
        style={{
          width: "100%",
          accentColor: color,
          cursor: "pointer"
        }}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.8rem",
        color: "#888",
        marginTop: "0.5rem"
      }}>
        <span>1 – Lugn</span>
        <span>10 – Högt aktiverad</span>
      </div>
    </div>
  );
}