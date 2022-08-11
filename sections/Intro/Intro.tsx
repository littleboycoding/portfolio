import {
  Center,
  Heading,
  SlideFade,
  VStack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import Section from "../../components/Section";
import me from "../../public/me.jpeg";

const Intro = () => {
  return (
    <Section expand color="white">
      <Center h="full" w="full">
        <SlideFade in delay={0.5}>
          <VStack mt="-2em" alignItems="center" spacing="1em">
            <AspectRatio
              ratio={1}
              borderRadius="full"
              overflow="hidden"
              position="relative"
              w={["3xs", null, "2xs", "xs"]}
              boxShadow="xl"
            >
              <Image priority layout="fill" src={me} alt="profile picture" objectFit="cover" />
            </AspectRatio>
            <Heading>{"Thanawat Yodnil."}</Heading>
            <Text>{"I'm web developer 👋"}</Text>
          </VStack>
        </SlideFade>
      </Center>
    </Section>
  );
};

export default Intro;
