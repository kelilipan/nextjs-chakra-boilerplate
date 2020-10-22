import { Stack } from "@chakra-ui/core";

const Main = (props) => {
  return (
    <Stack flex={1} w="full" maxW={[null, null, "2xl", "5xl"]} {...props} />
  );
};

export default Main;
