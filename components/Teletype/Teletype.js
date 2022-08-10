import { useState, useMemo, useEffect } from "react";
import { Box, HStack, Circle, VStack, Text } from "@chakra-ui/react";

const TeletypeBackup = ({
  lines = [],
  speed = 20,
  title = "",
  animated = true,
}) => {
  const [typed, setTyped] = useState([]);
  const [line, setLine] = useState(0);

  useEffect(() => {
    setTyped([]);
    setLine(0);

    if (!animated) {
      setTyped(lines);
    }
  }, [lines, animated]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (line < lines.length) {
        if ((typed[line]?.length || 0) < lines[line].length) {
          const newTyped = [...typed];

          newTyped[line] = lines[line].slice(
            0,
            newTyped[line]?.length + 1 || 1
          );

          setTyped(newTyped);
        } else {
          setLine(line + 1);
        }
      }
    }, speed);

    return () => {
      clearTimeout(timeout);
    };
  }, [typed, line, speed, lines]);

  const mappedLine = useMemo(
    () => typed.map((line, index) => <Text key={index}>$ {line}</Text>),
    [typed]
  );

  return (
    <Box
      border="1px solid rgba(255, 255, 255, 0.2)"
      bg="rgba(0, 0, 0, 0.8)"
      borderRadius="1em"
      color="white"
      fontFamily="monospace"
      fontSize={["sm", null, "md"]}
    >
      <HStack p="1em">
        <Circle bg="#ff605c" size="1em" />
        <Circle bg="#ffbd44" size="1em" />
        <Circle bg="#00ca4e" size="1em" />
        <Text w="100%" textAlign="center">
          {title}
        </Text>
      </HStack>
      <VStack alignItems="start" p="1em">
        {mappedLine}
      </VStack>
    </Box>
  );
};

const Teletype = ({ lines = [], title = "" }) => {
  const mappedLine = useMemo(
    () => lines.map((line, index) => <Text key={index}>$ {line}</Text>),
    [lines]
  );

  return (
    <Box
      border="1px solid rgba(255, 255, 255, 0.2)"
      bg="rgba(0, 0, 0, 0.8)"
      borderRadius="1em"
      color="white"
      fontFamily="monospace"
      fontSize={["sm", null, "md"]}
    >
      <HStack p="1em">
        <Circle bg="#ff605c" size="1em" />
        <Circle bg="#ffbd44" size="1em" />
        <Circle bg="#00ca4e" size="1em" />
        <Text w="100%" textAlign="center">
          {title}
        </Text>
      </HStack>
      <VStack alignItems="start" p="1em">
        {mappedLine}
      </VStack>
    </Box>
  );
};

export default Teletype;
