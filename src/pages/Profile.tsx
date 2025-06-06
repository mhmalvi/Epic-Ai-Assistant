
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Crown, CreditCard, Calendar, Mail, User as UserIcon } from "lucide-react";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    joinDate: "January 2024",
  });

  const [subscription] = useState({
    plan: "Free",
    status: "Active",
    nextBilling: "N/A",
    features: [
      "5 AI drafts per month",
      "20 email classifications per month",
      "Basic support",
      "1 user account"
    ]
  });

  const handleManageSubscription = async () => {
    try {
      // This will call the Stripe customer portal
      toast({
        title: "Opening Billing Portal",
        description: "Redirecting you to manage your subscription...",
      });
      
      // Mock redirect to Stripe customer portal
      window.open("https://billing.stripe.com/session/test", "_blank");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open billing portal. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleUpgrade = () => {
    // This will trigger the Stripe checkout
    toast({
      title: "Upgrade Coming Soon",
      description: "Subscription upgrade will be available soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header user={user} />
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
                <p className="text-gray-600">Manage your account and subscription preferences</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Information */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <UserIcon className="h-5 w-5" />
                        <span>Profile Information</span>
                      </CardTitle>
                      <CardDescription>
                        Your account details and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                          <p className="text-gray-600 flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {user.email}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Member since {user.joinDate}
                          </p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700">Full Name</label>
                          <p className="mt-1 text-gray-900">{user.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">Email Address</label>
                          <p className="mt-1 text-gray-900">{user.email}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Edit Profile
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Usage Statistics */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Usage This Month</CardTitle>
                      <CardDescription>
                        Track your AI assistant usage and limits
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">2/5</div>
                          <div className="text-sm text-gray-600">AI Drafts Generated</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">8/20</div>
                          <div className="text-sm text-gray-600">Emails Classified</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Subscription Card */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Crown className="h-5 w-5 text-yellow-600" />
                        <span>Subscription Plan</span>
                      </CardTitle>
                      <CardDescription>
                        Manage your subscription and billing
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Current Plan</span>
                        <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
                          {subscription.plan}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Status</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {subscription.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Next Billing</span>
                        <span className="text-gray-600">{subscription.nextBilling}</span>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Plan Features</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {subscription.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 pt-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={handleUpgrade}
                        >
                          Upgrade Plan
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={handleManageSubscription}
                        >
                          <CreditCard className="h-4 w-4 mr-2" />
                          Manage Billing
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
