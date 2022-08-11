import { Box } from "@chakra-ui/react";
import context from "./context";

/**
 * Parallax in CSS implementation
 */
const Parallax = ({
  children,
  perspective,
}: {
  children: React.ReactNode;
  perspective: number;
}) => {
  return (
    <context.Provider value={perspective}>
      <Box
        h="100vh"
        overflowX="hidden"
        overflowY="auto"
        position="relative"
        sx={{ perspective }}
      >
        {children}
      </Box>
    </context.Provider>
  );
};
export default Parallax;
