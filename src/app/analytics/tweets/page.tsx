"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Eye, MessageCircle, Heart, Repeat2 } from "lucide-react"

export default function TweetPerformancePage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tweet Performance</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tweets</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Impressions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4K</div>
            <p className="text-xs text-muted-foreground">per tweet</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Tweet</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.9K</div>
            <p className="text-xs text-muted-foreground">impressions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs text-muted-foreground">avg across all tweets</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Tweets</CardTitle>
          <CardDescription>
            Your best performing tweets by engagement and reach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                content: "Just launched a new feature! Excited to see what you think about this major update to our analytics dashboard...",
                impressions: 8900,
                likes: 245,
                retweets: 89,
                replies: 32,
                engagement: 4.1,
                date: "2 days ago"
              },
              { 
                content: "Great discussion on the future of social media analytics and how AI is changing the landscape...",
                impressions: 6700,
                likes: 187,
                retweets: 67,
                replies: 28,
                engagement: 4.2,
                date: "5 days ago"
              },
              { 
                content: "Thanks to everyone who joined our live session yesterday! Amazing turnout and great questions...",
                impressions: 5400,
                likes: 156,
                retweets: 43,
                replies: 19,
                engagement: 4.0,
                date: "1 week ago"
              },
              { 
                content: "New blog post is up! Check out our latest insights on engagement metrics and best practices...",
                impressions: 4800,
                likes: 134,
                retweets: 38,
                replies: 15,
                engagement: 3.9,
                date: "1 week ago"
              },
              { 
                content: "Behind the scenes look at our development process. Building in public has been an amazing journey...",
                impressions: 3900,
                likes: 98,
                retweets: 29,
                replies: 11,
                engagement: 3.5,
                date: "2 weeks ago"
              },
            ].map((tweet, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-sm">{tweet.content}</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3 text-muted-foreground" />
                      <span>{tweet.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-red-500">
                      <Heart className="h-3 w-3" />
                      <span>{tweet.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-500">
                      <Repeat2 className="h-3 w-3" />
                      <span>{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-500">
                      <MessageCircle className="h-3 w-3" />
                      <span>{tweet.replies}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {tweet.engagement}% engagement
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tweet.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Content Performance by Type</CardTitle>
            <CardDescription>
              How different content types perform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Text Only", tweets: 45, avgEngagement: 3.2, avgImpressions: 1800 },
                { type: "With Images", tweets: 38, avgEngagement: 4.8, avgImpressions: 2900 },
                { type: "With Links", tweets: 28, avgEngagement: 3.9, avgImpressions: 2200 },
                { type: "With Videos", tweets: 16, avgEngagement: 5.4, avgImpressions: 3400 },
              ].map((type, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="text-sm font-medium">{type.type}</p>
                    <p className="text-xs text-muted-foreground">{type.tweets} tweets</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{type.avgEngagement}%</p>
                    <p className="text-xs text-muted-foreground">{type.avgImpressions.toLocaleString()} avg</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Posting Patterns</CardTitle>
            <CardDescription>
              When your tweets perform best
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Best Days</h4>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                    const engagement = [3.2, 4.1, 4.8, 4.2, 3.9, 2.8, 2.1][index]
                    return (
                      <div key={day} className="p-2 bg-muted rounded">
                        <div className="font-medium">{day}</div>
                        <div className="text-muted-foreground">{engagement}%</div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Best Times</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>9:00 AM</span>
                    <span className="font-medium">5.2% avg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>2:00 PM</span>
                    <span className="font-medium">4.8% avg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>7:00 PM</span>
                    <span className="font-medium">4.1% avg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>11:00 AM</span>
                    <span className="font-medium">3.9% avg</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}