"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Repeat2, TrendingUp, Users, MessageCircle } from "lucide-react"
import { mockUsers, engagementTypes } from "@/lib/mockData"

export default function RetweetsPage() {
  const retweetsData = engagementTypes.find(e => e.type === "Retweets")
  const topRetweeters = mockUsers.slice(5, 15)

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Retweets</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Retweets</CardTitle>
            <Repeat2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{retweetsData?.count.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amplification Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.3%</div>
            <p className="text-xs text-muted-foreground">tweets retweeted</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach Multiplier</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2x</div>
            <p className="text-xs text-muted-foreground">avg reach expansion</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quote Tweets</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">with comments</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Retweeters</CardTitle>
            <CardDescription>
              Users who amplify your content the most
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topRetweeters.map((user, index) => (
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
                    <div className="text-sm font-medium text-green-500">
                      <Repeat2 className="h-4 w-4 inline mr-1" />
                      {Math.floor(Math.random() * 20) + 5}
                    </div>
                    <div className="text-xs text-muted-foreground">retweets</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Retweeted Content</CardTitle>
            <CardDescription>
              Your tweets with the highest retweet counts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { content: "Just launched a new feature! Excited to see what you think about this update...", retweets: 89, quotes: 23, date: "2 days ago" },
                { content: "Great discussion on the future of social media analytics and data visualization...", retweets: 67, quotes: 18, date: "5 days ago" },
                { content: "Thanks to everyone who joined our live session yesterday! Amazing turnout...", retweets: 43, quotes: 12, date: "1 week ago" },
                { content: "New blog post is up! Check out our latest insights on engagement metrics...", retweets: 38, quotes: 9, date: "1 week ago" },
                { content: "Behind the scenes look at our development process. Building in public is...", retweets: 29, quotes: 7, date: "2 weeks ago" },
              ].map((tweet, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm">{tweet.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 text-green-500">
                        <Repeat2 className="h-3 w-3" />
                        <span className="font-medium">{tweet.retweets}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{tweet.quotes} quotes</span>
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
          <CardTitle>Retweet Analytics</CardTitle>
          <CardDescription>
            Detailed insights into content amplification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Amplification Network</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Direct Retweets</span>
                  <span className="font-medium">{retweetsData?.count}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quote Tweets</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Second-level RTs</span>
                  <span className="font-medium">89</span>
                </div>
                <div className="flex justify-between text-sm font-medium border-t pt-2">
                  <span>Total Reach</span>
                  <span>127.4K</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Peak Retweet Times</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Morning (6-12)</span>
                  <span className="font-medium">34%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Afternoon (12-18)</span>
                  <span className="font-medium">42%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Evening (18-24)</span>
                  <span className="font-medium">19%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Night (0-6)</span>
                  <span className="font-medium">5%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Content Types</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Text Only</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>With Images</span>
                  <span className="font-medium">38%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>With Links</span>
                  <span className="font-medium">12%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>With Videos</span>
                  <span className="font-medium">5%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}