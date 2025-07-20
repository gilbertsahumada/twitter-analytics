"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Repeat2, MessageCircle, TrendingUp, Users, Eye } from "lucide-react"
import { engagementTypes } from "@/lib/mockData"

export default function EngagementPage() {
  const totalEngagement = engagementTypes.reduce((acc, type) => acc + type.count, 0)
  const likesData = engagementTypes.find(e => e.type === "Likes")
  const retweetsData = engagementTypes.find(e => e.type === "Retweets")
  const repliesData = engagementTypes.find(e => e.type === "Replies")

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Engagement</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEngagement.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">+0.3% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156K</div>
            <p className="text-xs text-muted-foreground">unique accounts reached</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Performing</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Likes</div>
            <p className="text-xs text-muted-foreground">{likesData?.percentage}% of engagement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Breakdown</CardTitle>
            <CardDescription>
              Distribution of interaction types
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {engagementTypes.map((type, index) => {
              const Icon = type.type === 'Likes' ? Heart : 
                         type.type === 'Retweets' ? Repeat2 :
                         type.type === 'Replies' ? MessageCircle : Users
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{type.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">{type.count.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground ml-2">({type.percentage}%)</span>
                    </div>
                  </div>
                  <Progress value={type.percentage} className="h-2" />
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>
              Performance over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Likes Growth</span>
                <span className="text-sm font-medium text-green-600">+24%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Retweets Growth</span>
                <span className="text-sm font-medium text-green-600">+18%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Replies Growth</span>
                <span className="text-sm font-medium text-blue-600">+12%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Comments Growth</span>
                <span className="text-sm font-medium text-yellow-600">+8%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>
            Your tweets with the highest engagement this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { content: "Just launched a new feature! Excited to see what you think...", likes: 245, retweets: 89, replies: 32, date: "2 days ago" },
              { content: "Great discussion on the future of social media analytics...", likes: 187, retweets: 67, replies: 28, date: "5 days ago" },
              { content: "Thanks to everyone who joined our live session yesterday!", likes: 156, retweets: 43, replies: 19, date: "1 week ago" },
              { content: "New blog post is up! Check out our latest insights on...", likes: 134, retweets: 38, replies: 15, date: "1 week ago" },
            ].map((tweet, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="flex-1 space-y-2">
                  <p className="text-sm">{tweet.content}</p>
                  <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{tweet.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Repeat2 className="h-3 w-3" />
                      <span>{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{tweet.replies}</span>
                    </div>
                    <span>•</span>
                    <span>{tweet.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{tweet.likes + tweet.retweets + tweet.replies}</div>
                  <div className="text-xs text-muted-foreground">total engagement</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}