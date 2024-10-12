import { Button } from "@/src/components/ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { ThemeRadioGroup } from "./theme-radio-group";
import { useLocale, useTranslations } from "next-intl";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Session } from "next-auth";
import { signOut } from "@/src/auth";

const MOCK_USER = {
  name: "John Doe",
  email: "jdoe@oratorincognita.com",
  avatar: "https://picsum.photos/32",
};

// TODO: Implement onClicks & keyboard navigation
interface Props {
  session: Session;
}

export const UserNav = ({ session }: Props) => {
  const t = useTranslations("Common.Navbar");
  const locale = useLocale();
  const { user } = session;

  // At most two letters
  const initials =
    user?.name
      ?.split(" ")
      .map((name, idx, arr) =>
        // Fist and last initial to skip middle names
        idx === 0 || idx + 1 === arr.length ? name[0] : "",
      )
      .join("")
      .toUpperCase() || "?"; // ? If no name is given

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {user?.image && (
              <AvatarImage
                src={user?.image}
                alt={t("avatar-alt", { username: MOCK_USER.name })}
              />
            )}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {/* TODO: Assuming at least one of email and name is available */}
            {user?.name && (
              <p className="text-sm font-medium leading-none">{user.name}</p>
            )}
            {user?.email && (
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {t("my-profile")}
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {t("settings")}
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <ThemeRadioGroup />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: `/${locale}/sign-in` });
            }}
          >
            <button>{t("sign-out")}</button>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
