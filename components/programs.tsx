"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Code, Lightbulb, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState<string | null>("math-clinic")

  return (
    <section id="programs" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-pretendard text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            시그니처 프로그램
          </h2>
          <p className="mt-4 text-muted-foreground font-noto md:text-lg">
            한지쌤이 운영하는 특별한 교육 프로그램을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${activeProgram === "math-clinic" ? "border-primary" : ""}`}
            onClick={() => setActiveProgram("math-clinic")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Math Clinic</h3>
              <p className="text-muted-foreground">수학 학습 어려움 해결을 위한 맞춤형 프로그램</p>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${activeProgram === "math-fair" ? "border-primary" : ""}`}
            onClick={() => setActiveProgram("math-fair")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Math Experience Fair</h3>
              <p className="text-muted-foreground">체험을 통해 수학의 재미를 발견하는 축제</p>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${activeProgram === "coding-jumpstart" ? "border-primary" : ""}`}
            onClick={() => setActiveProgram("coding-jumpstart")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coding Jump-start</h3>
              <p className="text-muted-foreground">수학적 사고와 코딩의 만남, 첫 발걸음</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg shadow-md p-6">
          {activeProgram === "math-clinic" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Math Clinic</h3>
                <p className="text-muted-foreground mb-6">
                  수학에 어려움을 겪는 학생들을 위한 맞춤형 학습 프로그램입니다. 개인별 학습 진단을 통해 취약점을
                  파악하고, 맞춤형 학습 계획을 수립하여 체계적으로 수학 실력을 향상시킵니다.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>프로그램 특징</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>1:1 맞춤형 학습 진단</li>
                        <li>개인별 취약점 분석 및 학습 계획 수립</li>
                        <li>시각적 자료를 활용한 개념 이해 중심 학습</li>
                        <li>단계별 성취감을 경험할 수 있는 문제 해결 활동</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>대상 학생</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>수학 학습에 어려움을 겪는 중학생</li>
                        <li>수학 기초 개념이 부족한 고등학생</li>
                        <li>수학 학습 방법을 개선하고 싶은 학생</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>성과</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Math Clinic 참여 학생들의 평균 성적이 20% 향상되었으며, 수학에 대한 자신감과 흥미도가 크게
                        증가했습니다. 특히 수학 학습에 대한 불안감이 감소하고, 스스로 문제를 해결하려는 의지가
                        강화되었습니다.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="relative aspect-video w-full">
                <Image
                  src="/mathclinic.jpg"
                  alt="Math Clinic 수업 현장"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          )}

          {activeProgram === "math-fair" && (
            <div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Math Experience Fair</h3>
                <p className="text-muted-foreground mb-6">
                  학생들이 직접 체험하며 수학의 재미와 실용성을 발견하는 축제입니다. 다양한 체험 부스와 게임을 통해
                  수학적 개념을 자연스럽게 익히고, 수학에 대한 긍정적인 인식을 형성합니다.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>프로그램 특징</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>학생들이 직접 기획하고 운영하는 체험 부스</li>
                        <li>일상 속 수학 원리를 발견하는 체험 활동</li>
                        <li>수학 게임과 퍼즐을 통한 재미있는 학습</li>
                        <li>학부모와 지역 사회가 함께하는 열린 행사</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>주요 부스</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>확률과 통계: 주사위 게임과 확률 실험</li>
                        <li>기하학: 테셀레이션 아트 만들기</li>
                        <li>수와 연산: 수학 마술 쇼</li>
                        <li>함수: 그래프 아트 갤러리</li>
                        <li>측정: 황금비율 찾기 체험</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>성과</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        매년 1000명 이상의 학생과 학부모가 참여하는 학교 대표 행사로 자리매김했으며, 지역 신문에
                        소개되기도 했습니다. 참여 학생들의 수학에 대한 흥미도가 매우 증가했으며, 학생들의 자발적
                        참여와 협업 능력이 크게 향상되었습니다.
                      </p>
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-bold mb-2">관련 뉴스</h4>
                        <Link 
                          href="https://www.eduyonhap.com/m/page/view.php?no=27087" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-2"
                        >
                          <span>수학의 재미를 발견하는 시간, '수학체험전' 성료</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}

          {activeProgram === "coding-jumpstart" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Coding Jump-start</h3>
                <p className="text-muted-foreground mb-6">
                  수학적 사고와 코딩의 만남을 통해 컴퓨팅 사고력을 기르는 프로그램입니다. 코딩을 처음 접하는 학생들도
                  쉽게 이해하고 즐길 수 있도록 수학적 개념과 연계하여 단계적으로 학습합니다.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>프로그램 특징</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>수학 개념과 연계한 코딩 학습</li>
                        <li>블록 코딩부터 시작하는 단계적 접근</li>
                        <li>실생활 문제 해결 프로젝트 중심 학습</li>
                        <li>협업을 통한 창의적 문제 해결 경험</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>커리큘럼</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>1단계: 블록 코딩으로 알고리즘 이해하기</li>
                        <li>2단계: 수학 함수와 코딩 함수의 연결</li>
                        <li>3단계: 기하학적 패턴과 반복문</li>
                        <li>4단계: 데이터 분석과 시각화</li>
                        <li>5단계: 미니 프로젝트 개발 및 발표</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>성과</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        프로그램 참여 학생들의 90%가 코딩에 대한 흥미를 갖게 되었으며, 70% 이상이 추가 코딩 학습을
                        희망했습니다. 특히 수학에 어려움을 겪던 학생들이 코딩을 통해 수학적 개념을 더 쉽게 이해하게 되는
                        효과가 있었습니다.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="relative aspect-video w-full">
                <Image
                  src="/coding.jpg"
                  alt="Coding Jump-start 수업 현장"
                  width={600}
                  height={400}
                  className="rounded-lg object-contain w-full h-full bg-neutral"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
