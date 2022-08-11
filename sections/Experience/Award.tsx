import { AspectRatio, VStack, Text, Image } from "@chakra-ui/react";
import InViewTransition from "../../components/InViewTransition";

const Award = ({
  description,
  image,
  imageAlt,
}: {
  description: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <InViewTransition>
      <VStack spacing={4}>
        <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
          <Image alt={imageAlt} src={image} />
        </AspectRatio>
        <Text>{description}</Text>
      </VStack>
    </InViewTransition>
  );
};

export default Award;
