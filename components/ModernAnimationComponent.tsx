import { ModernAnimate } from "@abdullah-altun/react-animation-library";
import React, { Component } from "react";
import { ComponentGrid } from "./ComponentGrid";
import { DemoBox } from "./DemoBox";
import { DemoCard } from "./DemoCard";
import { Section } from "./Section";

export default class ModernAnimationComponent extends Component {
  render() {
    return (
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
                trigger: "visible",
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
                distance: 50,
                degrees: { start: 0, end: 180 },
              }}
            >
              <DemoBox>UP</DemoBox>
            </ModernAnimate>
          </DemoCard>
        </ComponentGrid>
      </Section>
    );
  }
}
