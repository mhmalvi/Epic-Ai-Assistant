
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
}

interface UserSubscription {
  plan: 'free' | 'pro' | 'enterprise';
  status: string;
}

interface UserUsage {
  drafts: number;
  emails: number;
  content_analysis: number;
  data_processing: number;
}

interface UserLimits {
  drafts: number;
  emails: number;
  content_analysis: number;
  data_processing: number;
}

export const useUserData = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [usage, setUsage] = useState<UserUsage | null>(null);
  const [limits, setLimits] = useState<UserLimits | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setSubscription(null);
      setUsage(null);
      setLimits(null);
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileData) {
          setProfile(profileData);
        }

        // Fetch subscription
        const { data: subscriptionData } = await supabase
          .from('user_subscriptions')
          .select('plan, status')
          .eq('user_id', user.id)
          .single();

        if (subscriptionData) {
          setSubscription(subscriptionData);

          // Get limits based on plan
          const { data: limitsData } = await supabase
            .rpc('get_user_limits', { user_plan: subscriptionData.plan });

          if (limitsData) {
            setLimits(limitsData);
          }
        }

        // Fetch current month usage
        const { data: usageData } = await supabase
          .from('user_usage')
          .select('feature_type, usage_count')
          .eq('user_id', user.id)
          .gte('reset_date', new Date().toISOString().slice(0, 7) + '-01');

        if (usageData) {
          const usageMap = usageData.reduce((acc, item) => {
            acc[item.feature_type] = item.usage_count;
            return acc;
          }, {} as Record<string, number>);

          setUsage({
            drafts: usageMap.drafts || 0,
            emails: usageMap.emails || 0,
            content_analysis: usageMap.content_analysis || 0,
            data_processing: usageMap.data_processing || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const incrementUsage = async (featureType: string) => {
    if (!user) return;

    try {
      const { error } = await supabase.rpc('increment_usage', {
        p_user_id: user.id,
        p_feature_type: featureType
      });

      if (!error && usage) {
        setUsage({
          ...usage,
          [featureType]: (usage[featureType as keyof UserUsage] || 0) + 1
        });
      }
    } catch (error) {
      console.error('Error incrementing usage:', error);
    }
  };

  const logActivity = async (activityType: string, description: string, metadata?: any) => {
    if (!user) return;

    try {
      await supabase
        .from('user_activities')
        .insert({
          user_id: user.id,
          activity_type: activityType,
          description,
          metadata
        });
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  };

  return {
    profile,
    subscription,
    usage,
    limits,
    loading,
    incrementUsage,
    logActivity
  };
};
