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
import { Settings, User, Mail } from "lucide-react"

interface ProfileSettingsDialogProps {
  children?: React.ReactNode
}

export function ProfileSettingsDialog({ children }: ProfileSettingsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [displayName, setDisplayName] = useState("Gilbert Sahumada")
  const [email, setEmail] = useState("gilbert@example.com")

  const handleSaveSettings = () => {
    // Aquí iría la lógica para guardar la configuración
    console.log({
      displayName,
      email
    })
    
    setIsOpen(false)
  }

  const handleCancel = () => {
    // Resetear valores a los originales
    setDisplayName("Gilbert Sahumada")
    setEmail("gilbert@example.com")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
          <DialogDescription>
            Update your profile information. Changes will be saved to your account.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {/* Display Name */}
          <div className="space-y-2">
            <Label htmlFor="displayName">
              <User className="h-4 w-4 inline mr-2" />
              Display Name
            </Label>
            <Input
              id="displayName"
              placeholder="Enter your display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              <Mail className="h-4 w-4 inline mr-2" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button 
            onClick={handleSaveSettings}
            disabled={!displayName.trim() || !email.trim()}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}