
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Users, Activity, Crown, TrendingUp, FileText, Mail, Zap } from "lucide-react";

const Admin = () => {
  const [user] = useState({
    name: "Admin User",
    email: "admin@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  });

  const [metrics, setMetrics] = useState({
    totalUsers: 1247,
    activeUsers: 892,
    totalDrafts: 15630,
    totalEmails: 45290,
    revenue: 12450,
    conversionRate: 3.2,
  });

  const dailyUsage = [
    { date: "Mon", drafts: 120, emails: 340 },
    { date: "Tue", drafts: 145, emails: 380 },
    { date: "Wed", drafts: 180, emails: 420 },
    { date: "Thu", drafts: 165, emails: 390 },
    { date: "Fri", drafts: 220, emails: 510 },
    { date: "Sat", drafts: 190, emails: 380 },
    { date: "Sun", drafts: 140, emails: 320 },
  ];

  const subscriptionData = [
    { name: "Free", value: 780, color: "#8B5CF6" },
    { name: "Pro", value: 340, color: "#3B82F6" },
    { name: "Enterprise", value: 127, color: "#10B981" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 8500 },
    { month: "Feb", revenue: 9200 },
    { month: "Mar", revenue: 10100 },
    { month: "Apr", revenue: 11300 },
    { month: "May", revenue: 12450 },
  ];

  // Mock admin check
  const isAdmin = true; // This will be replaced with actual role check

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Crown className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have permission to view this page.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header user={user} />
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Page Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Crown className="h-8 w-8 text-yellow-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Admin Only
                  </Badge>
                </div>
                <p className="text-gray-600">Monitor platform usage, user activity, and revenue metrics</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Users</p>
                        <p className="text-2xl font-bold text-gray-900">{metrics.totalUsers.toLocaleString()}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">+12.5%</span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Users</p>
                        <p className="text-2xl font-bold text-gray-900">{metrics.activeUsers.toLocaleString()}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <Activity className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">+8.1%</span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Drafts</p>
                        <p className="text-2xl font-bold text-gray-900">{metrics.totalDrafts.toLocaleString()}</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <FileText className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">+23.4%</span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">${metrics.revenue.toLocaleString()}</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <Crown className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">+18.7%</span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Daily Usage Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Usage</CardTitle>
                    <CardDescription>AI drafts and email classifications over the last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={dailyUsage}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="drafts" fill="#3B82F6" name="Drafts" />
                        <Bar dataKey="emails" fill="#10B981" name="Emails" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Subscription Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Distribution</CardTitle>
                    <CardDescription>Current user distribution across plans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={subscriptionData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}`}
                        >
                          {subscriptionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Revenue Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly recurring revenue over the last 5 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                        dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Platform Activity</CardTitle>
                  <CardDescription>Latest user actions and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { user: "john@example.com", action: "Generated 3 AI drafts", time: "2 minutes ago", type: "draft" },
                      { user: "sarah@company.com", action: "Upgraded to Pro plan", time: "15 minutes ago", type: "upgrade" },
                      { user: "mike@startup.io", action: "Classified 25 emails", time: "1 hour ago", type: "email" },
                      { user: "admin@system", action: "System backup completed", time: "2 hours ago", type: "system" },
                      { user: "alex@agency.com", action: "Generated API documentation", time: "3 hours ago", type: "draft" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`p-2 rounded-full ${
                          activity.type === 'draft' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'email' ? 'bg-green-100 text-green-600' :
                          activity.type === 'upgrade' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {activity.type === 'draft' ? <FileText size={16} /> :
                           activity.type === 'email' ? <Mail size={16} /> :
                           activity.type === 'upgrade' ? <Crown size={16} /> :
                           <Zap size={16} />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.user}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                        </div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
