import { Link } from "@/src/i18n/routing";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useTranslations } from "next-intl";

const FindOratorCard = () => {
  const t = useTranslations("DashboardPage.FindOratorCard");

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/app/chat">{t("find")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { FindOratorCard };
