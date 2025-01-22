"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"

const ModeToggle = () => {
  const { setTheme } = useTheme()
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]" >
        this is Graph
        <div className="grid gap-[32px]">
          <h2 className="p-4 border">card one</h2>
          <h2 className="p-4 border">card one</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
        <h1 className="p-4 border">card three</h1>
        <h1 className="p-4 border">card three</h1>
        <h1 className="p-4 border">card three</h1>
      </div>
    </div>
  )
}

export default ModeToggle
