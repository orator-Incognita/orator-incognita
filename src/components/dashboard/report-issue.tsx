import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "@/src/i18n/routing";
import {
  GITHUB_ISSUES_URL,
  GITHUB_PULL_REQUEST_URL,
  GITHUB_REPO_URL,
} from "@/config";

const ReportIssueCard = () => {
  const t = useTranslations("DashboardPage.ReportIssueCard");

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription>
          {t.rich("description", {
            github: (text) => (
              <Button variant="link" className="h-auto p-0" asChild>
                <Link
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  {text}
                </Link>
              </Button>
            ),
            "pull-request": (text) => (
              <Button variant="link" className="h-auto p-0" asChild>
                <Link
                  href={GITHUB_PULL_REQUEST_URL}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  {text}
                </Link>
              </Button>
            ),
          })}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={GITHUB_ISSUES_URL}>{t("report")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ReportIssueCard };
