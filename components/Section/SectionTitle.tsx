import { VStack, Heading, Text } from "@chakra-ui/react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <VStack>
      <Heading>{title}</Heading>
      <Text fontSize={["sm", null, "md"]} color="#5e5e5e">
        {subtitle}
      </Text>
    </VStack>
  );
};

export default SectionTitle;
