import {
  StateBasedAnimate,
  StaggeredAnimate,
} from "@abdullah-altun/react-animation-library/client";
import { ChevronDown } from "lucide-react";
import { Menubar } from "radix-ui";

export function RadixMenubarDemo() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Menubar.Root
        style={{
          display: "flex",
          backgroundColor: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <MenubarItem
          label="File"
          items={["New File", "Open", "Save", "Save As", "Export"]}
        />
        <MenubarItem
          label="Edit"
          items={["Undo", "Redo", "Cut", "Copy", "Paste", "Find"]}
        />
        <MenubarItem
          label="View"
          items={["Zoom In", "Zoom Out", "Full Screen", "Sidebar"]}
        />
        <MenubarItem
          label="Help"
          items={["Documentation", "Keyboard Shortcuts", "About"]}
        />
      </Menubar.Root>
    </div>
  );
}

function MenubarItem({ label, items }: { label: string; items: string[] }) {
  return (
    <Menubar.Menu>
      <Menubar.Trigger
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 16px",
          border: "none",
          background: "none",
          cursor: "pointer",
          borderRadius: 6,
          color: "#495057",
          fontSize: "0.9rem",
          fontWeight: 500,
          position: "relative",
          outline: "none",
        }}
      >
        {label}
        <span style={{ display: "inline-block" }}>
          <StateBasedAnimate animationType="rotate" degrees={180}>
            <ChevronDown size={15} style={{ color: "#6c757d" }} />
          </StateBasedAnimate>
        </span>
      </Menubar.Trigger>

      <Menubar.Portal>
        <Menubar.Content
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 6,
            padding: 4,
            minWidth: 180,
            // height: "250px",
            boxShadow:
              "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
            overflow: "hidden",
            marginTop: 8,
            // zIndex: 1000,
          }}
        >
          <StaggeredAnimate
            itemAnimation={{
              type: "fade",
              duration: 0.2,
            }}
            staggerDelay={0.03}
            staggerDirection="forward"
            autoStart
          >
            {items.map((item, index) => (
              <Menubar.Item
                key={index}
                style={{
                  padding: "10px 16px",
                  cursor: "pointer",
                  display: "block",
                  borderRadius: 4,
                  marginBottom: 2,
                  fontSize: "0.875rem",
                  color: "#343a40",
                  userSelect: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
              >
                {item}
              </Menubar.Item>
            ))}
          </StaggeredAnimate>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
}
