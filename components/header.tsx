"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-pretendard font-bold text-2xl text-primary">한지쌤</span>
        </Link>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="font-noto hover:text-primary transition-colors">
            소개
          </Link>
          <Link href="#timeline" className="font-noto hover:text-primary transition-colors">
            교육 여정
          </Link>
          <Link href="#programs" className="font-noto hover:text-primary transition-colors">
            프로그램
          </Link>
          <Link href="#blog" className="font-noto hover:text-primary transition-colors">
            블로그
          </Link>
          <Link href="#contact" className="font-noto hover:text-primary transition-colors">
            문의
          </Link>
          <ModeToggle />
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="font-noto hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              href="#timeline"
              className="font-noto hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              교육 여정
            </Link>
            <Link
              href="#programs"
              className="font-noto hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              프로그램
            </Link>
            <Link
              href="#blog"
              className="font-noto hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              블로그
            </Link>
            <Link
              href="#contact"
              className="font-noto hover:text-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              문의
            </Link>
            <div className="flex items-center justify-between pt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
