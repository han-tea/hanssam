"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileCode, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function NewStart() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("new-start")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="new-start" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent mb-4">New Chapter</div>
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            새로운 교육의 시작
          </h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg max-w-2xl mx-auto">
            수학과 코딩의 융합을 통해 학생들에게 새로운 가능성을 열어주는 교육을 시작합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <FileCode className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">수업 자료</h3>
              <p className="text-muted-foreground mb-4">수학과 코딩을 연계한 다양한 수업 자료를 제공합니다.</p>
              <Link href="/resources" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  자료실 방문하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">교육 프로젝트</h3>
              <p className="text-muted-foreground mb-4">수학과 코딩을 융합한 다양한 교육 프로젝트를 진행합니다.</p>
              <Link href="/projects" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  프로젝트 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card
            className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">준비 중인 프로젝트</h3>
              <p className="text-muted-foreground mb-4">수학×코딩 융합 교육 플랫폼을 개발 중입니다.</p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">함께 만들어가요</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            수학과 코딩의 융합 교육에 관심 있는 선생님들과 함께 새로운 교육 방법과 자료를 개발하고 공유하고 싶습니다.
            관심 있으신 분들은 언제든지 연락주세요!
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white btn-bounce">협업 제안하기</Button>
        </div>
      </div>
    </section>
  )
} 