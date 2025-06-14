"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Code, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: "math" | "cs" | "resource"
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "수학 불안감 극복하기: 학생들을 위한 5가지 전략",
    excerpt: "많은 학생들이 겪는 수학 불안감을 극복하는 효과적인 방법을 소개합니다.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-05-15",
    category: "math",
    readTime: "5분",
  },
  {
    id: 2,
    title: "블록 코딩으로 시작하는 알고리즘 기초",
    excerpt: "프로그래밍을 처음 접하는 학생들을 위한 블록 코딩 가이드입니다.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-05-10",
    category: "cs",
    readTime: "7분",
  },
  {
    id: 3,
    title: "수학체험전 운영 가이드: A to Z",
    excerpt: "성공적인 수학체험전 기획과 운영을 위한 모든 것을 담았습니다.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-05-01",
    category: "resource",
    readTime: "10분",
  },
  {
    id: 4,
    title: "함수의 아름다움: 시각화로 이해하기",
    excerpt: "추상적인 함수 개념을 시각화를 통해 쉽게 이해하는 방법을 소개합니다.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-04-25",
    category: "math",
    readTime: "6분",
  },
  {
    id: 5,
    title: "파이썬으로 수학 문제 해결하기",
    excerpt: "파이썬 프로그래밍을 활용해 수학 문제를 효율적으로 해결하는 방법을 알아봅니다.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-04-20",
    category: "cs",
    readTime: "8분",
  },
  {
    id: 6,
    title: "학생 참여를 높이는 수업 자료 10선",
    excerpt: "학생들의 적극적인 참여를 이끌어내는 효과적인 수업 자료를 공유합니다.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-04-15",
    category: "resource",
    readTime: "5분",
  },
]

export default function Blog() {
  const [filter, setFilter] = useState<"all" | "math" | "cs" | "resource">("all")
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([])
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

    const element = document.getElementById("blog")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setVisiblePosts(blogPosts)
    } else {
      setVisiblePosts(blogPosts.filter((post) => post.category === filter))
    }
  }, [filter])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "math":
        return <Calculator className="h-4 w-4" />
      case "cs":
        return <Code className="h-4 w-4" />
      case "resource":
        return <BookOpen className="h-4 w-4" />
      default:
        return null
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "math":
        return "수학"
      case "cs":
        return "코딩"
      case "resource":
        return "자료실"
      default:
        return ""
    }
  }

  return (
    <section id="blog" className="w-full py-12 md:py-24 bg-neutral">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            블로그 & 자료실
          </h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg">
            수학과 코딩에 관한 유용한 정보와 자료를 공유합니다
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              전체
            </Button>
            <Button
              variant={filter === "math" ? "default" : "outline"}
              onClick={() => setFilter("math")}
              className="rounded-full"
            >
              <Calculator className="mr-2 h-4 w-4" />
              수학
            </Button>
            <Button
              variant={filter === "cs" ? "default" : "outline"}
              onClick={() => setFilter("cs")}
              className="rounded-full"
            >
              <Code className="mr-2 h-4 w-4" />
              코딩
            </Button>
            <Button
              variant={filter === "resource" ? "default" : "outline"}
              onClick={() => setFilter("resource")}
              className="rounded-full"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              자료실
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post, index) => (
            <Card
              key={post.id}
              className={`overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-white text-primary hover:bg-white/90">
                    {getCategoryIcon(post.category)}
                    <span className="ml-1">{getCategoryName(post.category)}</span>
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime} 읽기</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Link href={`/blog/${post.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button>더 많은 글 보기</Button>
        </div>
      </div>
    </section>
  )
}
