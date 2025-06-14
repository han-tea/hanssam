"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Code } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: number
  suffix?: string
  delay?: number
}

function StatCard({ icon, title, value, suffix = "", delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
    const step = 30

    setTimeout(() => {
      const timer = setInterval(() => {
        start += 1
        setCount(Math.floor((start / (duration / step)) * value))

        if (start >= duration / step) {
          setCount(value)
          clearInterval(timer)
        }
      }, step)

      return () => clearInterval(timer)
    }, delay)
  }, [isVisible, value, delay])

  return (
    <Card
      ref={ref}
      className={`overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-3xl md:text-4xl font-bold text-primary">
          {count}
          {suffix}
        </p>
      </CardContent>
    </Card>
  )
}

export default function QuickStats() {
  return (
    <section id="stats" className="w-full py-12 md:py-24 bg-neutral">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            숫자로 보는 <span className="text-primary">한지쌤</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg">지금까지의 교육 여정을 숫자로 표현해봤어요</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Users className="h-6 w-6 text-primary" />}
            title="교육한 학생 수"
            value={1200}
            suffix="명"
            delay={0}
          />
          <StatCard
            icon={<BookOpen className="h-6 w-6 text-primary" />}
            title="수업 자료"
            value={200}
            suffix="개"
            delay={200}
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-primary" />}
            title="수상 실적"
            value={1}
            suffix="회"
            delay={400}
          />
          <StatCard
            icon={<Code className="h-6 w-6 text-primary" />}
            title="코딩 프로젝트"
            value={5}
            suffix="개"
            delay={600}
          />
        </div>
      </div>
    </section>
  )
}
