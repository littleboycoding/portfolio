import { AspectRatio, Box, Link, Tooltip } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({
  faIcon,
  label,
  href,
}: {
  faIcon: IconDefinition;
  label: string;
  href: string;
}) => {
  return (
    <Tooltip label={label}>
      <Link href={href} target="_blank">
        <AspectRatio
          p="1em"
          borderRadius="0.3em"
          border="1px solid rgba(255, 255, 255, 0.2)"
          fontSize="1.5em"
          bg="rgba(0, 0, 0, 0.8)"
          _hover={{
            bg: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box>
            <FontAwesomeIcon icon={faIcon} />
          </Box>
        </AspectRatio>
      </Link>
    </Tooltip>
  );
};

export default SocialButton;
