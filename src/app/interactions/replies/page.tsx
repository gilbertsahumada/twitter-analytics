"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Reply, MessageCircle, TrendingUp, Clock } from "lucide-react"
import { mockInteractions } from "@/lib/mockData"

export default function RepliesPage() {
  const replies = mockInteractions.filter(i => i.type === "reply")

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Replies</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Replies</CardTitle>
            <Reply className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{replies.length}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thread Depth</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2</div>
            <p className="text-xs text-muted-foreground">avg replies per thread</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24m</div>
            <p className="text-xs text-muted-foreground">avg response time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(replies.reduce((acc, r) => acc + r.engagement, 0) / replies.length)}
            </div>
            <p className="text-xs text-muted-foreground">avg per reply</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Replies</CardTitle>
          <CardDescription>
            Your replies to other users' tweets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {replies.map((reply) => (
              <div key={reply.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                  <AvatarFallback>{reply.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Replying to {reply.user.name}</p>
                    <span className="text-xs text-muted-foreground">@{reply.user.username}</span>
                    <span className="text-xs text-muted-foreground" suppressHydrationWarning>
                      • {reply.timestamp.toLocaleString()}
                    </span>
                  </div>
                  {reply.content && (
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground bg-muted p-2 rounded">
                        Original: "{reply.content.substring(0, 80)}..."
                      </p>
                      <p className="text-sm">Your reply content would go here...</p>
                    </div>
                  )}
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{reply.engagement} interactions</span>
                    <span>•</span>
                    <span>Thread depth: 2</span>
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