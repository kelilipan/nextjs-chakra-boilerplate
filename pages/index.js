import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/core";
import Head from "next/head";
import Main from "@/components/Main";
export default function Home() {
  return (
    <Main px={{ base: 2, md: 0 }}>
      <Head>
        <title>Next.js + chakra-ui boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column">
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Next.js + Chakra-ui ⚡ boilerplate
        </Heading>
        <Text textAlign="center">
          a personal next.js+chakra-ui bolierplate to kickstart my app
          development.
        </Text>
        <Text textAlign="center" mt="4">
          Because this page does nothing, here&apos;s a cute cat picture for you
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 2, md: 8 }}>
          <Image src="https://placekitten.com/550/300"></Image>
          <Image src="https://placekitten.com/550/300"></Image>
          <Image src="https://placekitten.com/550/300"></Image>
          <Image src="https://placekitten.com/550/300"></Image>
          <Image src="https://placekitten.com/550/300"></Image>
          <Image src="https://placekitten.com/550/300"></Image>
        </SimpleGrid>
      </Flex>
    </Main>
  );
}
