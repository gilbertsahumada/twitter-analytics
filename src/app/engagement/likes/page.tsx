"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, TrendingUp, Users, Clock } from "lucide-react"
import { mockUsers, engagementTypes } from "@/lib/mockData"

export default function LikesPage() {
  const likesData = engagementTypes.find(e => e.type === "Likes")
  const topLikers = mockUsers.slice(0, 10)

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Likes</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{likesData?.count.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+24% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((likesData?.count || 0) / 30)}</div>
            <p className="text-xs text-muted-foreground">likes per day</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Likers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1K</div>
            <p className="text-xs text-muted-foreground">different accounts</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-4 PM</div>
            <p className="text-xs text-muted-foreground">most likes received</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Likers</CardTitle>
            <CardDescription>
              Users who like your content the most
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topLikers.map((user, index) => (
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
                    <div className="text-sm font-medium text-red-500">
                      <Heart className="h-4 w-4 inline mr-1" />
                      {Math.floor(Math.random() * 50) + 10}
                    </div>
                    <div className="text-xs text-muted-foreground">likes given</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Liked Tweets</CardTitle>
            <CardDescription>
              Your tweets with the highest like counts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { content: "Just launched a new feature! Excited to see what you think about this update...", likes: 245, date: "2 days ago" },
                { content: "Great discussion on the future of social media analytics and data visualization...", likes: 187, date: "5 days ago" },
                { content: "Thanks to everyone who joined our live session yesterday! Amazing turnout...", likes: 156, date: "1 week ago" },
                { content: "New blog post is up! Check out our latest insights on engagement metrics...", likes: 134, date: "1 week ago" },
                { content: "Behind the scenes look at our development process. Building in public is...", likes: 98, date: "2 weeks ago" },
              ].map((tweet, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm">{tweet.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 text-red-500">
                        <Heart className="h-3 w-3" />
                        <span className="font-medium">{tweet.likes}</span>
                      </div>
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
          <CardTitle>Likes Timeline</CardTitle>
          <CardDescription>
            When your content receives the most likes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-muted-foreground">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[32, 45, 67, 89, 78, 56, 34].map((likes, index) => (
                <div key={index} className="bg-muted p-3 rounded text-center">
                  <div className="text-sm font-medium">{likes}</div>
                  <div className="text-xs text-muted-foreground">likes</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-24 gap-1 mt-4">
              {Array.from({length: 24}, (_, i) => {
                const height = Math.random() * 100 + 20
                return (
                  <div key={i} className="bg-red-200 rounded-sm" style={{height: `${height}%`, minHeight: '20px'}} title={`${i}:00 - ${height.toFixed(0)} likes`}></div>
                )
              })}
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Hourly like distribution (0:00 - 23:00)
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}