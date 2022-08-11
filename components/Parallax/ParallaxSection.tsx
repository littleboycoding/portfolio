import { Box } from "@chakra-ui/react";

const ParallaxSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      position="relative"
      h="100vh"
      sx={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Box>
  );
};

export default ParallaxSection;
