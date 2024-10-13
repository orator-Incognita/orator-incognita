import { Link } from "@/src/i18n/routing";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useTranslations } from "next-intl";
import { InfoTooltip } from "../info-tooltip";
import ReactCountryFlag from "react-country-flag";
import { CheckIcon } from "lucide-react";
import { GlobeIcon } from "@radix-ui/react-icons";
import { cx } from "class-variance-authority";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const mockServers = [
  {
    id: 1,
    name: "Poland",
    location: "Warsaw",
    url: "google.com",
    official: true,
  },
  {
    id: 2,
    name: "United States",
    location: "San Francisco",
    url: "google.com",
    official: true,
  },
  {
    id: 3,
    name: "Community",
    location: "Frankfurt",
    url: "google.com",
    official: false,
  },
];

const PICKED_SERVER = {
  id: 1,
  name: "Poland 1",
  countries: ["pl"],
  url: "google.com",
  official: true,
};

const FindOratorCard = () => {
  const globalT = useTranslations("Common.Global");
  const t = useTranslations("DashboardPage.FindOratorCard");

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">
          {globalT("server")}
          <InfoTooltip className="font-normal">
            {t("server-tooltip")}
          </InfoTooltip>
        </h3>
        <div className="flex items-center">
          <div className="flex grow flex-row justify-between rounded-md border px-4 py-2">
            <div className="flex items-center gap-2">
              <p>{PICKED_SERVER.name}</p>
              {PICKED_SERVER.countries.map((country) => (
                <div
                  key={country}
                  className="flex rounded-full border border-muted-foreground"
                >
                  <ReactCountryFlag
                    countryCode={country}
                    svg
                    className="size-4 rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    className={cx(PICKED_SERVER.official && "text-green-500")}
                  >
                    {PICKED_SERVER.official ? (
                      <CheckIcon className="h-4 w-4" />
                    ) : (
                      <GlobeIcon className="h-4 w-4" />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    {PICKED_SERVER.official
                      ? globalT("official")
                      : globalT("community")}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <Button variant="link" className="h-8">
            {globalT("change")}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/app/chat">{t("find")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { FindOratorCard };
