import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { LinkProps } from "next/link";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

interface SidebarLinkProps extends LinkProps {
  text: string;
  icon: IconType;
}
export function SidebarLink({ text, icon, href }: SidebarLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display={"flex"} alignContent="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight={"medium"}>
          {text}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
