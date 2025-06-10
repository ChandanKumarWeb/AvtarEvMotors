"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, Zap, Moon, Sun, Monitor } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import BookAppointmentModal from "./BookAppointmentModal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Monitor className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  const MobileThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
      <div className="flex flex-col space-y-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
        <div className="flex space-x-2">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("light")}
            className="flex-1"
          >
            <Sun className="mr-2 h-4 w-4" />
            Light
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("dark")}
            className="flex-1"
          >
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </Button>
          <Button
            variant={theme === "system" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("system")}
            className="flex-1"
          >
            <Monitor className="mr-2 h-4 w-4" />
            System
          </Button>
        </div>
      </div>
    )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent">
              <img src="/Images/logo.webp" alt="logo" />            
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Avtar EV</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Motors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeToggle />
            <Link
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              <Phone className="h-4 w-4" />
              <span>+91 96369 04811</span>
            </Link>
            <BookAppointmentModal>
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                Book Service
              </Button>
            </BookAppointmentModal>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">Avtar EV</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Motors</span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Contact & CTA */}
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  <MobileThemeToggle />
                  <Link
                    href="tel:+919876543210"
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    <span>+91 96369 04811</span>
                  </Link>
                  <BookAppointmentModal>
                    <Button
                      className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Service
                    </Button>
                  </BookAppointmentModal>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
