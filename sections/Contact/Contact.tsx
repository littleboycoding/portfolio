import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Section from "../../components/Section";
import SocialButton from "./SocialButton";

const Contact = () => {
  return (
    <Section color="white" as="footer" expand position="relative">
      <VStack
        justifyContent="center"
        alignItems="center"
        h="full"
        spacing="1em"
      >
        <Heading id="contact">{"Contact"}</Heading>
        <Text>{"Work / Talk / Anything"}</Text>
        <HStack>
          <SocialButton
            faIcon={faGithub}
            label="@littleboycoding"
            href="https://github.com/littleboycoding"
          />
          <SocialButton
            faIcon={faFacebook}
            label="Thanawat Yodnil"
            href="https://facebook.com/littleboycoding"
          />
          <SocialButton
            faIcon={faEnvelope}
            label="littleboycoding@gmail.com"
            href="mailto:littleboycoding@gmail.com"
          />
        </HStack>
      </VStack>
    </Section>
  );
};

export default Contact;
