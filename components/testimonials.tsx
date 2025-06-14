"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "김OO",
    role: "중학교 2학년 학생",
    content:
      "한지쌤의 Math Clinic 덕분에 수학에 대한 두려움이 사라졌어요. 개념을 쉽게 설명해주시고, 제가 어려워하는 부분을 정확히 짚어주셔서 성적이 많이 올랐습니다. 무엇보다 수학이 재미있어졌어요!",
    image: "/placeholder.svg?height=100&width=100",
    stars: 5,
  },
  {
    id: 2,
    name: "이OO 교사",
    role: "중학교 수학 교사",
    content:
      "한지쌤이 진행하는 하이러닝으로 클래스 업! 연수를 듣고 수업시간에 어떻게 하이러닝을 활용하는지 알게 되었어요. 많은 도움이 되었습니다!",
    image: "/placeholder.svg?height=100&width=100",
    stars: 5,
  },
  {
    id: 3,
    name: "박OO 학부모",
    role: "학부모",
    content:
      "아이가 수학을 정말 싫어했는데, 한지쌤의 수학체험전 이후로 태도가 완전히 바뀌었습니다. 직접 체험하고 만들어보는 활동을 통해 수학의 재미를 느낀 것 같아요. 선생님의 열정적인 지도에 정말 감사드립니다.",
    image: "/placeholder.svg?height=100&width=100",
    stars: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

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

    const element = document.getElementById("testimonials")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handleStarClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 5) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 3000)
        return 0
      }
      return newCount
    })
  }

  return (
    <section id="testimonials" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            학생들의 이야기
          </h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg">한지쌤과 함께한 학생들의 생생한 후기</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card
                    className={`h-full ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mb-2" onClick={handleStarClick}>
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-lg mb-4 italic">"{testimonial.content}"</p>
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 rounded-full"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">이전</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">다음</span>
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full ${i === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(i)}
              >
                <span className="sr-only">{i + 1}번 후기</span>
              </button>
            ))}
          </div>
        </div>

        {showEasterEgg && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center">
              <h3 className="text-2xl font-bold mb-4">🌟 이스터에그를 발견하셨습니다! 🌟</h3>
              <p>한지쌤의 수업은 언제나 별 다섯 개!</p>
              <Button className="mt-4" onClick={() => setShowEasterEgg(false)}>
                닫기
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
