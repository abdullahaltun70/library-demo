import {
  StateBasedAnimate,
  RadixAnimate,
  StaggeredAnimate,
} from "@abdullah-altun/react-animation-library";
import { User, ChevronDown, Mail, Bell, Settings, LogOut } from "lucide-react";
import { DropdownMenu } from "radix-ui";

export function RadixDropdownDemo() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 16px",
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <User size={16} />
            Account
            <StateBasedAnimate animationType="rotate" degrees={180}>
              <ChevronDown size={16} />
            </StateBasedAnimate>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <RadixAnimate animationType="accordion-content">
            <DropdownMenu.Content
              sideOffset={8}
              style={{
                width: "240px",
                height: "240px",
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                padding: "4px",
                zIndex: 1000,
              }}
            >
              <StaggeredAnimate
                itemAnimation={{
                  type: "fade",
                  duration: 0.3,
                }}
                staggerDelay={0.05}
                staggerDirection="forward"
                autoStart
              >
                <DropdownMenu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <User size={16} style={{ marginRight: "12px" }} />
                  Profile
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Mail size={16} style={{ marginRight: "12px" }} />
                  Messages
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Bell size={16} style={{ marginRight: "12px" }} />
                  Notifications
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Settings size={16} style={{ marginRight: "12px" }} />
                  Settings
                </DropdownMenu.Item>

                <DropdownMenu.Separator
                  style={{
                    height: "1px",
                    backgroundColor: "#e2e8f0",
                    margin: "4px 0",
                  }}
                />

                <DropdownMenu.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    outline: "none",
                    color: "#dc2626",
                    backgroundColor: "transparent",
                  }}
                >
                  <LogOut size={16} style={{ marginRight: "12px" }} />
                  Log out
                </DropdownMenu.Item>
              </StaggeredAnimate>
            </DropdownMenu.Content>
          </RadixAnimate>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
