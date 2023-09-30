//----> Components
import { Header, Menu } from '../components/static'
import { AboutMe, Skills /*Projects*/ } from '../components/section'

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        {/* <Projects /> */}
      </main>
    </>
  )
}
