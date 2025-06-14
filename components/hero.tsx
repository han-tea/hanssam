"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const playClickSound = () => {
    const audio = new Audio("/click.mp3")
    audio.volume = 0.5
    audio.play()
  }

  return (
    <section className="w-full min-h-screen flex flex-col justify-center pt-16">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        <div className={`space-y-6 md:space-y-8 lg:w-1/2 ${isVisible ? "fade-in visible" : "fade-in"}`}>
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            수학 × 코딩 = 가능성
          </div>
          <h1 className="font-pretendard text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            호기심이 이끄는 교육,
            <br />
            <span className="text-primary">한지쌤</span>과 함께
          </h1>
          <p className="font-noto text-lg md:text-xl text-muted-foreground max-w-[600px]">
            수학과 코딩의 만남으로 학생들에게 <span className="text-accent font-bold">'두근두근'</span> 설렘을
            선물합니다.
            <br />
            Curiosity-Driven Teaching, Positive Impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="btn-bounce" onClick={() => {
              playClickSound();
              const el = document.getElementById('timeline');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <BookOpen className="mr-2 h-4 w-4" />
              스토리 보기
            </Button>
          </div>
        </div>
        <div className={`lg:w-1/2 ${isVisible ? "fade-in visible" : "fade-in"}`} style={{ transitionDelay: "0.3s" }}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/hanssam/profile.jpg"
              alt="한지쌤의 프로필 사진"
              width={600}
              height={600}
              className="rounded-2xl object-cover shadow-xl"
              priority
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg">
              <p className="font-pretendard font-bold">10년차 수학교사</p>
              <p className="text-sm">정보·컴퓨터 교사로 레벨업 중</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
