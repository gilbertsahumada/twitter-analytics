"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Eye, Users, TrendingUp, Target, BarChart3, Clock } from "lucide-react"
import { mockMetrics } from "@/lib/mockData"

export default function ReachImpressionsPage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Reach & Impressions</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMetrics.impressions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Reach</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47.2K</div>
            <p className="text-xs text-muted-foreground">unique accounts</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{mockMetrics.reachGrowth}%</div>
            <p className="text-xs text-muted-foreground">from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impression Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.7</div>
            <p className="text-xs text-muted-foreground">per unique user</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reach Sources</CardTitle>
            <CardDescription>
              How people discover your content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { source: "Home Timeline", percentage: 42, reach: "19.8K" },
              { source: "Profile Visits", percentage: 23, reach: "10.9K" },
              { source: "Retweets", percentage: 18, reach: "8.5K" },
              { source: "Search", percentage: 12, reach: "5.7K" },
              { source: "External Links", percentage: 5, reach: "2.3K" },
            ].map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{source.source}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{source.reach}</span>
                    <span className="text-xs text-muted-foreground ml-2">({source.percentage}%)</span>
                  </div>
                </div>
                <Progress value={source.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Audience Overlap</CardTitle>
            <CardDescription>
              Repeat vs new audience engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded">
                  <div className="text-2xl font-bold text-blue-600">68%</div>
                  <div className="text-sm text-muted-foreground">Returning Audience</div>
                  <div className="text-xs text-muted-foreground mt-1">32.1K users</div>
                </div>
                <div className="text-center p-4 bg-muted rounded">
                  <div className="text-2xl font-bold text-green-600">32%</div>
                  <div className="text-sm text-muted-foreground">New Audience</div>
                  <div className="text-xs text-muted-foreground mt-1">15.1K users</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Engagement by Audience Type</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Returning Users</span>
                    <span className="font-medium">5.2% engagement</span>
                  </div>
                  <Progress value={68} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>New Users</span>
                    <span className="font-medium">3.8% engagement</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reach Timeline</CardTitle>
          <CardDescription>
            Daily reach and impressions over the last 30 days
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">6.8K</div>
                <div className="text-sm text-muted-foreground">Avg Daily Reach</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">18.2K</div>
                <div className="text-sm text-muted-foreground">Avg Daily Impressions</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">2.7</div>
                <div className="text-sm text-muted-foreground">Frequency</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">94%</div>
                <div className="text-sm text-muted-foreground">Organic Reach</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Peak Performance Days</h4>
              <div className="space-y-3">
                {[
                  { date: "March 15", reach: "12.4K", impressions: "34.7K", engagement: "5.8%" },
                  { date: "March 12", reach: "9.8K", impressions: "28.3K", engagement: "4.9%" },
                  { date: "March 8", reach: "8.9K", impressions: "25.1K", engagement: "4.2%" },
                  { date: "March 5", reach: "7.6K", impressions: "22.8K", engagement: "3.8%" },
                ].map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{day.date}</span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-center">
                        <div className="font-medium">{day.reach}</div>
                        <div className="text-xs text-muted-foreground">reach</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{day.impressions}</div>
                        <div className="text-xs text-muted-foreground">impressions</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{day.engagement}</div>
                        <div className="text-xs text-muted-foreground">engagement</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Time-based Reach</CardTitle>
            <CardDescription>
              When your content reaches the most people
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Best Days for Reach</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tuesday</span>
                    <span className="font-medium">8.9K avg</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Wednesday</span>
                    <span className="font-medium">8.2K avg</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Thursday</span>
                    <span className="font-medium">7.6K avg</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Monday</span>
                    <span className="font-medium">6.8K avg</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Reach</CardTitle>
            <CardDescription>
              Where your content is being seen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { country: "United States", reach: "21.2K", percentage: 45 },
                { country: "United Kingdom", reach: "8.5K", percentage: 18 },
                { country: "Canada", reach: "5.7K", percentage: 12 },
                { country: "Australia", reach: "3.8K", percentage: 8 },
                { country: "Germany", reach: "2.8K", percentage: 6 },
                { country: "Other", reach: "5.2K", percentage: 11 },
              ].map((geo, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{geo.country}</span>
                    <span className="font-medium">{geo.reach} ({geo.percentage}%)</span>
                  </div>
                  <Progress value={geo.percentage} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}