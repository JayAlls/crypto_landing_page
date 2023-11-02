import HeroSection from './component/HeroSection/HeroSection'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  )
}
