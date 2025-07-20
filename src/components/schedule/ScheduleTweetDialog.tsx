"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Calendar, 
  Clock, 
  Image, 
  Video, 
  Hash,
  X 
} from "lucide-react"

interface ScheduleTweetDialogProps {
  children?: React.ReactNode
}

export function ScheduleTweetDialog({ children }: ScheduleTweetDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [mediaType, setMediaType] = useState<string>("")
  const [hashtags, setHashtags] = useState<string[]>([])
  const [newHashtag, setNewHashtag] = useState("")

  const characterCount = content.length
  const maxCharacters = 280

  const handleAddHashtag = () => {
    if (newHashtag && !hashtags.includes(newHashtag)) {
      setHashtags([...hashtags, newHashtag])
      setNewHashtag("")
    }
  }

  const handleRemoveHashtag = (tagToRemove: string) => {
    setHashtags(hashtags.filter(tag => tag !== tagToRemove))
  }

  const handleScheduleTweet = () => {
    // Aquí iría la lógica para programar el tweet
    console.log({
      content,
      scheduledDate: selectedDate,
      scheduledTime: selectedTime,
      mediaType,
      hashtags
    })
    
    // Resetear el formulario
    setContent("")
    setSelectedDate("")
    setSelectedTime("")
    setMediaType("")
    setHashtags([])
    setIsOpen(false)
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const getCurrentTime = () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Tweet
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Schedule New Tweet</DialogTitle>
          <DialogDescription>
            Create and schedule your tweet to be published at the optimal time.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Tweet Content</Label>
            <Textarea
              id="content"
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] resize-none"
              maxLength={maxCharacters}
            />
            <div className="flex justify-between items-center">
              <div className="text-xs text-muted-foreground">
                {characterCount}/{maxCharacters} characters
              </div>
              <div className={`text-xs ${characterCount > maxCharacters ? 'text-red-500' : 'text-muted-foreground'}`}>
                {maxCharacters - characterCount} remaining
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">
                <Calendar className="h-4 w-4 inline mr-1" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getTodayDate()}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">
                <Clock className="h-4 w-4 inline mr-1" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                min={selectedDate === getTodayDate() ? getCurrentTime() : undefined}
              />
            </div>
          </div>

          {/* Media Type */}
          <div className="space-y-2">
            <Label>Media Type (Optional)</Label>
            <Select value={mediaType} onValueChange={setMediaType}>
              <SelectTrigger>
                <SelectValue placeholder="Select media type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No media</SelectItem>
                <SelectItem value="image">
                  <div className="flex items-center">
                    <Image className="h-4 w-4 mr-2" />
                    Image
                  </div>
                </SelectItem>
                <SelectItem value="video">
                  <div className="flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Video
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Hashtags */}
          <div className="space-y-2">
            <Label>
              <Hash className="h-4 w-4 inline mr-1" />
              Hashtags
            </Label>
            <div className="flex space-x-2">
              <Input
                placeholder="Add hashtag (without #)"
                value={newHashtag}
                onChange={(e) => setNewHashtag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddHashtag()}
              />
              <Button type="button" onClick={handleAddHashtag} size="sm">
                Add
              </Button>
            </div>
            {hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {hashtags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => handleRemoveHashtag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Optimal Time Suggestions */}
          <div className="space-y-2">
            <Label>Suggested Optimal Times</Label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { time: "09:00", label: "Morning", engagement: "Good" },
                { time: "14:00", label: "Afternoon", engagement: "High" },
                { time: "19:00", label: "Evening", engagement: "Medium" }
              ].map((suggestion) => (
                <Button
                  key={suggestion.time}
                  variant="outline"
                  size="sm"
                  className="flex flex-col items-center p-2 h-auto"
                  onClick={() => setSelectedTime(suggestion.time)}
                >
                  <div className="font-medium">{suggestion.time}</div>
                  <div className="text-xs text-muted-foreground">{suggestion.label}</div>
                  <Badge 
                    variant={suggestion.engagement === "High" ? "default" : "secondary"} 
                    className="text-xs mt-1"
                  >
                    {suggestion.engagement}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleScheduleTweet}
            disabled={!content || !selectedDate || !selectedTime || characterCount > maxCharacters}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Tweet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}