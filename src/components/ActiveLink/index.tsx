import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}
export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  let isActive = true;

  const { asPath } = useRouter();

  isActive = href == asPath || String(href).startsWith(asPath) ? true : false;

  return (
    <Link href={href} {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
