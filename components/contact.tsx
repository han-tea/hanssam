"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [subscribeEmail, setSubscribeEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현에서는 Google Forms 또는 이메일 API와 연동
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setName("")
    setEmail("")
    setMessage("")

    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    // 실제 구현에서는 뉴스레터 API와 연동
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribing(false)
    setSubscribeSuccess(true)
    setSubscribeEmail("")

    setTimeout(() => {
      setSubscribeSuccess(false)
    }, 5000)
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl mb-6">함께 이야기해요</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              수업 의뢰, 협업 제안, 또는 궁금한 점이 있으시면 언제든지 연락주세요. 빠른 시일 내에 답변 드리겠습니다.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">이메일</p>
                  <Link href="mailto:hanji0601@gmail.com" className="text-primary hover:underline">
                    hanji0601@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <Link
                    href="https://github.com/hanjiteacher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/hanjiteacher
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">뉴스레터 구독</h3>
              <p className="text-muted-foreground mb-4">최신 교육 자료와 이벤트 소식을 받아보세요.</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="이메일 주소"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isSubscribing}>
                  {isSubscribing ? "구독 중..." : "구독하기"}
                </Button>
              </form>
              {subscribeSuccess && <p className="text-green-600 mt-2">구독해 주셔서 감사합니다!</p>}
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-6">문의하기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">메시지</Label>
                <Textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "전송 중..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    메시지 보내기
                  </>
                )}
              </Button>

              {submitSuccess && <p className="text-green-600 text-center mt-2">메시지가 성공적으로 전송되었습니다!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
