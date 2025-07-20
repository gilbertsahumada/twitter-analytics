"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { chartData, engagementTypes } from "@/lib/mockData"

const chartConfig = {
  interactions: {
    label: "Interactions",
    color: "hsl(var(--chart-1))",
  },
  engagement: {
    label: "Engagement",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const weeklyData = [
  { day: "Mon", tweets: 12, likes: 156, retweets: 23 },
  { day: "Tue", tweets: 8, likes: 98, retweets: 15 },
  { day: "Wed", tweets: 15, likes: 234, retweets: 45 },
  { day: "Thu", tweets: 6, likes: 87, retweets: 12 },
  { day: "Fri", tweets: 18, likes: 312, retweets: 67 },
  { day: "Sat", tweets: 4, likes: 45, retweets: 8 },
  { day: "Sun", tweets: 9, likes: 123, retweets: 28 },
]

export default function Analytics() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Performance Metrics</Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Interaction Trends</CardTitle>
            <CardDescription>
              Monthly interactions and engagement over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <defs>
                  <linearGradient id="fillInteractions" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-interactions)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-interactions)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-engagement)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-engagement)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="engagement"
                  type="natural"
                  fill="url(#fillEngagement)"
                  fillOpacity={0.4}
                  stroke="var(--color-engagement)"
                  stackId="a"
                />
                <Area
                  dataKey="interactions"
                  type="natural"
                  fill="url(#fillInteractions)"
                  fillOpacity={0.4}
                  stroke="var(--color-interactions)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>
              Daily breakdown of posts and engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={weeklyData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="tweets" fill="var(--color-interactions)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Most active on Fridays <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Average 10.3 tweets per day this week
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>
              Tweets with highest engagement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { content: "Just shipped a new feature! The team worked incredibly hard on this one. 🚀", likes: 234, retweets: 45, replies: 12 },
              { content: "Thoughts on the latest AI developments? The pace of innovation is incredible.", likes: 189, retweets: 67, replies: 23 },
              { content: "Working remotely has taught me so much about async communication and team dynamics.", likes: 156, retweets: 34, replies: 18 }
            ].map((tweet, index) => (
              <div key={index} className="space-y-2 p-3 rounded-lg bg-muted/30">
                <p className="text-sm">{tweet.content}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>❤️ {tweet.likes}</span>
                  <span>🔄 {tweet.retweets}</span>
                  <span>💬 {tweet.replies}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
            <CardDescription>
              Distribution of interaction types
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {engagementTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{type.type}</p>
                  <p className="text-sm text-muted-foreground">{type.count} total</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{type.percentage}%</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Metrics</CardTitle>
            <CardDescription>
              Key performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Follower Growth</p>
                <p className="text-sm text-muted-foreground">This month</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">+12.5%</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Reach Increase</p>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">+8.3%</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Engagement Rate</p>
                <p className="text-sm text-muted-foreground">Average</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">4.2%</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Profile Views</p>
                <p className="text-sm text-muted-foreground">This week</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">1,247</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}