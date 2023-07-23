"use client";

import exhausted from "@/utils/exhausted";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Anchor from "./Anchor";

const links = [
  { href: "/posts", title: "Blog" },
  { href: "/about", title: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ href, title }, key) => (
        <Fragment key={key}>
          <Anchor
            selected={pathname?.startsWith(href)}
            disabled={pathname === href}
          >
            {({
              style,
              onBlur,
              onClick,
              onFocus,
              onMouseEnter,
              onMouseLeave,
              tabIndex,
              ...restProps
            }) =>
              exhausted(restProps) && (
                <Link
                  href={href}
                  style={style}
                  onBlurCapture={onBlur}
                  onClick={onClick}
                  onFocus={onFocus}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  tabIndex={tabIndex}
                >
                  {title}
                </Link>
              )
            }
          </Anchor>
        </Fragment>
      ))}
    </>
  );
}
