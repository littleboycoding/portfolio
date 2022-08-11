import { Box } from "@chakra-ui/react";
import { useContext, useMemo } from "react";

import context from "./context"

const ParallaxLayer = ({
  children,
  z = 0,
}: {
  children: React.ReactNode;
  z?: number;
}) => {
  const perspective = useContext(context);
  const scale = useMemo(() => 1 + (z * -1) / 1, [z]);

  if (perspective === undefined) throw Error("no parallax context found");

  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      transform={`translateZ(${z}px) scale(${scale})`}
    >
      {children}
    </Box>
  );
};

export default ParallaxLayer;
