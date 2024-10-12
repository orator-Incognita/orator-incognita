import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useTranslations } from "next-intl";
import { PatreonIcon } from "../icons/patreon";
import { PaypalIcon } from "../icons/paypal";
import { OrDivider } from "../or-divider";

const SupportUsCard = () => {
  const t = useTranslations("DashboardPage.SupportUsCard");

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex gap-6">
          <Button
            variant="outline"
            className="h-28 grow flex-col gap-2 text-lg font-semibold"
          >
            <PatreonIcon className="size-10" />
            {t("patreon")}
          </Button>
          <Button
            variant="outline"
            className="h-28 grow flex-col gap-2 text-lg font-semibold"
          >
            <PaypalIcon className="size-10" />
            {t("paypal")}
          </Button>
        </div>
        <OrDivider />
        <Button className="w-full">{t("contribute")}</Button>
      </CardContent>
    </Card>
  );
};

export { SupportUsCard };
