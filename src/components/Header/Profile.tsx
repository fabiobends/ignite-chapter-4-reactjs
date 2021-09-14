import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fábio Mendes</Text>
          <Text color="gray.300" fontSize="small">
            fabiomendeslps@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Fábio Mendes"
        src="https://github.com/fabiobends.png"
      />
    </Flex>
  );
}
