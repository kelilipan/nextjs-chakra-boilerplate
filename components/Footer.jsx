import { Box } from "@chakra-ui/core";
import Link from "@/components/Link";

const Footer = () => {
  return (
    <Box w="full" py="2" textAlign="center">
      with ❤️ by <Link href="https://github.com/raisoturu">raisoturu</Link>
    </Box>
  );
};

export default Footer;
