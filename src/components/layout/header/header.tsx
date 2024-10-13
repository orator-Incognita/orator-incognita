import React from "react";
import { UserNav } from "./user-nav";
import { OratorIncognitaLogo } from "../../logo";
import { Link } from "@/src/i18n/routing";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

const Header = ({ session }: Props) => (
  <div className="sticky top-0 z-10 w-full border-b opacity-90 backdrop-blur-lg">
    <div className="flex h-16 items-center px-4 transition-colors delay-1000 ease-linear backdrop:bg-background backdrop:opacity-40 backdrop:blur-sm backdrop:saturate-200">
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
