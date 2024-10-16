"use client";
import { Compass, CompassPoint } from "../compass";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useFormatter, useNow, useTranslations } from "next-intl";

interface Props {
  isEmpty?: boolean;
  isDisabled?: boolean;
}

const CompassCard = ({ isEmpty, isDisabled }: Props) => {
  const t = useTranslations("DashboardPage.CompassCard");
  const formatter = useFormatter();
  const now = useNow({
    updateInterval: 1000 * 60, // 1 minute
  });

  return (
    <Card className="row-span-2">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          {t("title", { empty: isEmpty })}
        </CardTitle>
        <CardDescription>
          {t("description", { empty: isEmpty })}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full p-4">
        <Compass className="h-auto w-full">
          <CompassPoint socialAxis={-0.71} economicAxis={-0.31} />
        </Compass>
      </CardContent>
      <CardFooter>
        {isDisabled ? (
          <Button className="w-full" disabled>
            {t("take-test-disabled", {
              // TODO: Use actual date
              time: formatter.relativeTime(
                Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
                now,
              ),
            })}
          </Button>
        ) : (
          <Button className="w-full">
            {t("take-test", { empty: isEmpty })}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export { CompassCard };
