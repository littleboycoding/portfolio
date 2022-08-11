import { AspectRatio, Box, Link, Tooltip } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({
  faIcon,
  label,
  href,
  title,
}: {
  faIcon: IconDefinition;
  label: string;
  href: string;
  title: string;
}) => {
  return (
    <Tooltip label={label} bg="teal">
      <Link href={href} isExternal>
        <AspectRatio
          p="1em"
          borderRadius="0.3em"
          border="1px solid rgba(255, 255, 255, 0.2)"
          fontSize="1.5em"
          bg="rgba(0, 128, 128, 0.2)"
          _hover={{
            bg: "rgba(0, 128, 128, 0.8)",
          }}
        >
          <Box>
            <FontAwesomeIcon title={title} icon={faIcon} />
          </Box>
        </AspectRatio>
      </Link>
    </Tooltip>
  );
};

export default SocialButton;
