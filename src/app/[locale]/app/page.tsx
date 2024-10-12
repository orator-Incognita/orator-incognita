import { auth } from "@/src/auth";
import { CompassCard } from "@/src/components/dashboard/compass";
import { FindOratorCard } from "@/src/components/dashboard/find-orator";
import { PrivateSessionCard } from "@/src/components/dashboard/private-session";
import { ReportIssueCard } from "@/src/components/dashboard/report-issue";
import { StatsCard } from "@/src/components/dashboard/stats";
import { SupportUsCard } from "@/src/components/dashboard/support-us";
import { cn } from "@/src/lib/utils";
import { getTranslations } from "next-intl/server";
import { HTMLAttributes } from "react";

const StartSessionSection = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={cn("flex flex-col gap-6", className)}>
    <FindOratorCard />
    <PrivateSessionCard />
  </div>
);

const DashboardPage = async () => {
  const session = await auth();
  const t = await getTranslations("DashboardPage");

  if (!session) return null; // Layout will take care of redirecting

  return (
    <section className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        {t("title", { username: session.user?.name || session.user?.email })}
      </h1>
      <div className="grid grid-cols-1 items-start justify-center gap-6 rounded-lg lg:grid-cols-2 xl:grid-cols-3">
        <main className="grid grid-cols-1 gap-6 xl:col-span-2 xl:grid-cols-2">
          <StatsCard />
          <StartSessionSection className="flex lg:hidden" />
          <CompassCard />
          <CompassCard isEmpty />
        </main>
        <aside className="grid gap-6">
          <StartSessionSection className="hidden lg:flex" />
          <ReportIssueCard />
          <SupportUsCard />
        </aside>
        {/* <CompassCard isEmpty />
        <CompassCard isDisabled /> */}
      </div>
    </section>
  );
};

export default DashboardPage;
