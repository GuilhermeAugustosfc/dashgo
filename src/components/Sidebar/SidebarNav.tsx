import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { SidebarLink } from "./SidebarLink";
import { SidebarSection } from "./SidebarSection";

export function SidebarNav() {
  return (
    <Stack spacing={"12"} align="flex-start">
      <SidebarSection title="GERAL">
        <SidebarLink href="/dashboard" text="Dasboard" icon={RiDashboardLine} />
        <SidebarLink href="/users" text="Usuarios" icon={RiContactsLine} />
      </SidebarSection>

      <SidebarSection title="Automacao">
        <SidebarLink href="/forms" text="Formulario" icon={RiGitMergeLine} />
        <SidebarLink
          href="/automacao"
          text="Automacao"
          icon={RiInputMethodLine}
        />
      </SidebarSection>
    </Stack>
  );
}
