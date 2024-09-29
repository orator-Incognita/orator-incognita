import { Header } from "@/components/layout/header";
import { NextLayout } from "@/types/next-layout";
import { Footer } from "@/components/layout/footer";

const AppLayout = ({ children }: NextLayout) => {
  return (
    <div className="flex h-screen justify-between items-center flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
