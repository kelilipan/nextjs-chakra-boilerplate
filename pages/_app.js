import Footer from "@/components/Footer";
import { ChakraProvider, Stack } from "@chakra-ui/core";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Stack minH="100vh" w="full" alignItems="center">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default MyApp;
