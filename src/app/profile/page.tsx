"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ProfileSettingsDialog } from "@/components/profile/ProfileSettingsDialog"
import { EditProfileDialog } from "@/components/profile/EditProfileDialog"
import { 
  User2, 
  MapPin, 
  Calendar, 
  Link, 
  Users, 
  Heart,
  MessageCircle,
  Repeat2,
  TrendingUp,
  Shield
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        <div className="flex items-center space-x-2">
          <EditProfileDialog />
          <ProfileSettingsDialog />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Your Twitter profile details and stats
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatars/gilbert.jpg" alt="Gilbert Sahumada" />
                <AvatarFallback className="text-lg">GS</AvatarFallback>
              </Avatar>
              <div className="text-center space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold">Gilbert Sahumada</h3>
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">@gilbert_sahumada</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm">
                Social media analytics expert passionate about helping businesses understand their digital presence. 
                Building tools for better insights. 📊
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Link className="h-4 w-4" />
                  <span className="text-blue-600">socialmetrics.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined March 2019</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="text-xl font-bold">12.8K</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">1.2K</div>
                <div className="text-xs text-muted-foreground">Following</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Account Performance</CardTitle>
            <CardDescription>
              Overview of your Twitter account metrics and growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-blue-600">4.8%</div>
                <div className="text-sm text-muted-foreground">Engagement Rate</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-green-600">+2.3%</div>
                <div className="text-sm text-muted-foreground">Monthly Growth</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-purple-600">156K</div>
                <div className="text-sm text-muted-foreground">Total Reach</div>
              </div>
              <div className="text-center p-4 bg-muted rounded">
                <div className="text-2xl font-bold text-orange-600">127</div>
                <div className="text-sm text-muted-foreground">Tweets (30d)</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Recent Activity</h4>
              {[
                {
                  action: "Tweet published",
                  content: "Just launched a new feature! Excited to see what you think...",
                  metrics: { likes: 245, retweets: 89, replies: 32 },
                  time: "2 hours ago"
                },
                {
                  action: "Reply sent",
                  content: "Thanks for the feedback! We're always looking to improve...",
                  metrics: { likes: 34, retweets: 8, replies: 12 },
                  time: "4 hours ago"
                },
                {
                  action: "Tweet published",
                  content: "Great discussion on the future of social media analytics...",
                  metrics: { likes: 187, retweets: 67, replies: 28 },
                  time: "1 day ago"
                },
                {
                  action: "Retweet",
                  content: "Interesting insights on data visualization best practices...",
                  metrics: { likes: 12, retweets: 45, replies: 6 },
                  time: "2 days ago"
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 border rounded">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{activity.action}</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.content}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-red-500">
                        <Heart className="h-3 w-3" />
                        <span>{activity.metrics.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-500">
                        <Repeat2 className="h-3 w-3" />
                        <span>{activity.metrics.retweets}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-500">
                        <MessageCircle className="h-3 w-3" />
                        <span>{activity.metrics.replies}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Growth Analytics</CardTitle>
            <CardDescription>
              Your follower and engagement growth over time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Follower Growth</span>
                <span className="text-sm text-green-600">+289 this month</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">Target: 13K by end of month</div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Engagement Rate</span>
                <span className="text-sm text-blue-600">4.8% avg</span>
              </div>
              <Progress value={80} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">Industry avg: 3.2%</div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Tweet Frequency</span>
                <span className="text-sm text-purple-600">4.2 per day</span>
              </div>
              <Progress value={65} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">Optimal: 3-5 tweets/day</div>
            </div>

            <div className="pt-4 space-y-2">
              <h4 className="text-sm font-medium">Monthly Milestones</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Most liked tweet</span>
                  <span className="font-medium">245 likes</span>
                </div>
                <div className="flex justify-between">
                  <span>Best engagement day</span>
                  <span className="font-medium">March 15</span>
                </div>
                <div className="flex justify-between">
                  <span>New followers peak</span>
                  <span className="font-medium">23 in one day</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Health</CardTitle>
            <CardDescription>
              Profile optimization and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Profile Completeness</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
              <div className="text-xs text-muted-foreground mt-1">Add pinned tweet to reach 100%</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Optimization Score</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Bio optimization</span>
                  <Badge variant="secondary" className="text-xs">Excellent</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Posting consistency</span>
                  <Badge variant="secondary" className="text-xs">Good</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engagement quality</span>
                  <Badge variant="secondary" className="text-xs">Excellent</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Content variety</span>
                  <Badge variant="outline" className="text-xs">Needs work</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Recommendations</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="h-3 w-3 mt-0.5 text-green-500" />
                  <span>Pin your best performing tweet</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="h-3 w-3 mt-0.5 text-blue-500" />
                  <span>Increase video content by 20%</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MessageCircle className="h-3 w-3 mt-0.5 text-purple-500" />
                  <span>Engage more with followers' replies</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>
            Manage your account preferences and privacy settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Privacy</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Account visibility</span>
                  <Badge variant="outline">Public</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Message requests</span>
                  <Badge variant="outline">Filtered</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tag notifications</span>
                  <Badge variant="outline">On</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Notifications</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>New followers</span>
                  <Badge variant="secondary">Enabled</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mentions</span>
                  <Badge variant="secondary">Enabled</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Analytics reports</span>
                  <Badge variant="secondary">Weekly</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Data & Analytics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Data tracking</span>
                  <Badge variant="secondary">Enabled</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Export data</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                    Download
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Analytics sharing</span>
                  <Badge variant="outline">Private</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}