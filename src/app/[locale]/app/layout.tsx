import { Header } from "@/src/components/layout/header/header";
import { NextLayoutProps } from "@/src/types/next";
import { auth } from "@/src/auth";
import { redirect } from "@/src/i18n/routing";

const AppLayout = async ({ children }: NextLayoutProps) => {
  const session = await auth();

  if (!session) return redirect(`/sign-in`);

  return (
    <div className="flex h-screen flex-col items-center">
      <Header session={session} />
      <main className="h-[calc(100vh-4rem)] w-full overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
