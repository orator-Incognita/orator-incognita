"use client";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useFormatter, useTranslations } from "next-intl";

interface StatProps {
  title: string;
  description: string;
  value: string;
}

const Stat = ({ title, description, value }: StatProps) => {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center text-4xl font-bold">
        {value}
      </CardContent>
    </Card>
  );
};

const TOTAL_TIME_HRS = 45 / 60;
const TOTAL_DEBATES = 7;
const TOTAL_QUESTIONS = 10;
const AVERAGE_TIME_HRS = TOTAL_TIME_HRS / TOTAL_DEBATES;

const StatsCard = () => {
  const t = useTranslations("DashboardPage.StatsCard");
  const formatter = useFormatter();

  const [totalTimeValue, totalTimeUnit] = useMemo(() => {
    if (TOTAL_TIME_HRS > 1) return [TOTAL_TIME_HRS, "hour"];

    const minutes = TOTAL_TIME_HRS * 60;

    if (minutes > 1) return [minutes, "minute"];

    return [minutes * 60, "second"];
  }, []);

  const [averageTimeValue, averageTimeUnit] = useMemo(() => {
    if (TOTAL_TIME_HRS > 1) return [AVERAGE_TIME_HRS, "hour"];

    const minutes = AVERAGE_TIME_HRS * 60;

    if (minutes > 1) return [minutes, "minute"];

    return [minutes * 60, "second"];
  }, []);

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <Stat
          title={t("TotalDebates.title")}
          description={t("TotalDebates.description")}
          value={formatter.number(TOTAL_DEBATES, {
            maximumFractionDigits: 0,
          })}
        />
        <Stat
          title={t("TotalTimeSpent.title")}
          description={t("TotalTimeSpent.description")}
          value={formatter.number(totalTimeValue, {
            style: "unit",
            unit: totalTimeUnit,
            unitDisplay: "short",
            maximumFractionDigits: 1,
          })}
        />
        <Stat
          title={t("AverageTimeSpent.title")}
          description={t("AverageTimeSpent.description")}
          value={formatter.number(averageTimeValue, {
            style: "unit",
            unit: averageTimeUnit,
            unitDisplay: "short",
            maximumFractionDigits: 1,
          })}
        />
        <Stat
          title={t("TotalQuestions.title")}
          description={t("TotalQuestions.description")}
          value={formatter.number(TOTAL_QUESTIONS, {
            maximumFractionDigits: 0,
          })}
        />
      </CardContent>
    </Card>
  );
};

export { StatsCard };
