import {
  Box,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import Link from "@/components/Link";
import { FaSun, FaMoon } from "react-icons/fa";
const Navbar = () => {
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const color = useColorModeValue("gray.800", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Box w="full" mx="10px" height="50px">
      <Stack
        px={{ base: 2, md: 0 }}
        h="full"
        m="auto"
        maxW={[null, null, "2xl", "5xl"]}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/" route fontWeight="bold" color={color}>
          Hello
        </Link>
        <IconButton
          size="sm"
          aria-label="theme switcher"
          icon={Icons}
          onClick={toggleColorMode}
        />
      </Stack>
    </Box>
  );
};

export default Navbar;
