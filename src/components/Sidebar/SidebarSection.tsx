import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
interface SidebarSectionProps {
  title: string;
  children: ReactNode;
}
export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <Box>
      <Text fontWeight={"bold"} color="gray.400" fontSize={"small"}>
        {title}
      </Text>
      <Stack spacing={"4"} mt="8" align={"stretch"}>
        {children}
      </Stack>
    </Box>
  );
}
