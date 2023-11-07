'use client'
import HeroSection from './component/HeroSection/HeroSection'
import Advantage from './component/Advantage/Advantage'
import styles from './page.module.scss'
import WhitePaper from './component/WhitePaper/WhitePaper'
import Team from './component/Team/Team'
import Roadmap from './component/Roadmap/Roadmap'
import FAQ from './component/FAQ/FAQ'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <Advantage />
      <WhitePaper />
      <Team />
      <Roadmap />
      <FAQ />
    </main>
  )
}
