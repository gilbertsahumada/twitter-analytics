"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Hash, TrendingUp, Eye, MessageCircle, BarChart3 } from "lucide-react"

export default function HashtagsPage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Hashtags</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Last 30 days</Badge>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hashtags</CardTitle>
            <Hash className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">unique hashtags used</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Used</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#analytics</div>
            <p className="text-xs text-muted-foreground">used 12 times</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#AI</div>
            <p className="text-xs text-muted-foreground">6.2% avg engagement</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hashtag Boost</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23%</div>
            <p className="text-xs text-muted-foreground">avg reach increase</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Hashtags</CardTitle>
          <CardDescription>
            Hashtags ranked by engagement and reach performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                hashtag: "#AI", 
                uses: 8, 
                avgEngagement: 6.2, 
                totalReach: "34.2K", 
                trending: true,
                category: "Technology"
              },
              { 
                hashtag: "#socialmedia", 
                uses: 10, 
                avgEngagement: 5.8, 
                totalReach: "28.7K", 
                trending: false,
                category: "Marketing"
              },
              { 
                hashtag: "#analytics", 
                uses: 12, 
                avgEngagement: 4.9, 
                totalReach: "31.5K", 
                trending: false,
                category: "Data"
              },
              { 
                hashtag: "#data", 
                uses: 7, 
                avgEngagement: 4.7, 
                totalReach: "22.1K", 
                trending: false,
                category: "Data"
              },
              { 
                hashtag: "#marketing", 
                uses: 6, 
                avgEngagement: 4.5, 
                totalReach: "19.8K", 
                trending: false,
                category: "Marketing"
              },
              { 
                hashtag: "#growth", 
                uses: 5, 
                avgEngagement: 4.3, 
                totalReach: "16.4K", 
                trending: true,
                category: "Business"
              },
              { 
                hashtag: "#tech", 
                uses: 9, 
                avgEngagement: 4.1, 
                totalReach: "25.3K", 
                trending: false,
                category: "Technology"
              },
              { 
                hashtag: "#business", 
                uses: 4, 
                avgEngagement: 3.9, 
                totalReach: "14.2K", 
                trending: false,
                category: "Business"
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-blue-600">{item.hashtag}</span>
                      {item.trending && <Badge variant="secondary" className="text-xs">Trending</Badge>}
                      <Badge variant="outline" className="text-xs">{item.category}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Used {item.uses} times this month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-medium">{item.avgEngagement}%</div>
                    <div className="text-xs text-muted-foreground">engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{item.totalReach}</div>
                    <div className="text-xs text-muted-foreground">total reach</div>
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
            <CardTitle>Hashtag Categories</CardTitle>
            <CardDescription>
              Performance by hashtag category
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { category: "Technology", count: 17, avgEngagement: 5.1, color: "bg-blue-500" },
              { category: "Marketing", count: 16, avgEngagement: 4.8, color: "bg-green-500" },
              { category: "Data", count: 19, avgEngagement: 4.6, color: "bg-purple-500" },
              { category: "Business", count: 9, avgEngagement: 4.2, color: "bg-orange-500" },
            ].map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium">{category.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">{category.count} uses</span>
                    <span className="text-xs text-muted-foreground ml-2">({category.avgEngagement}% avg)</span>
                  </div>
                </div>
                <Progress value={(category.count / 19) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hashtag Insights</CardTitle>
            <CardDescription>
              Usage patterns and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Optimal Usage</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>1-2 hashtags</span>
                    <span className="font-medium">5.2% avg engagement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3-4 hashtags</span>
                    <span className="font-medium">4.8% avg engagement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5+ hashtags</span>
                    <span className="font-medium">3.1% avg engagement</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Best Combinations</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-muted rounded">
                    <span className="text-blue-600">#AI</span> + <span className="text-blue-600">#analytics</span>
                    <div className="text-xs text-muted-foreground">6.8% avg engagement</div>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <span className="text-blue-600">#socialmedia</span> + <span className="text-blue-600">#marketing</span>
                    <div className="text-xs text-muted-foreground">5.9% avg engagement</div>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <span className="text-blue-600">#data</span> + <span className="text-blue-600">#analytics</span>
                    <div className="text-xs text-muted-foreground">5.4% avg engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Trending Hashtags</CardTitle>
          <CardDescription>
            Popular hashtags in your industry and community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium mb-3">Industry Trending</h4>
              <div className="space-y-2">
                {[
                  { tag: "#MachineLearning", growth: "+45%" },
                  { tag: "#DataVisualization", growth: "+32%" },
                  { tag: "#SocialMediaTrends", growth: "+28%" },
                  { tag: "#DigitalMarketing", growth: "+23%" },
                ].map((trend, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">{trend.tag}</span>
                    <span className="text-green-600 font-medium">{trend.growth}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Recommended</h4>
              <div className="space-y-2">
                {[
                  { tag: "#SocialListening", reason: "High engagement" },
                  { tag: "#ContentStrategy", reason: "Growing trend" },
                  { tag: "#InfluencerMarketing", reason: "Relevant audience" },
                  { tag: "#CustomerInsights", reason: "Low competition" },
                ].map((rec, index) => (
                  <div key={index} className="text-sm">
                    <div className="text-blue-600">{rec.tag}</div>
                    <div className="text-xs text-muted-foreground">{rec.reason}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Avoid Overuse</h4>
              <div className="space-y-2">
                {[
                  { tag: "#follow4follow", reason: "Low quality" },
                  { tag: "#like4like", reason: "Spam-like" },
                  { tag: "#socialmedia", reason: "Overused" },
                  { tag: "#marketing", reason: "Too broad" },
                ].map((avoid, index) => (
                  <div key={index} className="text-sm">
                    <div className="text-red-600">{avoid.tag}</div>
                    <div className="text-xs text-muted-foreground">{avoid.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}