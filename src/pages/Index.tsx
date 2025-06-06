
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { UsageWidget } from "@/components/UsageWidget";
import { FileText, Mail, Zap, Crown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState({
    plan: "Free",
    draftsUsed: 2,
    draftsLimit: 5,
    emailsUsed: 8,
    emailsLimit: 20,
  });

  // Mock authentication check
  useEffect(() => {
    // This will be replaced with actual Supabase auth
    const mockUser = {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    };
    setUser(mockUser);
  }, []);

  const handleTriggerDraft = async () => {
    if (subscription.draftsUsed >= subscription.draftsLimit) {
      toast({
        title: "Limit Reached",
        description: "You've reached your draft generation limit. Upgrade to continue.",
        variant: "destructive",
      });
      return;
    }

    try {
      // This will call your n8n webhook
      toast({
        title: "Draft Generated",
        description: "Your AI draft has been created successfully!",
      });
      
      setSubscription(prev => ({
        ...prev,
        draftsUsed: prev.draftsUsed + 1
      }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate draft. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleClassifyEmail = async () => {
    if (subscription.emailsUsed >= subscription.emailsLimit) {
      toast({
        title: "Limit Reached",
        description: "You've reached your email classification limit. Upgrade to continue.",
        variant: "destructive",
      });
      return;
    }

    try {
      // This will call your n8n webhook
      toast({
        title: "Email Classified",
        description: "Email has been processed and classified successfully!",
      });
      
      setSubscription(prev => ({
        ...prev,
        emailsUsed: prev.emailsUsed + 1
      }));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to classify email. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Assistant SaaS
            </CardTitle>
            <CardDescription>Sign in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </CardContent>
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
              {/* Welcome Section */}
              <div className="text-center py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Welcome back, {user.name}! 👋
                </h1>
                <p className="text-xl text-gray-600">
                  Ready to supercharge your productivity with AI?
                </p>
              </div>

              {/* Usage Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <UsageWidget
                  title="Current Plan"
                  value={subscription.plan}
                  icon={Crown}
                  color="purple"
                />
                <UsageWidget
                  title="Drafts Used"
                  value={`${subscription.draftsUsed}/${subscription.draftsLimit}`}
                  progress={(subscription.draftsUsed / subscription.draftsLimit) * 100}
                  icon={FileText}
                  color="blue"
                />
                <UsageWidget
                  title="Emails Processed"
                  value={`${subscription.emailsUsed}/${subscription.emailsLimit}`}
                  progress={(subscription.emailsUsed / subscription.emailsLimit) * 100}
                  icon={Mail}
                  color="green"
                />
                <UsageWidget
                  title="API Calls"
                  value="142/1000"
                  progress={14.2}
                  icon={Zap}
                  color="orange"
                />
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FeatureCard
                  title="AI Draft Generator"
                  description="Generate professional drafts, emails, and documents with AI assistance"
                  icon={FileText}
                  color="blue"
                  onClick={handleTriggerDraft}
                  disabled={subscription.draftsUsed >= subscription.draftsLimit}
                  usageText={`${subscription.draftsUsed}/${subscription.draftsLimit} used`}
                />
                
                <FeatureCard
                  title="Email Classifier"
                  description="Automatically classify and organize your emails with intelligent categorization"
                  icon={Mail}
                  color="green"
                  onClick={handleClassifyEmail}
                  disabled={subscription.emailsUsed >= subscription.emailsLimit}
                  usageText={`${subscription.emailsUsed}/${subscription.emailsLimit} used`}
                />
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest AI-powered actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: "Generated marketing email draft", time: "2 minutes ago", type: "draft" },
                      { action: "Classified 15 support emails", time: "1 hour ago", type: "email" },
                      { action: "Generated blog post outline", time: "3 hours ago", type: "draft" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`p-2 rounded-full ${
                          activity.type === 'draft' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                        }`}>
                          {activity.type === 'draft' ? <FileText size={16} /> : <Mail size={16} />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
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

export default Index;
