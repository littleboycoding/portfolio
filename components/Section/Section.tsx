import { useMemo } from "react";
import { Box, Container, BoxProps, ContainerProps } from "@chakra-ui/react";

const Section = ({
  expand,
  container,
  ...props
}: BoxProps & {
  expand?: boolean;
  container?: ContainerProps;
}) => {
  const isFill = useMemo(() => expand && { height: "100vh" }, [expand]);

  return (
    <Box as="section" {...isFill} {...props}>
      <Container maxW="container.lg" h="full" py="5em" {...container}>
        {props.children}
      </Container>
    </Box>
  );
};

export default Section;
