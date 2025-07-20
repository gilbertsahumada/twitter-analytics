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
import { Edit, User, FileText } from "lucide-react"

interface EditProfileDialogProps {
  children?: React.ReactNode
}

export function EditProfileDialog({ children }: EditProfileDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState("gilbert_sahumada")
  const [bio, setBio] = useState("Social media analytics expert passionate about helping businesses understand their digital presence. Building tools for better insights. 📊")

  const handleSaveProfile = () => {
    // Aquí iría la lógica para guardar el perfil
    console.log({
      username,
      bio
    })
    
    setIsOpen(false)
  }

  const handleCancel = () => {
    // Resetear valores a los originales
    setUsername("gilbert_sahumada")
    setBio("Social media analytics expert passionate about helping businesses understand their digital presence. Building tools for better insights. 📊")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your public profile information. This will be visible to all users.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">
              <User className="h-4 w-4 inline mr-2" />
              Username
            </Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">@</span>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Choose a unique username that represents you
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">
              <FileText className="h-4 w-4 inline mr-2" />
              Bio
            </Label>
            <Textarea
              id="bio"
              placeholder="Tell people about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="min-h-[100px] resize-none"
              maxLength={160}
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                Describe yourself in a few words
              </p>
              <div className="text-xs text-muted-foreground">
                {bio.length}/160 characters
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button 
            onClick={handleSaveProfile}
            disabled={!username.trim() || !bio.trim()}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}