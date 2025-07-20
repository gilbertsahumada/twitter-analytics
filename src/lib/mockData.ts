export interface TwitterUser {
  id: string
  username: string
  name: string
  avatar: string
  followers: number
  following: number
  verified: boolean
}

export interface Interaction {
  id: string
  type: 'mention' | 'reply' | 'like' | 'retweet' | 'dm'
  user: TwitterUser
  content?: string
  timestamp: Date
  engagement: number
}

export interface SocialMetrics {
  totalInteractions: number
  topInteractors: TwitterUser[]
  whoInteractsWithYou: TwitterUser[]
  engagementRate: number
  reachGrowth: number
  impressions: number
}

export const mockUsers: TwitterUser[] = [
  {
    id: "1",
    username: "tech_sarah",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b97c?w=64&h=64&fit=crop&crop=face",
    followers: 15420,
    following: 892,
    verified: true
  },
  {
    id: "2", 
    username: "dev_marcus",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    followers: 8930,
    following: 234,
    verified: false
  },
  {
    id: "3",
    username: "design_emma",
    name: "Emma Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    followers: 22100,
    following: 1205,
    verified: true
  },
  {
    id: "4",
    username: "startup_alex",
    name: "Alex Kumar",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    followers: 5680,
    following: 890,
    verified: false
  },
  {
    id: "5",
    username: "ai_researcher",
    name: "Dr. Lisa Park",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    followers: 31250,
    following: 456,
    verified: true
  }
]

export const mockInteractions: Interaction[] = [
  {
    id: "1",
    type: "mention",
    user: mockUsers[0],
    content: "Great insights on the latest AI trends! 🤖",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    engagement: 24
  },
  {
    id: "2",
    type: "retweet",
    user: mockUsers[1],
    content: "This is exactly what we needed to hear!",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    engagement: 12
  },
  {
    id: "3",
    type: "reply",
    user: mockUsers[2],
    content: "Would love to collaborate on this project",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    engagement: 8
  },
  {
    id: "4",
    type: "like",
    user: mockUsers[3],
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    engagement: 3
  },
  {
    id: "5",
    type: "dm",
    user: mockUsers[4],
    content: "Sent you a message about the conference",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    engagement: 1
  }
]

export const mockMetrics: SocialMetrics = {
  totalInteractions: 1247,
  topInteractors: mockUsers.slice(0, 3),
  whoInteractsWithYou: mockUsers.slice(2, 5),
  engagementRate: 4.2,
  reachGrowth: 12.5,
  impressions: 89420
}

export const chartData = [
  { month: "January", interactions: 186, engagement: 80 },
  { month: "February", interactions: 305, engagement: 200 },
  { month: "March", interactions: 237, engagement: 120 },
  { month: "April", interactions: 73, engagement: 190 },
  { month: "May", interactions: 209, engagement: 130 },
  { month: "June", interactions: 214, engagement: 140 },
]

export const engagementTypes = [
  { type: "Likes", count: 523, percentage: 42 },
  { type: "Retweets", count: 312, percentage: 25 },
  { type: "Replies", count: 245, percentage: 20 },
  { type: "Mentions", count: 167, percentage: 13 },
]