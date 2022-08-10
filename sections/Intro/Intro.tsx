import {
  Center,
  Heading,
  SlideFade,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Section from "../../components/Section";
import me from "../../public/me.jpeg";

const Intro = () => {
  const [size, setSize] = useState("100vh");

  useEffect(() => {
    const onResize = () => {
      setSize(innerHeight + "px");
    };

    onResize();

    addEventListener("resize", onResize);

    return () => {
      removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Section h={size} color="white">
      <Center h="full" w="full">
        <SlideFade in delay={0.5}>
          <VStack alignItems="center" spacing="1em">
            <Image
              src={me.src}
              alt="profile picture"
              borderRadius="full"
              w={[200, null, "xs"]}
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
