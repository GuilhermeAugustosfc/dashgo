import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr="4" textAlign={"right"}>
          <Text>Guilherme Augusto</Text>
          <Text color={"gray.300"} fontSize="small">
            Guilherme.silva@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={"md"}
        name="Guilherme Augusto"
        src="https://github.com/GuilhermeAugustosfc.png"
      />
    </Flex>
  );
}
