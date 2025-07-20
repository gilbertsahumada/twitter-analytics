"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hash, FileText, Image, Video, TrendingUp, Eye } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Content</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tweets</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Hashtags</CardTitle>
            <Hash className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">unique hashtags used</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Posts</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54</div>
            <p className="text-xs text-muted-foreground">with images/videos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2%</div>
            <p className="text-xs text-muted-foreground">engagement rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Top Tweets</span>
            </CardTitle>
            <CardDescription>
              Your best performing tweets by engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Highest Engagement</span>
                <span className="font-medium">8.9K interactions</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Top Reach</span>
                <span className="font-medium">47.2K accounts</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Most Liked</span>
                <span className="font-medium">245 likes</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Hash className="h-5 w-5" />
              <span>Hashtags</span>
            </CardTitle>
            <CardDescription>
              Trending hashtags and their performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Most Used</span>
                <span className="font-medium">#analytics (12x)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Best Performing</span>
                <span className="font-medium">#socialmedia</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Trending</span>
                <span className="font-medium">#AI</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Image className="h-5 w-5" />
              <span>Media</span>
            </CardTitle>
            <CardDescription>
              Images, videos, and media performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Images</span>
                <span className="font-medium">48 posts</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Videos</span>
                <span className="font-medium">6 posts</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Avg. Boost</span>
                <span className="font-medium">+32% engagement</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content Performance Overview</CardTitle>
          <CardDescription>
            How different types of content perform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Content Types</h4>
              {[
                { type: "Text Only", count: 73, engagement: 3.2, icon: FileText },
                { type: "With Images", count: 38, engagement: 4.8, icon: Image },
                { type: "With Videos", count: 6, engagement: 6.1, icon: Video },
                { type: "With Links", count: 10, engagement: 3.9, icon: TrendingUp },
              ].map((content, index) => {
                const Icon = content.icon
                return (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center space-x-3">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{content.type}</p>
                        <p className="text-xs text-muted-foreground">{content.count} tweets</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{content.engagement}%</p>
                      <p className="text-xs text-muted-foreground">engagement</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Recent Top Performers</h4>
              {[
                { content: "Just launched a new feature! Excited to see what you think...", engagement: 366, date: "2 days ago" },
                { content: "Great discussion on the future of social media analytics...", engagement: 282, date: "5 days ago" },
                { content: "Thanks to everyone who joined our live session yesterday!", engagement: 218, date: "1 week ago" },
                { content: "New blog post is up! Check out our latest insights...", engagement: 187, date: "1 week ago" },
              ].map((tweet, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border rounded">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{tweet.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{tweet.engagement} interactions</span>
                      </div>
                      <span>•</span>
                      <span>{tweet.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}