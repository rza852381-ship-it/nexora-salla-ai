import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpLeft, ArrowDownLeft } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "يناير", value: 4000 },
  { name: "فبراير", value: 3000 },
  { name: "مارس", value: 5000 },
  { name: "أبريل", value: 4500 },
  { name: "مايو", value: 6000 },
  { name: "يونيو", value: 5500 },
  { name: "يوليو", value: 7000 },
];

const stats = [
  { title: "إجمالي المبيعات", value: "125,430 ر.س", change: "+12.5%", up: true, icon: DollarSign },
  { title: "الزوار", value: "45,231", change: "+8.2%", up: true, icon: Users },
  { title: "معدل التحويل", value: "3.24%", change: "-0.4%", up: false, icon: TrendingUp },
  { title: "الطلبات", value: "1,842", change: "+15.3%", up: true, icon: BarChart3 },
];

const DashboardHome = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">مرحباً بك في NEXORA 👋</h1>
        <p className="text-muted-foreground mt-1">نظرة عامة على أداء متجرك</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={cn("flex items-center gap-1 text-sm font-medium", stat.up ? "text-success" : "text-destructive")}>
                {stat.up ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold mb-6">المبيعات خلال الأشهر</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(174, 72%, 50%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(174, 72%, 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 20%, 16%)" />
              <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
              <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 44%, 8%)",
                  border: "1px solid hsl(222, 20%, 16%)",
                  borderRadius: "8px",
                  color: "hsl(210, 40%, 96%)",
                }}
              />
              <Area type="monotone" dataKey="value" stroke="hsl(174, 72%, 50%)" fill="url(#colorValue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

import { cn } from "@/lib/utils";

export default DashboardHome;
