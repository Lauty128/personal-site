//----> Components
import { Header, Menu } from '../components/static'
import { AboutMe, Skills, Projects, Contact } from '../components/section'

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
