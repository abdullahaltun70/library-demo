import Animate from "@abdullah-altun/react-animation-library";
import { Section } from "./Section";
import React, { Component } from "react";
import { ComponentGrid } from "./ComponentGrid";
import { DemoBox } from "./DemoBox";
import { DemoCard } from "./DemoCard";

export default class BasicAnimationComponents extends Component {
  render() {
    return (
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
    );
  }
}
