import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, Newspaper, ScanBarcode, User, CalculatorIcon, ForwardIcon, BarChart } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
        <DashboardCard 
          title="Total Items" 
          count={10000} 
          icon={<Folder className="text-slate-500" size={32} />}
        />
        <DashboardCard 
          title="Today's Sales" 
          count={2434} 
          icon={<Newspaper className="text-slate-500" size={32} />}
        />
        <DashboardCard 
          title="Scans Today" 
          count={2434} 
          icon={<ScanBarcode className="text-slate-500" size={32} />}
        />
        <DashboardCard 
          title="Users Today" 
          count={2434} 
          icon={<User className="text-slate-500" size={32} />}
        />
        <DashboardCard 
          title="View Inventory" 
          count={876} 
          icon={<CalculatorIcon className="text-slate-500" size={32} />}
        />
        <DashboardCard 
          title="Process Payment" 
          count={2434} 
          icon={<ForwardIcon className="text-slate-500" size={32} />}
        />
        <DashboardCard 
          title="Sales Analytics" 
          count={2434} 
          icon={<BarChart className="text-slate-500" size={32} />}
        />
      </div>
      
      <div className="mb-8">
        <AnalyticsChart />
      </div>
      
      {/* Posts Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <PostsTable title="Latest Posts" limit={5} />
      </div>
    </div>
  );
}
