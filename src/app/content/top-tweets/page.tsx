"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Repeat2, MessageCircle, Eye, TrendingUp, Clock } from "lucide-react"

export default function TopTweetsPage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Top Tweets</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Tweet</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">366</div>
            <p className="text-xs text-muted-foreground">total interactions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Top 10</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">198</div>
            <p className="text-xs text-muted-foreground">interactions each</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Day</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">March 15</div>
            <p className="text-xs text-muted-foreground">highest performance</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-xs text-muted-foreground">tweets in top 10%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Tweets</CardTitle>
          <CardDescription>
            Your highest engagement tweets ranked by total interactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { 
                id: 1,
                content: "Just launched a new feature! Excited to see what you think about this major update to our analytics dashboard. We've been working on this for months and can't wait for your feedback! 🚀",
                impressions: 8900,
                likes: 245,
                retweets: 89,
                replies: 32,
                engagement: 4.1,
                date: "March 15, 2024",
                time: "2:30 PM",
                hasImage: true
              },
              { 
                id: 2,
                content: "Great discussion on the future of social media analytics and how AI is changing the landscape. What are your thoughts on machine learning in data analysis?",
                impressions: 6700,
                likes: 187,
                retweets: 67,
                replies: 28,
                engagement: 4.2,
                date: "March 12, 2024",
                time: "11:15 AM",
                hasImage: false
              },
              { 
                id: 3,
                content: "Thanks to everyone who joined our live session yesterday! Amazing turnout and great questions from the community. Recording will be available soon.",
                impressions: 5400,
                likes: 156,
                retweets: 43,
                replies: 19,
                engagement: 4.0,
                date: "March 8, 2024",
                time: "9:45 AM",
                hasImage: false
              },
              { 
                id: 4,
                content: "New blog post is up! Check out our latest insights on engagement metrics and best practices for social media growth. Link in bio 📊",
                impressions: 4800,
                likes: 134,
                retweets: 38,
                replies: 15,
                engagement: 3.9,
                date: "March 5, 2024",
                time: "3:20 PM",
                hasImage: true
              },
              { 
                id: 5,
                content: "Behind the scenes look at our development process. Building in public has been an amazing journey and the feedback from our community has been invaluable.",
                impressions: 3900,
                likes: 98,
                retweets: 29,
                replies: 11,
                engagement: 3.5,
                date: "March 1, 2024",
                time: "4:10 PM",
                hasImage: true
              },
              { 
                id: 6,
                content: "Hot take: Engagement metrics alone don't tell the full story. Context and audience quality matter just as much as the numbers. What do you think?",
                impressions: 3600,
                likes: 89,
                retweets: 34,
                replies: 23,
                engagement: 4.1,
                date: "February 28, 2024",
                time: "1:50 PM",
                hasImage: false
              },
              { 
                id: 7,
                content: "Sharing some insights from our latest user research study. The data shows some interesting patterns in how people consume social media content.",
                impressions: 3400,
                likes: 76,
                retweets: 28,
                replies: 18,
                engagement: 3.6,
                date: "February 25, 2024",
                time: "10:30 AM",
                hasImage: true
              },
              { 
                id: 8,
                content: "Question for my followers: What's your biggest challenge with social media analytics? I'm working on some content to help address common pain points.",
                impressions: 3200,
                likes: 67,
                retweets: 22,
                replies: 31,
                engagement: 3.8,
                date: "February 22, 2024",
                time: "12:45 PM",
                hasImage: false
              },
            ].map((tweet, index) => (
              <div key={tweet.id} className="flex items-start space-x-4 p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm leading-relaxed">{tweet.content}</p>
                    {tweet.hasImage && (
                      <div className="w-full h-32 bg-muted rounded border flex items-center justify-center text-muted-foreground">
                        <span className="text-sm">Image attached</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>{tweet.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-red-500">
                      <Heart className="h-4 w-4" />
                      <span>{tweet.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-500">
                      <Repeat2 className="h-4 w-4" />
                      <span>{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>{tweet.replies}</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium">{tweet.engagement}%</span> engagement
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                    <span>{tweet.date} at {tweet.time}</span>
                    <div className="flex items-center space-x-4">
                      <span>Total: {tweet.likes + tweet.retweets + tweet.replies} interactions</span>
                      <Badge variant="outline" className="text-xs">
                        {tweet.engagement >= 4.0 ? "High" : tweet.engagement >= 3.5 ? "Medium" : "Good"} Performance
                      </Badge>
                    </div>
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
            <CardTitle>Performance Patterns</CardTitle>
            <CardDescription>
              What makes your top tweets successful
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Content Characteristics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>With Questions</span>
                    <span className="font-medium">+28% engagement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>With Images</span>
                    <span className="font-medium">+45% impressions</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personal Stories</span>
                    <span className="font-medium">+32% replies</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Industry Insights</span>
                    <span className="font-medium">+67% retweets</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimal Posting</CardTitle>
            <CardDescription>
              Best times and days for top performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Peak Performance Times</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>2:00 - 3:00 PM</span>
                    <span className="font-medium">4.8% avg engagement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>11:00 AM - 12:00 PM</span>
                    <span className="font-medium">4.2% avg engagement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>9:00 - 10:00 AM</span>
                    <span className="font-medium">3.9% avg engagement</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Best Days</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span className="font-medium">Highest reach</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span className="font-medium">Most engagement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span className="font-medium">Best for discussions</span>
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