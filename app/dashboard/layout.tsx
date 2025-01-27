import Header from "@/components/common/header/Header";
import PageWrapper from "@/components/common/page-wrapper/PageWrapper";
import { SideBar } from "@/components/dashboard/sidebar/Sidebar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "LML Portal",
  description: "LML Portal dashboard",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` h-screen overflow-hidden`}>
      <ThemeProvider
        themes={["dark", "custom", "light"]}
        attribute="class"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex h-full">
          <SideBar />

          <div className="flex flex-col flex-grow ">
            <Header />
            <div className="flex-grow overflow-auto p-4">
              <PageWrapper>{children}</PageWrapper>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
