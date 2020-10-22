import NextLink from "next/link";
import { Link as ChakraLink, useColorMode } from "@chakra-ui/core";
const Link = ({
  children,
  href,
  isExternal = true,
  linkAs,
  route = false,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const linkProps = {
    color: props.color || (colorMode === "dark" ? "blue.300" : "blue.500"),
    children,
    ...props,
  };
  if (route) {
    return (
      <NextLink as={linkAs} href={href} passHref>
        <ChakraLink {...linkProps} />
      </NextLink>
    );
  }
  return <ChakraLink href={href} {...linkProps} isExternal={isExternal} />;
};

export default Link;
