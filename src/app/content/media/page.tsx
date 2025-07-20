"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Image, Video, FileText, TrendingUp, Eye, Heart, Repeat2 } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Media</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Posts</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54</div>
            <p className="text-xs text-muted-foreground">42% of all tweets</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Boost</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+32%</div>
            <p className="text-xs text-muted-foreground">vs text only</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Videos</div>
            <p className="text-xs text-muted-foreground">6.1% avg engagement</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234K</div>
            <p className="text-xs text-muted-foreground">across all media</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Image className="h-5 w-5" />
              <span>Images</span>
            </CardTitle>
            <CardDescription>
              Photo content performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold">48</div>
                <div className="text-sm text-muted-foreground">posts with images</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Avg. Engagement</span>
                  <span className="font-medium">4.8%</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Impressions</span>
                  <span className="font-medium">189K</span>
                </div>
                <div className="flex justify-between">
                  <span>Best Format</span>
                  <span className="font-medium">Infographics</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="h-5 w-5" />
              <span>Videos</span>
            </CardTitle>
            <CardDescription>
              Video content performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-muted-foreground">posts with videos</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Avg. Engagement</span>
                  <span className="font-medium">6.1%</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Views</span>
                  <span className="font-medium">45K</span>
                </div>
                <div className="flex justify-between">
                  <span>Completion Rate</span>
                  <span className="font-medium">78%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Text Only</span>
            </CardTitle>
            <CardDescription>
              Text-only post performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold">73</div>
                <div className="text-sm text-muted-foreground">text-only posts</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Avg. Engagement</span>
                  <span className="font-medium">3.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Impressions</span>
                  <span className="font-medium">131K</span>
                </div>
                <div className="flex justify-between">
                  <span>Best Type</span>
                  <span className="font-medium">Questions</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Media</CardTitle>
          <CardDescription>
            Your best media content by engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                type: "image",
                content: "New feature launch announcement with dashboard screenshot",
                engagement: 366,
                likes: 245,
                retweets: 89,
                replies: 32,
                impressions: 8900,
                date: "March 15",
                mediaDescription: "Dashboard screenshot showing new analytics features"
              },
              {
                type: "video",
                content: "Behind the scenes development process video",
                engagement: 289,
                likes: 178,
                retweets: 67,
                replies: 44,
                impressions: 7200,
                date: "March 10",
                mediaDescription: "2-minute timelapse of coding session"
              },
              {
                type: "image",
                content: "Data visualization infographic on engagement trends",
                engagement: 234,
                likes: 156,
                retweets: 54,
                replies: 24,
                impressions: 6100,
                date: "March 8",
                mediaDescription: "Colorful chart showing monthly engagement patterns"
              },
              {
                type: "video",
                content: "Quick tutorial on interpreting analytics data",
                engagement: 198,
                likes: 134,
                retweets: 43,
                replies: 21,
                impressions: 5400,
                date: "March 5",
                mediaDescription: "90-second screen recording with voiceover"
              },
              {
                type: "image",
                content: "Team photo from company meetup event",
                engagement: 167,
                likes: 123,
                retweets: 28,
                replies: 16,
                impressions: 4200,
                date: "March 2",
                mediaDescription: "Group photo with team members at conference"
              },
            ].map((media, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-2">
                    {media.type === "video" ? (
                      <Video className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Image className="h-4 w-4 text-green-500" />
                    )}
                    <Badge variant="outline" className="text-xs capitalize">
                      {media.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{media.content}</p>
                    <p className="text-xs text-muted-foreground">{media.mediaDescription}</p>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3 text-muted-foreground" />
                      <span>{media.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-red-500">
                      <Heart className="h-3 w-3" />
                      <span>{media.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-500">
                      <Repeat2 className="h-3 w-3" />
                      <span>{media.retweets}</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium">{media.engagement}</span> total interactions
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {media.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Media Performance Comparison</CardTitle>
            <CardDescription>
              How different media types perform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "Videos", engagement: 6.1, reach: "+89%", icon: Video, color: "text-blue-500" },
              { type: "Images", engagement: 4.8, reach: "+45%", icon: Image, color: "text-green-500" },
              { type: "Text Only", engagement: 3.2, reach: "baseline", icon: FileText, color: "text-gray-500" },
            ].map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-4 w-4 ${type.color}`} />
                      <span className="text-sm font-medium">{type.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">{type.engagement}%</span>
                      <span className="text-xs text-muted-foreground ml-2">({type.reach})</span>
                    </div>
                  </div>
                  <Progress value={type.engagement * 10} className="h-2" />
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media Best Practices</CardTitle>
            <CardDescription>
              Insights for better media performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Image Tips</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• Use bright, high-contrast colors</div>
                  <div>• Include text overlays for context</div>
                  <div>• Square format performs 23% better</div>
                  <div>• Infographics get 67% more shares</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Video Tips</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• Keep under 2 minutes for best retention</div>
                  <div>• Add captions for accessibility</div>
                  <div>• Start with engaging hook in first 3 seconds</div>
                  <div>• Native video outperforms links by 5x</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Media Upload Timeline</CardTitle>
          <CardDescription>
            When you post media content and its performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">12.4K</div>
                <div className="text-sm text-muted-foreground">Avg Views per Media</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">4.9%</div>
                <div className="text-sm text-muted-foreground">Avg Media Engagement</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">2.3x</div>
                <div className="text-sm text-muted-foreground">Reach Multiplier</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-lg font-bold">67%</div>
                <div className="text-sm text-muted-foreground">With Media vs Without</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Best Times for Media Posts</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-3 border rounded">
                  <div className="font-medium">2:00 PM</div>
                  <div className="text-muted-foreground">Images</div>
                  <div className="text-xs text-green-600">5.8% avg</div>
                </div>
                <div className="text-center p-3 border rounded">
                  <div className="font-medium">11:00 AM</div>
                  <div className="text-muted-foreground">Videos</div>
                  <div className="text-xs text-blue-600">7.2% avg</div>
                </div>
                <div className="text-center p-3 border rounded">
                  <div className="font-medium">4:00 PM</div>
                  <div className="text-muted-foreground">Infographics</div>
                  <div className="text-xs text-purple-600">6.1% avg</div>
                </div>
                <div className="text-center p-3 border rounded">
                  <div className="font-medium">9:00 AM</div>
                  <div className="text-muted-foreground">Screenshots</div>
                  <div className="text-xs text-orange-600">4.9% avg</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}