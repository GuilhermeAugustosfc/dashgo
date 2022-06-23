import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawerContextData } from "../../context/SideDrawerContext";
import { Logo } from "../Header/Logo";
import { NotificationNav } from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";
export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const { onOpen } = useSidebarDrawerContextData();

  return (
    <Flex
      as={"header"}
      w={"100%"}
      maxWidth={1480}
      h={"20"}
      mx={"auto"}
      mt={"4"}
      px="6"
      align={"center"}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize={"24"}
          variant="outline"
          onClick={onOpen}
        ></IconButton>
      )}

      <Logo />

      <SearchBox />
      <NotificationNav />

      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
}
