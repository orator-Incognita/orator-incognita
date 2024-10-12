import { useTranslations } from "next-intl";
import { SVGProps } from "react";
import { Link } from "../i18n/routing";

export const OratorIncognitaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 25C18 25 22 20.9706 22 16C22 11.0294 17.9706 7 13 7C8.02944 7 4 11 4 16C4 21 4 18 4 18L4.5 19L5 20L5 21L5 28.5L10.5 25C10.5 25 8 25 13 25ZM13 26C18 26 23 21.5228 23 16C23 10.4772 18.5228 6 13 6C7.47715 6 3 10.5 3 16C3 16 3 18 3.5 19C4 20 4 20 4 20V21L4 30H5L11 26H13Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 25C18 25 22 20.9706 22 16C22 11.0294 17.9706 7 13 7C8.02944 7 4 11 4 16C4 21 4 18 4 18L4.5 19L5 20L5 21L5 28.5L10.5 25C10.5 25 8 25 13 25ZM13 26C18 26 23 21.5228 23 16C23 10.4772 18.5228 6 13 6C7.47715 6 3 10.5 3 16C3 16 3 18 3.5 19C4 20 4 20 4 20V21L4 30H5L11 26H13Z"
      fill="currentColor"
    />
    <path
      d="M24 6L21 7V11L20 10V6H21L28.1924 3.82843L27.0155 7.67823L26 11V26H20V22L21 21V25H25V11L27 5L24 6Z"
      fill="currentColor"
    />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
    <circle cx="13" cy="16" r="1" fill="currentColor" />
    <circle cx="17" cy="16" r="1" fill="currentColor" />
  </svg>
);

interface Props {
  href?: string;
}

export const OratorIncognitaLogo = ({ href }: Props) => {
  const t = useTranslations("Common.Global");

  if (!href) {
    return (
      <div className="flex items-center space-x-2">
        <OratorIncognitaIcon />
        <span className="text-lg font-semibold">{t("orator-incognita")}</span>
      </div>
    );
  }

  return (
    <Link href={href} className="flex items-center space-x-2">
      <OratorIncognitaIcon />
      <span className="text-lg font-semibold">{t("orator-incognita")}</span>
    </Link>
  );
};
