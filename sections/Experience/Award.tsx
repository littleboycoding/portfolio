import { AspectRatio, VStack, Text } from "@chakra-ui/react";
import InViewTransition from "../../components/InViewTransition";
import Image, { StaticImageData } from "next/image";

const Award = ({
  description,
  image,
  imageAlt,
}: {
  description: string;
  image: StaticImageData;
  imageAlt: string;
}) => {
  return (
    <InViewTransition>
      <VStack spacing={4}>
        <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
          <Image layout="fill" alt={imageAlt} src={image} objectFit="cover" />
        </AspectRatio>
        <Text>{description}</Text>
      </VStack>
    </InViewTransition>
  );
};

export default Award;
