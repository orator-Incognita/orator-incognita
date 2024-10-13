"use client";
import { Compass, CompassPoint } from "../compass";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useTranslations } from "next-intl";

const RecentDebatesCard = () => {
  const t = useTranslations("DashboardPage.RecentDebatesCard");

  return (
    <Card className="row-span-2">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="w-full p-4">
        <Compass className="h-auto w-full">
          <CompassPoint socialAxis={-0.71} economicAxis={-0.84} />
          <CompassPoint socialAxis={-0.65} economicAxis={-0.37} />
          <CompassPoint socialAxis={-0.36} economicAxis={-0.22} />
          <CompassPoint socialAxis={-0.44} economicAxis={-0.89} />
          <CompassPoint socialAxis={-0.93} economicAxis={-0.27} />
          <CompassPoint socialAxis={-0.77} economicAxis={-0.54} />
          <CompassPoint socialAxis={-0.75} economicAxis={-0.52} />
          <CompassPoint socialAxis={-0.73} economicAxis={-0.54} />
          <CompassPoint socialAxis={-0.33} economicAxis={-0.56} />
          <CompassPoint socialAxis={-0.22} economicAxis={-0.32} />
        </Compass>
      </CardContent>
    </Card>
  );
};

export { RecentDebatesCard };
