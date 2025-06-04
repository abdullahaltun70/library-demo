import { StaggeredAnimate } from "@abdullah-altun/react-animation-library";
import { Card, Flex, Avatar, Text } from "@radix-ui/themes";

export function StaggeredAnimateDemoForward() {
  return (
    <StaggeredAnimate
      itemAnimation={{ type: "fade", duration: 0.3 }}
      staggerDelay={0.1}
      staggerDirection="forward"
      autoStart
    >
      {Array.from({ length: 5 }, (_, idx) => (
        <Card key={idx}>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
            />

            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Flex>
        </Card>
      ))}
    </StaggeredAnimate>
  );
}

export function StaggeredAnimateDemoCentreOut() {
  return (
    <StaggeredAnimate
      itemAnimation={{ type: "fade", duration: 0.3 }}
      staggerDelay={0.1}
      staggerDirection="center-out"
      autoStart
    >
      {Array.from({ length: 5 }, (_, idx) => (
        <Card key={idx}>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
            />

            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Flex>
        </Card>
      ))}
    </StaggeredAnimate>
  );
}

export function StaggeredAnimateDemoReverse() {
  return (
    <StaggeredAnimate
      itemAnimation={{ type: "fade", duration: 0.3 }}
      staggerDelay={0.1}
      staggerDirection="reverse"
      autoStart
    >
      {Array.from({ length: 5 }, (_, idx) => (
        <Card key={idx}>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
            />

            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Flex>
        </Card>
      ))}
    </StaggeredAnimate>
  );
}
