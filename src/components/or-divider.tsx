import { useTranslations } from "next-intl";

const OrDivider = () => {
  const t = useTranslations("Common.Global");

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="grow border-b-2 border-solid border-muted"></div>
      <div className="text-muted-foreground">{t("or")}</div>
      <div className="grow border-b-2 border-solid border-muted"></div>
    </div>
  );
};

export { OrDivider };
