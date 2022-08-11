import {
  Center,
  Heading,
  SlideFade,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Section from "../../components/Section";
import me from "../../public/me.jpeg";

const Intro = () => {
  return (
    <Section expand color="white">
      <Center h="full" w="full">
        <SlideFade in delay={0.5}>
          <VStack mt="-2em" alignItems="center" spacing="1em">
            <Image
              src={me.src}
              alt="profile picture"
              borderRadius="full"
              w={["3xs", null, "2xs", "xs"]}
              boxShadow="xl"
            />
            <Heading>{"Thanawat Yodnil."}</Heading>
            <Text>{"I'm web developer 👋"}</Text>
          </VStack>
        </SlideFade>
      </Center>
    </Section>
  );
};

export default Intro;
