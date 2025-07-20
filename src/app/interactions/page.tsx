"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, AtSign, Reply, Mail } from "lucide-react"
import { mockInteractions } from "@/lib/mockData"

export default function InteractionsPage() {
  const mentionsCount = mockInteractions.filter(i => i.type === "mention").length
  const repliesCount = mockInteractions.filter(i => i.type === "reply").length
  const dmsCount = mockInteractions.filter(i => i.type === "dm").length

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Interactions</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentions</CardTitle>
            <AtSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mentionsCount}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Replies</CardTitle>
            <Reply className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{repliesCount}</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Direct Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dmsCount}</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Interactions</CardTitle>
          <CardDescription>
            Latest mentions, replies, and direct messages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockInteractions.slice(0, 10).map((interaction) => (
              <div key={interaction.id} className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={interaction.user.avatar} alt={interaction.user.name} />
                  <AvatarFallback>{interaction.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{interaction.user.name}</p>
                    <Badge variant="outline" className="text-xs">
                      {interaction.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground" suppressHydrationWarning>
                      {interaction.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  {interaction.content && (
                    <p className="text-sm text-muted-foreground">{interaction.content}</p>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  {interaction.engagement} interactions
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}