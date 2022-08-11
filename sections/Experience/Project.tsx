import { AspectRatio, Box, Heading, VStack, Link } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InViewTransition from "../../components/InViewTransition";
import Image, { StaticImageData } from "next/image";

const Project = ({
  title,
  children,
  image,
  imageAlt,
  repository,
}: {
  title: string;
  children: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
  repository: string;
}) => {
  return (
    <InViewTransition>
      <VStack alignItems="stretch" spacing="1em">
        <AspectRatio boxShadow="md" ratio={3 / 2} w="full">
          <Image layout="fill" alt={imageAlt} src={image} objectFit="cover" />
        </AspectRatio>
        <Heading textAlign="center" fontSize="xl">
          {title}
        </Heading>
        {children}
        <Box>
          <Link fontSize="0.9em" color="teal" target="_blank" href={repository}>
            <FontAwesomeIcon icon={faGithub} /> Repository
          </Link>
        </Box>
      </VStack>
    </InViewTransition>
  );
};

export default Project;
