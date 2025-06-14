import Hero from "@/components/hero"
import QuickStats from "@/components/quick-stats"
import Timeline from "@/components/timeline"
import Philosophy from "@/components/philosophy"
import Programs from "@/components/programs"
import NewStart from "@/components/new-start"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <QuickStats />
      <Timeline />
      <Philosophy />
      <Programs />
      <NewStart />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  )
}
