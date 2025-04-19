import DashboardSideNav from "@/components/DashboardSiveNav";
import ProtectedRoute from "@/components/ProtectedRoute";

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="bg-gray-950 min-h-screen">
        <DashboardSideNav />
        <div className="bg-black p-5 rounded min-h-screen overflow-y-auto lg:ml-[300px]">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default DashboardLayout;