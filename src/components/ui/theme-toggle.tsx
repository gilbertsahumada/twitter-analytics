"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const themes = [
    {
      name: "Light",
      value: "light" as const,
      icon: Sun,
      description: "Light theme"
    },
    {
      name: "Dark", 
      value: "dark" as const,
      icon: Moon,
      description: "Dark theme"
    },
    {
      name: "System",
      value: "system" as const,
      icon: Monitor,
      description: "Use system setting"
    }
  ]

  const currentTheme = themes.find(t => t.value === theme) || themes[2]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <currentTheme.icon className="h-4 w-4 mr-2" />
          <span>Theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose Theme</DialogTitle>
          <DialogDescription>
            Select your preferred theme appearance
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon
            return (
              <Button
                key={themeOption.value}
                variant={theme === themeOption.value ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => {
                  setTheme(themeOption.value)
                  setIsOpen(false)
                }}
              >
                <Icon className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="font-medium">{themeOption.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {themeOption.description}
                  </div>
                </div>
              </Button>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}