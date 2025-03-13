import DashboardSideNav from "@/components/DashboardSiveNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex m-4 gap-4">
      <DashboardSideNav />
      <div className="flex-1 bg-gray-950 p-5 rounded min-h-screen">
        {children}
      </div>
    </div>
  );
}
