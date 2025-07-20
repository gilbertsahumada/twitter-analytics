"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  Heart, 
  TrendingUp, 
  Eye,
  Repeat2
} from "lucide-react"
import { mockMetrics, mockInteractions, mockUsers, engagementTypes } from "@/lib/mockData"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Interactions
            </CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.totalInteractions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Engagement Rate
            </CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.engagementRate}%</div>
            <p className="text-xs text-muted-foreground">
              +0.8% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reach Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{mockMetrics.reachGrowth}%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Impressions
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.impressions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Top Interactors</CardTitle>
            <CardDescription>
              People who interact with you the most
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockMetrics.topInteractors.map((user, index) => (
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
                  <div className="text-sm font-medium">{user.followers.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">followers</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-3">
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
                    <span className="text-sm text-muted-foreground">{type.count}</span>
                  </div>
                  <Progress value={type.percentage} className="h-2" />
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Interactions</CardTitle>
          <CardDescription>
            Latest activity on your Twitter account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockInteractions.map((interaction) => (
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