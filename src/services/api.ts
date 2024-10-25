const API_BASE_URL = '/api';

export interface AnalyticsResponse {
  metrics: {
    totalRevenue: number;
    activeCampaigns: number;
    newClients: number;
    engagementRate: number;
  };
  trends: {
    revenue: { value: number; isPositive: boolean };
    campaigns: { value: number; isPositive: boolean };
    clients: { value: number; isPositive: boolean };
    engagement: { value: number; isPositive: boolean };
  };
}

export interface Campaign {
  id: number;
  name: string;
  platform: string;
  status: string;
  reach: string;
  engagement: string;
  conversions: number;
  spend: string;
  roi: string;
}

export interface SocialInsights {
  followers: number;
  engagement: number;
  posts: number;
  demographics: {
    age: Array<{ range: string; percentage: number }>;
    gender: Array<{ type: string; percentage: number }>;
  };
}

export const api = {
  async getAnalytics(): Promise<AnalyticsResponse> {
    const response = await fetch(`${API_BASE_URL}/analytics`);
    if (!response.ok) {
      throw new Error('Failed to fetch analytics data');
    }
    return response.json();
  },

  async getCampaigns(): Promise<Campaign[]> {
    const response = await fetch(`${API_BASE_URL}/campaigns`);
    if (!response.ok) {
      throw new Error('Failed to fetch campaigns');
    }
    return response.json();
  },

  async getSocialInsights(): Promise<SocialInsights> {
    const response = await fetch(`${API_BASE_URL}/social/insights`);
    if (!response.ok) {
      throw new Error('Failed to fetch social insights');
    }
    return response.json();
  }
};