"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, TrendingUp, UserPlus, UserMinus, MapPin, Calendar } from "lucide-react"
import { mockUsers } from "@/lib/mockData"

export default function FollowerGrowthPage() {
  const recentFollowers = mockUsers.slice(0, 8)

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Follower Growth</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">+2.3% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Followers</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">289</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unfollows</CardTitle>
            <UserMinus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1.7%</div>
            <p className="text-xs text-muted-foreground">monthly growth</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Followers</CardTitle>
            <CardDescription>
              New people who started following you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFollowers.map((user, index) => (
                <div key={user.id} className="flex items-center space-x-4">
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
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follower Demographics</CardTitle>
            <CardDescription>
              Insights about your follower base
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Geographic Distribution</span>
              </div>
              <div className="space-y-2">
                {[
                  { country: "United States", percentage: 45 },
                  { country: "United Kingdom", percentage: 18 },
                  { country: "Canada", percentage: 12 },
                  { country: "Australia", percentage: 8 },
                  { country: "Other", percentage: 17 }
                ].map((geo, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{geo.country}</span>
                      <span>{geo.percentage}%</span>
                    </div>
                    <Progress value={geo.percentage} className="h-1" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Account Types</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-muted rounded">
                  <div className="text-lg font-bold">68%</div>
                  <div className="text-muted-foreground">Personal</div>
                </div>
                <div className="text-center p-3 bg-muted rounded">
                  <div className="text-lg font-bold">32%</div>
                  <div className="text-muted-foreground">Business</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Growth Timeline</CardTitle>
          <CardDescription>
            Your follower growth over the last 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-green-600">+289</div>
                <div className="text-sm text-muted-foreground">New Followers</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-red-600">-67</div>
                <div className="text-sm text-muted-foreground">Unfollows</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-blue-600">+222</div>
                <div className="text-sm text-muted-foreground">Net Growth</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold">77%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Weekly Breakdown</h4>
              <div className="space-y-3">
                {[
                  { week: "Week 4", gained: 89, lost: 12, net: 77 },
                  { week: "Week 3", gained: 76, lost: 18, net: 58 },
                  { week: "Week 2", gained: 67, lost: 23, net: 44 },
                  { week: "Week 1", gained: 57, lost: 14, net: 43 },
                ].map((week, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium">{week.week}</span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-600">
                        <UserPlus className="h-3 w-3" />
                        <span>+{week.gained}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-red-600">
                        <UserMinus className="h-3 w-3" />
                        <span>-{week.lost}</span>
                      </div>
                      <div className="flex items-center space-x-1 font-medium">
                        <span>Net: +{week.net}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Follower Quality Insights</CardTitle>
          <CardDescription>
            Analysis of your follower engagement and activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Engagement Level</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>High Engagement</span>
                  <span className="font-medium">28%</span>
                </div>
                <Progress value={28} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Medium Engagement</span>
                  <span className="font-medium">45%</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Low Engagement</span>
                  <span className="font-medium">27%</span>
                </div>
                <Progress value={27} className="h-2" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Account Activity</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Very Active</span>
                  <span className="font-medium">35%</span>
                </div>
                <Progress value={35} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Moderately Active</span>
                  <span className="font-medium">42%</span>
                </div>
                <Progress value={42} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Inactive</span>
                  <span className="font-medium">23%</span>
                </div>
                <Progress value={23} className="h-2" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Follower Size</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>1K+ Followers</span>
                  <span className="font-medium">15%</span>
                </div>
                <Progress value={15} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>100-1K</span>
                  <span className="font-medium">38%</span>
                </div>
                <Progress value={38} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Less than 100</span>
                  <span className="font-medium">47%</span>
                </div>
                <Progress value={47} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}