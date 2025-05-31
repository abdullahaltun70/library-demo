// Comprehensive Animation Library Showcase

import React from "react";
import {
  Animate,
  ModernAnimate,
  InteractiveAnimate,
} from "@abdullah-altun/react-animation-library";

// Import types for better TypeScript support

import { ComponentGrid } from "@/components/ComponentGrid";
import { DemoBox } from "@/components/DemoBox";
import { DemoCard } from "@/components/DemoCard";
import { SequenceAnimateDemo } from "@/components/SequenceAnimationDemo";
import { StaggeredAnimateDemo } from "@/components/StaggeredAnimationDemo";
import { StateBasedCollapsibleDemo } from "@/components/StateBasedCollapsibleDemo";
import { StateBasedToggleDemo } from "@/components/StateBasedToggleDemo";
import { RadixDropdownDemo } from "../components/RadixDropdownDemo";
import { RadixMenubarDemo } from "../components/RadixMenubarDemo";
import { Section } from "@/components/Section";

export default function AnimationShowcase() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#22223b",
        lineHeight: 1.6,
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "64px 24px 48px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-2px",
            marginBottom: 16,
            background: "linear-gradient(135deg, #3b5bdb 0%, #6c5ce7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ✨ Animation Library Showcase
        </h1>
        <p
          style={{
            fontSize: "1.35rem",
            color: "#495057",
            margin: "0 auto",
            maxWidth: "600px",
            fontWeight: 400,
          }}
        >
          Pure CSS animations with zero client-side JavaScript state management
        </p>
      </header>

      {/* Navigation */}
      <nav
        style={{
          padding: "24px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "Basic Components",
            "Modern Components",
            "Advanced Components",
            "Interactive Elements",
            "State-based",
            "Radix UI Examples",
          ].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                background: "rgba(59, 91, 219, 0.1)",
                color: "#3b5bdb",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 24px" }}
      >
        {/* Basic Components Section */}
        <Section id="basic-components" title="🎯 Basic Animation Components">
          <ComponentGrid>
            <DemoCard
              title="Animate - Fade"
              description="Classic fade in animation"
            >
              <Animate type="fade" duration={0.8}>
                <DemoBox>Fade In</DemoBox>
              </Animate>
            </DemoCard>

            <DemoCard
              title="Animate - Slide X"
              description="Horizontal slide animation"
            >
              <Animate type="slide" axis="x" distance={-100} duration={0.6}>
                <DemoBox>Slide Left</DemoBox>
              </Animate>
            </DemoCard>

            <DemoCard
              title="Animate - Slide Y"
              description="Vertical slide animation"
            >
              <Animate type="slide" axis="y" distance={75} duration={0.6}>
                <DemoBox>Slide Down</DemoBox>
              </Animate>
            </DemoCard>

            <DemoCard title="Animate - Scale" description="Scale up animation">
              <Animate type="scale" scale={0.3} duration={0.5}>
                <DemoBox>Scale In</DemoBox>
              </Animate>
            </DemoCard>

            <DemoCard title="Animate - Rotate" description="Rotation animation">
              <Animate type="rotate" degrees={360} duration={1}>
                <DemoBox>🌟</DemoBox>
              </Animate>
            </DemoCard>

            <DemoCard
              title="Animate - Bounce"
              description="Bounce effect animation"
            >
              <Animate type="bounce" distance={30} duration={0.8}>
                <DemoBox>Bounce</DemoBox>
              </Animate>
            </DemoCard>
          </ComponentGrid>
        </Section>

        {/* Modern Components Section */}
        <Section id="modern-components" title="🚀 Modern Animation Components">
          <ComponentGrid>
            <DemoCard
              title="ModernAnimate - Single"
              description="Modern animation with advanced controls"
            >
              <ModernAnimate
                config={{
                  type: "fade",
                  duration: 0.6,
                  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                  trigger: "mount",
                }}
              >
                <DemoBox>Modern Fade</DemoBox>
              </ModernAnimate>
            </DemoCard>

            <DemoCard
              title="ModernAnimate - Array"
              description="Multiple animation types"
            >
              <ModernAnimate
                config={{
                  type: ["slide", "scale"],
                  duration: [0.5, 0.3],
                  delay: [0, 0.2],
                  distance: 50,
                  scale: { start: 0.8, end: 1.1 },
                }}
              >
                <DemoBox>Multi Animation</DemoBox>
              </ModernAnimate>
            </DemoCard>

            <DemoCard
              title="ModernAnimate - Complex"
              description="Complex multi-step animation"
            >
              <ModernAnimate
                config={{
                  type: ["fade", "slide", "rotate"],
                  duration: [0.3, 0.4, 0.6],
                  delay: [0, 0.1, 0.2],
                  axis: "y",
                  distance: 200,
                  degrees: { start: 0, end: 180 },
                }}
              >
                <DemoBox>UP</DemoBox>
              </ModernAnimate>
            </DemoCard>
          </ComponentGrid>
        </Section>

        {/* Advanced Components Section */}
        <Section
          id="advanced-components"
          title="⚡ Advanced Animation Components"
        >
          <ComponentGrid>
            <DemoCard
              title="SequenceAnimate"
              description="Orchestrated animation sequences"
              wide
            >
              <SequenceAnimateDemo />
            </DemoCard>

            <DemoCard
              title="StaggeredAnimate"
              description="Staggered child animations"
              wide
            >
              <StaggeredAnimateDemo />
            </DemoCard>
          </ComponentGrid>
        </Section>

        {/* Interactive Elements Section */}
        <Section
          id="interactive-elements"
          title="🎮 Interactive Animation Elements"
        >
          <ComponentGrid>
            <DemoCard
              title="InteractiveAnimate - Button"
              description="Hover and click micro-interactions"
            >
              <InteractiveAnimate
                hoverConfig={{
                  type: "scale",
                  scale: { start: 1, end: 1.05 },
                  duration: 0.2,
                }}
                clickConfig={{
                  type: "scale",
                  scale: { start: 1, end: 0.95 },
                  duration: 0.1,
                }}
              >
                <button
                  style={{
                    padding: "12px 24px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Hover & Click Me
                </button>
              </InteractiveAnimate>
            </DemoCard>

            <DemoCard
              title="InteractiveAnimate - Card"
              description="Interactive card with multiple states"
            >
              <InteractiveAnimate
                hoverConfig={{
                  type: ["scale", "rotate"],
                  scale: { start: 1, end: 1.02 },
                  degrees: { start: 0, end: 2 },
                  duration: 0.3,
                }}
                focusConfig={{
                  type: "scale",
                  scale: { start: 1, end: 1.03 },
                  duration: 0.2,
                }}
              >
                <div
                  tabIndex={0}
                  style={{
                    padding: "24px",
                    background:
                      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                    borderRadius: "12px",
                    cursor: "pointer",
                    outline: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                    🎨
                  </div>
                  <div style={{ fontWeight: 600, color: "#333" }}>
                    Interactive Card
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#666" }}>
                    Hover and focus me!
                  </div>
                </div>
              </InteractiveAnimate>
            </DemoCard>
          </ComponentGrid>
        </Section>

        {/* State-based Section */}
        <Section id="state-based" title="🎛️ State-Based Animations">
          <ComponentGrid>
            <DemoCard
              title="StateBasedAnimate - Collapsible"
              description="CSS-only collapsible with state animations"
              wide
            >
              <StateBasedCollapsibleDemo />
            </DemoCard>

            <DemoCard
              title="StateBasedAnimate - Toggle"
              description="Pure CSS toggle states with animations"
              wide
            >
              <StateBasedToggleDemo />
            </DemoCard>
          </ComponentGrid>
        </Section>

        {/* Radix UI Examples Section */}
        <Section id="radix-ui-examples" title="🎨 Radix UI Examples">
          <ComponentGrid>
            <DemoCard
              title="RadixAnimate - Dropdown Menu"
              description="Radix dropdown with smooth animations"
              wide
            >
              <RadixDropdownDemo />
            </DemoCard>

            <DemoCard
              title="RadixAnimate - Menubar"
              description="Professional animated menubar"
              wide
            >
              <RadixMenubarDemo />
            </DemoCard>
          </ComponentGrid>
        </Section>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "64px",
          padding: "48px 24px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            🎉 Animation Library Complete Showcase
          </h3>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            CSS-only animations with server-side rendering compatibility
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "2rem", fontWeight: 800, color: "#3b5bdb" }}
            >
              8
            </div>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>Components</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "2rem", fontWeight: 800, color: "#6c5ce7" }}
            >
              6
            </div>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              Animation Types
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "2rem", fontWeight: 800, color: "#fa709a" }}
            >
              100%
            </div>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>CSS-only</div>
          </div>
        </div>
        <small style={{ color: "#868e96", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} Animation Library by Abdullah Altun.
          Built with Next.js & React.
        </small>
      </footer>
    </main>
  );
}
