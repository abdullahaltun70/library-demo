import {
  AnimationSequence,
  SequenceAnimate,
} from "@abdullah-altun/react-animation-library";
import { DemoBox } from "./DemoBox";

export function SequenceAnimateDemo() {
  const sequence: AnimationSequence = {
    name: "showcase-sequence",
    steps: [
      {
        animations: [{ type: "fade", duration: 0.4 }],
        parallel: false,
      },
      {
        animations: [
          { type: "slide", axis: "x", duration: 0.5, distance: 50 },
          { type: "scale", duration: 0.5, scale: 0.8 },
        ],
        parallel: true,
        delay: 0.2,
      },
      {
        animations: [
          { type: "rotate", duration: 0.6, degrees: { start: 0, end: 360 } },
        ],
        parallel: false,
        delay: 0.1,
      },
    ],
  };

  return (
    <SequenceAnimate sequence={sequence} autoStart>
      <DemoBox>🎬 Sequence Animation</DemoBox>
    </SequenceAnimate>
  );
}
