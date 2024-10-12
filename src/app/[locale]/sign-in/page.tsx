import { oAuthProviders, signIn } from "@/src/auth";
import { GoogleIcon } from "@/src/components/icons/google";
import { InfoTooltip } from "@/src/components/info-tooltip";
import { OratorIncognitaLogo } from "@/src/components/logo";
import ThemeToggle from "@/src/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { Button } from "@/src/components/ui/button";
import { redirect } from "@/src/i18n/routing";
import { ExclamationTriangleIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { AuthError } from "next-auth";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  searchParams: {
    callbackUrl?: string;
    error?: string;
  };
}

const ICON_MAP: Record<string, (props: IconProps) => ReactNode> = {
  google: GoogleIcon,
  github: GitHubLogoIcon,
};

const SignInPage = ({ searchParams: { callbackUrl, error } }: Props) => {
  const t = useTranslations("SignInPage");
  const locale = useLocale();

  return (
    <div className="flex h-screen justify-center">
      <div className="container grid h-full flex-col items-center justify-center px-4 lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="hidden h-full flex-col bg-muted p-10 lg:flex">
          <OratorIncognitaLogo href="/" />
          {/* TODO: Remove */}
          <ThemeToggle />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {t("title")}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t("description")}
                <InfoTooltip>{t("description-tooltip")}</InfoTooltip>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {error && (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>{t("error.title")}</AlertTitle>
                  <AlertDescription>{t("error.description")}</AlertDescription>
                </Alert>
              )}
              {oAuthProviders.map((provider) => {
                const Icon = ICON_MAP[provider.id];

                return (
                  <form
                    key={provider.id}
                    action={async () => {
                      "use server";
                      try {
                        await signIn(provider.id, {
                          redirectTo: callbackUrl ?? `/${locale}/app`,
                        });
                      } catch (error) {
                        if (error instanceof AuthError) {
                          return redirect(`/sign-in?error=${error.type}`);
                        }

                        throw error;
                      }
                    }}
                  >
                    <Button
                      key={provider.id}
                      type="submit"
                      className="w-full gap-2"
                      variant={provider.id as "google" | "github"}
                      size="lg"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      {t("sign-in-with", { provider: provider.name })}
                    </Button>
                  </form>
                );
              })}
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              {t.rich("disclaimer", {
                terms: (text) => (
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    {text}
                  </Link>
                ),
                privacy: (text) => (
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    {text}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
