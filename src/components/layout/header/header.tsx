import React from "react";
import { UserNav } from "./user-nav";
import { OratorIncognitaLogo } from "../../logo";
import { Link } from "@/src/i18n/routing";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

const Header = ({ session }: Props) => (
  <div className="sticky top-0 w-full border-b bg-background">
    <div className="flex h-16 items-center px-4">
      <Link href="/app">
        <OratorIncognitaLogo />
      </Link>
      <div className="ml-auto flex items-center space-x-4">
        <UserNav session={session} />
      </div>
    </div>
  </div>
);

export { Header };
