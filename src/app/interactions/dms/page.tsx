"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Users, MessageSquare, Clock } from "lucide-react"
import { mockInteractions } from "@/lib/mockData"

export default function DMsPage() {
  const dms = mockInteractions.filter(i => i.type === "dm")

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Direct Messages</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total DMs</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dms.length}</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">ongoing conversations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages/Day</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <p className="text-xs text-muted-foreground">avg daily messages</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1h</div>
            <p className="text-xs text-muted-foreground">avg response time</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Direct Messages</CardTitle>
          <CardDescription>
            Private conversations and message requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dms.map((dm) => (
              <div key={dm.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dm.user.avatar} alt={dm.user.name} />
                  <AvatarFallback>{dm.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{dm.user.name}</p>
                    <span className="text-xs text-muted-foreground">@{dm.user.username}</span>
                    <Badge variant="outline" className="text-xs">Private</Badge>
                    <span className="text-xs text-muted-foreground" suppressHydrationWarning>
                      • {dm.timestamp.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Direct message content preview...
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Conversation active</span>
                    <span>•</span>
                    <span>{dm.user.followers.toLocaleString()} followers</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge variant="secondary" className="text-xs">Unread</Badge>
                  <span className="text-xs text-muted-foreground">3 messages</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}