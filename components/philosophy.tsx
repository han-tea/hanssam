"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Heart, Lightbulb } from "lucide-react"

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.getElementById("philosophy")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="philosophy" className="w-full py-12 md:py-24 bg-neutral">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            교육 철학 & MBTI
          </h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg">호기심이 이끄는 교육, 긍정적인 영향력</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`space-y-6 ${isVisible ? "fade-in visible" : "fade-in"}`}>
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">ENTP</div>
            <h3 className="text-2xl font-bold">호기심 많은 탐험가</h3>
            <p className="text-muted-foreground">
              ENTP 성향의 특징을 살려 학생들의 호기심을 자극하고, 새로운 아이디어를 탐색하는 교육 환경을 만들어갑니다.
              "증명 못 해도 괜찮아요, 호기심은 이미 정답!"이라는 모토로 학생들의 자유로운 사고를 응원합니다.
            </p>

            <div className="pt-4">
              <h4 className="font-bold mb-2">한지쌤의 3-Step 교육 루프</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <Card
                  className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <h5 className="font-medium">호기심 자극</h5>
                    <p className="text-sm text-muted-foreground">질문으로 시작하는 수업</p>
                  </CardContent>
                </Card>

                <Card
                  className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h5 className="font-medium">탐구 활동</h5>
                    <p className="text-sm text-muted-foreground">직접 해보며 깨닫기</p>
                  </CardContent>
                </Card>

                <Card
                  className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <h5 className="font-medium">성취 경험</h5>
                    <p className="text-sm text-muted-foreground">자신감과 성장</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "fade-in visible" : "fade-in"}`} style={{ transitionDelay: "0.3s" }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" fill="#f5f7fa" stroke="#0085FF" strokeWidth="4" />
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="#f5f7fa"
                  stroke="#0085FF"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <circle cx="200" cy="200" r="120" fill="#f5f7fa" stroke="#0085FF" strokeWidth="2" />

                {/* ENTP 특성 */}
                <g>
                  <text x="200" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0085FF">
                    호기심
                  </text>
                  <text x="320" y="200" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0085FF">
                    창의성
                  </text>
                  <text x="200" y="320" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0085FF">
                    도전정신
                  </text>
                  <text x="80" y="200" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0085FF">
                    유연함
                  </text>
                </g>

                {/* 중앙 ENTP */}
                <circle cx="200" cy="200" r="60" fill="#0085FF" />
                <text x="200" y="190" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">
                  ENTP
                </text>
                <text x="200" y="215" textAnchor="middle" fontSize="14" fill="white">
                  발명가형
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
