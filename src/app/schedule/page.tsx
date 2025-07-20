"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScheduleTweetDialog } from "@/components/schedule/ScheduleTweetDialog"
import { Calendar, Clock, Send, Edit, Trash2 } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        <div className="flex items-center space-x-2">
          <ScheduleTweetDialog />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">tweets queued</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">posts scheduled</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">posts planned</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2:00 PM</div>
            <p className="text-xs text-muted-foreground">optimal posting</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Scheduled Posts</CardTitle>
            <CardDescription>
              Your queued tweets and their scheduled times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  content: "Sharing insights from our latest analytics report. The data shows some interesting trends in social media engagement patterns...",
                  scheduledTime: "Today, 2:00 PM",
                  status: "scheduled",
                  hasMedia: true,
                  mediaType: "image"
                },
                {
                  id: 2,
                  content: "Question for the community: What's your biggest challenge with social media analytics? I'm working on some content to address common pain points.",
                  scheduledTime: "Today, 4:30 PM",
                  status: "scheduled",
                  hasMedia: false,
                  mediaType: null
                },
                {
                  id: 3,
                  content: "Behind the scenes look at how we analyze engagement data. Process involves multiple data sources and some interesting visualization techniques.",
                  scheduledTime: "Tomorrow, 10:00 AM",
                  status: "scheduled",
                  hasMedia: true,
                  mediaType: "video"
                },
                {
                  id: 4,
                  content: "New blog post dropping tomorrow! Deep dive into the psychology of social media engagement and what drives user interaction.",
                  scheduledTime: "Tomorrow, 11:30 AM",
                  status: "scheduled",
                  hasMedia: true,
                  mediaType: "image"
                },
                {
                  id: 5,
                  content: "Weekly thread: Top 5 social media metrics you should be tracking in 2024. Let's dive into why these matter for your growth strategy.",
                  scheduledTime: "Friday, 1:00 PM",
                  status: "scheduled",
                  hasMedia: false,
                  mediaType: null
                },
                {
                  id: 6,
                  content: "Thanks to everyone who's been following our analytics journey. Your feedback and engagement means everything to our team!",
                  scheduledTime: "Friday, 3:45 PM",
                  status: "scheduled",
                  hasMedia: false,
                  mediaType: null
                },
              ].map((post, index) => (
                <div key={post.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm leading-relaxed">{post.content}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.scheduledTime}</span>
                      </div>
                      {post.hasMedia && (
                        <Badge variant="outline" className="text-xs">
                          {post.mediaType === "video" ? "📹" : "🖼️"} {post.mediaType}
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs capitalize">
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Posting Schedule</CardTitle>
            <CardDescription>
              Optimal times based on your audience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Best Times Today</h4>
                <div className="space-y-2">
                  {[
                    { time: "2:00 PM", engagement: "High", scheduled: true },
                    { time: "4:30 PM", engagement: "High", scheduled: true },
                    { time: "7:00 PM", engagement: "Medium", scheduled: false },
                    { time: "9:00 PM", engagement: "Medium", scheduled: false },
                  ].map((slot, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{slot.time}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant={slot.engagement === "High" ? "default" : "secondary"} className="text-xs">
                          {slot.engagement}
                        </Badge>
                        {slot.scheduled && (
                          <Badge variant="outline" className="text-xs">
                            Scheduled
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">This Week</h4>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
                    const posts = [2, 3, 1, 2, 2, 0, 1][index]
                    return (
                      <div key={day} className="p-2 bg-muted rounded">
                        <div className="font-medium">{day}</div>
                        <div className="text-muted-foreground">{posts}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Content Types</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Text Posts</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>With Images</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>With Videos</span>
                    <span className="font-medium">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Threads</span>
                    <span className="font-medium">1</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Schedule Analytics</CardTitle>
          <CardDescription>
            Performance insights for your posting schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Best Performing Times</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2:00 - 3:00 PM</span>
                  <span className="font-medium">4.8% avg engagement</span>
                </div>
                <div className="flex justify-between">
                  <span>11:00 AM - 12:00 PM</span>
                  <span className="font-medium">4.2% avg engagement</span>
                </div>
                <div className="flex justify-between">
                  <span>7:00 - 8:00 PM</span>
                  <span className="font-medium">3.9% avg engagement</span>
                </div>
                <div className="flex justify-between">
                  <span>9:00 - 10:00 AM</span>
                  <span className="font-medium">3.6% avg engagement</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Day Performance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span className="font-medium">Highest reach</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span className="font-medium">Most engagement</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span className="font-medium">Best for discussions</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="font-medium">Good for announcements</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Frequency Insights</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Optimal Daily Posts</span>
                  <span className="font-medium">2-3 tweets</span>
                </div>
                <div className="flex justify-between">
                  <span>Min Gap Between Posts</span>
                  <span className="font-medium">3 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend Posts</span>
                  <span className="font-medium">1 per day</span>
                </div>
                <div className="flex justify-between">
                  <span>Thread Frequency</span>
                  <span className="font-medium">2x per week</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}