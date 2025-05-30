"use client";
import { StateBasedAnimate } from "@abdullah-altun/react-animation-library/client";

export function StateBasedToggleDemo() {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <label
          style={{
            display: "block",
            marginBottom: "12px",
            fontWeight: 600,
            color: "#495057",
          }}
        >
          Scale Toggle
        </label>
        <label
          style={{ cursor: "pointer", display: "inline-block" }}
          data-state="inactive"
        >
          <input
            type="checkbox"
            style={{ display: "none" }}
            onChange={(e) => {
              const label = e.target.closest("label");
              label?.setAttribute(
                "data-state",
                e.target.checked ? "active" : "inactive"
              );
            }}
          />
          <StateBasedAnimate
            animationType="scale"
            scale={1.5}
            triggerState="inactive"
            stateSelector="[data-state='active']"
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              📦
            </div>
          </StateBasedAnimate>
        </label>
      </div>

      <div style={{ textAlign: "center" }}>
        <label
          style={{
            display: "block",
            marginBottom: "12px",
            fontWeight: 600,
            color: "#495057",
          }}
        >
          Rotate Toggle
        </label>
        <label
          style={{ cursor: "pointer", display: "inline-block" }}
          data-state="inactive"
        >
          <input
            type="checkbox"
            style={{ display: "none" }}
            onChange={(e) => {
              const label = e.target.closest("label");
              label?.setAttribute(
                "data-state",
                e.target.checked ? "active" : "inactive"
              );
            }}
          />
          <StateBasedAnimate
            animationType="rotate"
            degrees={270}
            triggerState="active"
            stateSelector="[data-state='active']"
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              ⬆⬆︎
            </div>
          </StateBasedAnimate>
        </label>
      </div>

      <div style={{ textAlign: "center" }}>
        <label
          style={{
            display: "block",
            marginBottom: "12px",
            fontWeight: 600,
            color: "#495057",
          }}
        >
          Fade Toggle
        </label>
        <label
          style={{ cursor: "pointer", display: "inline-block" }}
          data-state="inactive"
        >
          <input
            type="checkbox"
            style={{ display: "none" }}
            onChange={(e) => {
              const label = e.target.closest("label");
              label?.setAttribute(
                "data-state",
                e.target.checked ? "active" : "inactive"
              );
            }}
          />
          <StateBasedAnimate
            animationType="fade"
            triggerState="inactive"
            stateSelector="[data-state='active']"
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #00b894 0%, #55a3ff 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              ✨
            </div>
          </StateBasedAnimate>
        </label>
      </div>
    </div>
  );
}
