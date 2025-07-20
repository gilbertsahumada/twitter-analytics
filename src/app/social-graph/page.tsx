"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  UserPlus, 
  UserMinus,
  ArrowUpRight,
  ArrowDownRight,
  Network
} from "lucide-react"
import { mockUsers, mockMetrics } from "@/lib/mockData"

const networkData = [
  {
    category: "Tech Community",
    users: mockUsers.slice(0, 3),
    strength: 92
  },
  {
    category: "Design Circle", 
    users: mockUsers.slice(1, 4),
    strength: 78
  },
  {
    category: "Startup Ecosystem",
    users: mockUsers.slice(2, 5), 
    strength: 85
  }
]

const mutualConnections = [
  { user1: mockUsers[0], user2: mockUsers[1], mutuals: 24 },
  { user1: mockUsers[1], user2: mockUsers[2], mutuals: 18 },
  { user1: mockUsers[2], user2: mockUsers[3], mutuals: 31 },
]

export default function SocialGraph() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Social Graph</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Network Analysis</Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Network Size
            </CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              +127 this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Close Connections
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              High interaction users
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Followers
            </CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+89</div>
            <p className="text-xs text-muted-foreground">
              Last 7 days
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unfollowers
            </CardTitle>
            <UserMinus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-12</div>
            <p className="text-xs text-muted-foreground">
              Last 7 days
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Who Interacts With You Most</CardTitle>
            <CardDescription>
              People who engage frequently with your content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockMetrics.whoInteractsWithYou.map((user, index) => (
              <div key={user.id} className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-sm font-medium text-green-700 dark:text-green-300">
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
                <div className="flex items-center space-x-1 text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {Math.floor(Math.random() * 50) + 20} interactions
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>You Interact With Most</CardTitle>
            <CardDescription>
              People you engage with frequently
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockMetrics.topInteractors.map((user, index) => (
              <div key={user.id} className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-medium text-blue-700 dark:text-blue-300">
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
                <div className="flex items-center space-x-1 text-blue-600">
                  <ArrowDownRight className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {Math.floor(Math.random() * 40) + 15} interactions
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Network Communities</CardTitle>
            <CardDescription>
              Clusters of interconnected users in your network
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {networkData.map((network, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{network.category}</h4>
                  <Badge variant="outline">{network.strength}% strength</Badge>
                </div>
                <div className="flex -space-x-2">
                  {network.users.map((user) => (
                    <Avatar key={user.id} className="h-8 w-8 border-2 border-background">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs text-muted-foreground">
                    +{Math.floor(Math.random() * 20) + 5}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mutual Connections</CardTitle>
            <CardDescription>
              Shared connections between your contacts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mutualConnections.map((connection, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={connection.user1.avatar} alt={connection.user1.name} />
                    <AvatarFallback className="text-xs">
                      {connection.user1.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={connection.user2.avatar} alt={connection.user2.name} />
                    <AvatarFallback className="text-xs">
                      {connection.user2.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{connection.user1.name}</span> and{' '}
                    <span className="font-medium">{connection.user2.name}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {connection.mutuals} mutual connections
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}