import HeroSection from './component/HeroSection/HeroSection'
import Advantage from './component/Advantage/Advantage'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <Advantage />
    </main>
  )
}
