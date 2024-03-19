import DashboardSideNav from "@/components/DashboardSiveNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <DashboardSideNav />
      <div className="flex-1 bg-[#181616] p-5 mx-4 rounded min-h-screen">
        {children}
      </div>
    </div>
  );
}
