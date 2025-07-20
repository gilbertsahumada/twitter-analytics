"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AtSign, Heart, Reply, Repeat2 } from "lucide-react"
import { mockInteractions } from "@/lib/mockData"

export default function MentionsPage() {
  const mentions = mockInteractions.filter(i => i.type === "mention")

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mentions</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
            <AtSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mentions.length}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(mentions.reduce((acc, m) => acc + m.engagement, 0) / mentions.length)}
            </div>
            <p className="text-xs text-muted-foreground">interactions per mention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Reply className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">mentions replied to</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach</CardTitle>
            <Repeat2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4K</div>
            <p className="text-xs text-muted-foreground">people reached</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Mentions</CardTitle>
          <CardDescription>
            People mentioning you in their tweets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mentions.map((mention) => (
              <div key={mention.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={mention.user.avatar} alt={mention.user.name} />
                  <AvatarFallback>{mention.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{mention.user.name}</p>
                    <span className="text-xs text-muted-foreground">@{mention.user.username}</span>
                    <span className="text-xs text-muted-foreground" suppressHydrationWarning>
                      • {mention.timestamp.toLocaleString()}
                    </span>
                  </div>
                  {mention.content && (
                    <p className="text-sm">{mention.content}</p>
                  )}
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{mention.engagement} interactions</span>
                    <span>•</span>
                    <span>{mention.user.followers.toLocaleString()} followers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}