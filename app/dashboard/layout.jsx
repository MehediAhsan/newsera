import DashboardSideNav from "@/components/DashboardSiveNav";
import ProtectedRoute from "@/components/ProtectedRoute";

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex p-4 gap-4 bg-black">
        <DashboardSideNav />
        <div className="flex-1 bg-gray-950 p-5 rounded min-h-screen">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default DashboardLayout;