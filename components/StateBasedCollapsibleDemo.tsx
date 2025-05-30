import {
  RadixAnimate,
  StateBasedAnimate,
} from "@abdullah-altun/react-animation-library/client";
import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export function StateBasedCollapsibleDemo() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item
          value="item-1"
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid #e2e8f0",
            width: "100%",
          }}
        >
          <Accordion.Header>
            <Accordion.Trigger asChild>
              <button
                style={{
                  // Undo button styling
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  textAlign: "left",

                  // Layout
                  width: "800px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  // Padding (desktop: 24px vertical, mobile: 16px vertical)
                  padding: "24px 0",

                  // Typography
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1a202c",
                }}
              >
                Click to expand content
                <StateBasedAnimate animationType="rotate" degrees={180}>
                  <ChevronDown
                    size={24}
                    style={{
                      minWidth: "24px",
                      minHeight: "24px",
                      maxWidth: "24px",
                      maxHeight: "24px",
                    }}
                  />
                </StateBasedAnimate>
              </button>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content
            style={{
              overflow: "hidden",
            }}
          >
            <RadixAnimate animationType="accordion-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  paddingBottom: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#4a5568",
                    lineHeight: 1.6,
                  }}
                >
                  <h4
                    style={{
                      margin: "0 0 12px 0",
                      color: "#2d3748",
                      fontWeight: 600,
                    }}
                  >
                    Animated Content
                  </h4>
                  <p style={{ margin: 0 }}>
                    This content automatically animates in and out using your
                    animation library. The styling follows modern accordion
                    patterns with clean typography and proper spacing.
                  </p>
                </div>
              </div>
            </RadixAnimate>
          </Accordion.Content>
        </Accordion.Item>

        {/* Additional accordion items for demonstration */}
        <Accordion.Item
          value="item-2"
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid #e2e8f0",
            width: "100%",
          }}
        >
          <Accordion.Header>
            <Accordion.Trigger asChild>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 0",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1a202c",
                }}
              >
                Another accordion item
                <StateBasedAnimate animationType="rotate" degrees={180}>
                  <ChevronDown
                    size={24}
                    style={{
                      minWidth: "24px",
                      minHeight: "24px",
                      maxWidth: "24px",
                      maxHeight: "24px",
                    }}
                  />
                </StateBasedAnimate>
              </button>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content style={{ overflow: "hidden" }}>
            <RadixAnimate animationType="accordion-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  paddingBottom: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#4a5568",
                    lineHeight: 1.6,
                  }}
                >
                  <p style={{ margin: 0 }}>
                    This is another accordion item to demonstrate how multiple
                    items work together. Each item can be expanded independently
                    when using type=&quot;multiple&quot; or one at a time with
                    type=&quot;single&quot;.
                  </p>
                </div>
              </div>
            </RadixAnimate>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
