import DashboardSideNav from "@/components/DashboardSiveNav";

export default function DashboardLayout({ children }) {
  return (
    <>
    <DashboardSideNav/>
    {children}
    </>
  );
}
