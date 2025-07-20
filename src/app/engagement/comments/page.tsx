"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, TrendingUp, Users, Clock } from "lucide-react"
import { mockUsers, engagementTypes } from "@/lib/mockData"

export default function CommentsPage() {
  const commentsData = engagementTypes.find(e => e.type === "Comments")
  const topCommenters = mockUsers.slice(10, 20)

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Comments</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{commentsData?.count.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">comments replied to</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Length</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">characters per comment</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2h</div>
            <p className="text-xs text-muted-foreground">avg reply time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Commenters</CardTitle>
            <CardDescription>
              Users who comment on your content the most
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCommenters.map((user, index) => (
                <div key={user.id} className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      {user.verified && <Badge variant="secondary" className="text-xs">Verified</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-500">
                      <MessageCircle className="h-4 w-4 inline mr-1" />
                      {Math.floor(Math.random() * 15) + 3}
                    </div>
                    <div className="text-xs text-muted-foreground">comments</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Commented Tweets</CardTitle>
            <CardDescription>
              Your tweets that generate the most discussion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { content: "What do you think about the future of AI in social media analytics?", comments: 32, replies: 28, date: "2 days ago" },
                { content: "Sharing some insights from our latest user research study...", comments: 28, replies: 24, date: "5 days ago" },
                { content: "Hot take: Engagement metrics alone don't tell the full story...", comments: 19, replies: 16, date: "1 week ago" },
                { content: "Question for my followers: What's your biggest challenge with analytics?", comments: 15, replies: 13, date: "1 week ago" },
                { content: "Breaking down the difference between reach and impressions...", comments: 12, replies: 10, date: "2 weeks ago" },
              ].map((tweet, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm">{tweet.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 text-blue-500">
                        <MessageCircle className="h-3 w-3" />
                        <span className="font-medium">{tweet.comments}</span>
                      </div>
                      <span>• {tweet.replies} your replies</span>
                      <span>•</span>
                      <span>{tweet.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Comments</CardTitle>
          <CardDescription>
            Latest comments on your tweets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                user: { name: "Alex Chen", username: "alexchen", avatar: "/avatars/alex.jpg" },
                content: "Great insights! This really helped me understand the metrics better.",
                tweet: "Just launched a new feature! Excited to see what you think...",
                time: "2 hours ago",
                replied: true
              },
              { 
                user: { name: "Sarah Wilson", username: "swilson", avatar: "/avatars/sarah.jpg" },
                content: "Could you elaborate on the reach calculation? I'm still confused about that part.",
                tweet: "Breaking down the difference between reach and impressions...",
                time: "4 hours ago",
                replied: false
              },
              { 
                user: { name: "Mike Torres", username: "mtorres", avatar: "/avatars/mike.jpg" },
                content: "This is exactly what I needed! Thank you for sharing this.",
                tweet: "Sharing some insights from our latest user research study...",
                time: "1 day ago",
                replied: true
              },
              { 
                user: { name: "Emma Davis", username: "emmad", avatar: "/avatars/emma.jpg" },
                content: "Interesting perspective. I'd love to see more data on this topic.",
                tweet: "Hot take: Engagement metrics alone don't tell the full story...",
                time: "2 days ago",
                replied: false
              },
            ].map((comment, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                  <AvatarFallback>{comment.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{comment.user.name}</p>
                    <span className="text-xs text-muted-foreground">@{comment.user.username}</span>
                    <span className="text-xs text-muted-foreground">• {comment.time}</span>
                    {comment.replied && <Badge variant="outline" className="text-xs">Replied</Badge>}
                  </div>
                  <p className="text-sm">{comment.content}</p>
                  <p className="text-xs text-muted-foreground bg-muted p-2 rounded">
                    On: "{comment.tweet}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}