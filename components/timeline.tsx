"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface TimelineItem {
  id: number
  date: string
  title: string
  description: string
  image?: string
  position: "left" | "right"
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "2014년 3월",
    title: "교직 첫 발걸음",
    description: "수학교사로서의 첫 발걸음을 내딛었습니다. 학생들과 함께 수학의 아름다움을 탐구하기 시작했어요.",
    image: "/hanssam/first-step.jpg",
    position: "left",
  },
  {
    id: 2,
    date: "2016년 4월",
    title: "Math Clinic 시작",
    description: "수학에 어려움을 겪는 학생들을 위한 맞춤형 학습 프로그램 'Math Clinic'을 시작했습니다.",
    image: "/hanssam/mathclinic.jpg", 
    position: "right",
  },
  {
    id: 3,
    date: "2016년 8월",
    title: "수학체험전 개최",
    description:
      "중학교에서 '수학체험전'을 기획하고 개최했습니다. 학생들이 직접 체험하며 수학의 재미를 발견하는 시간이었어요.",
    image: "/hanssam/math-play.jpg",
    position: "left",
  },
  {
    id: 4,
    date: "2023년 9월",
    title: "정보 교사로 한 걸음 더!",
    description: "정보컴퓨터 교육 전공을 위해 교육대학원 입학을 했습니다. 학생들에게 새로운 교육을 제공하기 위한 준비할 수 있는 시간들이었어요.",
    image: "/hanssam/school.jpg",
    position: "right",
  },
  {
    id: 5,
    date: "2025년 현재",
    title: "수학×에듀테크 수업 개발",
    description: "에듀테크를 활용하여 어떻게 수업을 재밌게 운영할지에 대해 고민하고, 교사를 대상으로 하는 에듀테크 강의를 통해 지식과 경험을 나누고 있습니다.",
    image: "/hanssam/math-tech.jpg",
    position: "left",
  },
]

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id") || "0")
            setVisibleItems((prev) => [...prev, id])
          }
        })
      },
      { threshold: 0.2 },
    )

    const items = document.querySelectorAll(".timeline-item")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">교육 여정</h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg">한지쌤의 교육 여정을 함께 살펴볼까요?</p>
        </div>

        <div ref={timelineRef} className="timeline-container relative">
          {timelineData.map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`timeline-item timeline-${item.position} mb-12 ${
                visibleItems.includes(item.id) ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              <div className={`bg-card p-6 rounded-lg shadow-md ${item.position === "left" ? "mr-4" : "ml-4"}`}>
                <div className="text-sm text-primary font-medium mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {item.image && (
                  <div className="mt-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="rounded-md object-cover w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
