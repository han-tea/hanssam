import Link from "next/link"
import { Github, Mail, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-pretendard font-bold text-2xl text-primary">한지쌤</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              수학과 코딩의 만남으로 학생들에게 '두근두근' 설렘을 선물합니다. Curiosity-Driven Teaching, Positive
              Impact.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com/hanjiteacher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:contact@hanjiteacher.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-muted-foreground hover:text-primary">
                  연혁
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-muted-foreground hover:text-primary">
                  프로그램
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-primary">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary">
                  문의
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">자료실</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/math" className="text-muted-foreground hover:text-primary">
                  수학 자료
                </Link>
              </li>
              <li>
                <Link href="/resources/coding" className="text-muted-foreground hover:text-primary">
                  코딩 자료
                </Link>
              </li>
              <li>
                <Link href="/resources/lesson-plans" className="text-muted-foreground hover:text-primary">
                  수업 계획서
                </Link>
              </li>
              <li>
                <Link href="/resources/worksheets" className="text-muted-foreground hover:text-primary">
                  학습지
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 한지쌤. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
