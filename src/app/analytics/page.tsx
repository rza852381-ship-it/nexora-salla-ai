import { motion } from "framer-motion";
import { BarChart3, Eye, ShoppingCart, Users, ArrowUpLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "أحد", views: 4000, orders: 240 },
  { name: "إثنين", views: 3000, orders: 198 },
  { name: "ثلاثاء", views: 5000, orders: 300 },
  { name: "أربعاء", views: 2780, orders: 190 },
  { name: "خميس", views: 6890, orders: 480 },
  { name: "جمعة", views: 2390, orders: 180 },
  { name: "سبت", views: 3490, orders: 250 },
];

const pieData = [
  { name: "مباشر", value: 400 },
  { name: "بحث", value: 300 },
  { name: "سوشيال", value: 200 },
  { name: "إعلانات", value: 100 },
];

const COLORS = ["hsl(174, 72%, 50%)", "hsl(262, 70%, 55%)", "hsl(38, 92%, 55%)", "hsl(210, 80%, 55%)"];

const Analytics = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">تحليلات المتجر</h1>
        <p className="text-muted-foreground mt-1">تحليل شامل لأداء متجرك</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "مشاهدات الصفحة", value: "32,847", icon: Eye, change: "+18%" },
          { label: "الطلبات", value: "1,284", icon: ShoppingCart, change: "+9%" },
          { label: "عملاء جدد", value: "847", icon: Users, change: "+23%" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-success flex items-center gap-1"><ArrowUpLeft className="w-3 h-3" />{stat.change}</span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 glass rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">المشاهدات والطلبات</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 20%, 16%)" />
                <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(222, 44%, 8%)", border: "1px solid hsl(222, 20%, 16%)", borderRadius: "8px", color: "hsl(210, 40%, 96%)" }} />
                <Bar dataKey="views" fill="hsl(174, 72%, 50%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="orders" fill="hsl(262, 70%, 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">مصادر الزيارات</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value" stroke="none">
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "hsl(222, 44%, 8%)", border: "1px solid hsl(222, 20%, 16%)", borderRadius: "8px", color: "hsl(210, 40%, 96%)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pieData.map((item, i) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
