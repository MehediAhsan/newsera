import DashboardSideNav from '@/components/DashboardSiveNav';
import ProtectedRoute from '@/components/ProtectedRoute';

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <DashboardSideNav />
        <div className="min-h-screen overflow-y-auto bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] p-4 sm:p-6 lg:ml-[288px] lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;