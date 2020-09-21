import { Heading, Container, Card, Text } from 'theme-ui';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from '../components/Project'

export default function Home() {
  return (
    <div>
      <Header/>
      <Heading as='h1' id="heading" sx={{
        textAlign: 'center'
      }}>Zoro</Heading>
      <Heading as='h4' sx={{ textAlign: 'center', marginTop: 2}}>
        Full Stack Developer - Software Engineer
      </Heading>
      <Heading className="about" as='h4' sx={{ textAlign: 'center', marginTop: 2}}>
        CTO, Co-Owner, Lead Developer, Maintainer.<br/>
        CTO & Co-Owner for Plexi Development.<br/>
        Lead Developer & Maintainer for Server Captcha Bot.
      </Heading>
      <Heading id="projects-heading" as='h2' sx={{
        paddingTop: 50,
        textAlign: 'center'
      }}>Projects</Heading>
      <Container className="projects">
        <Project title="Server Captcha Bot" description="Verification for your Discord Server done right." lore="Check it out!" url="https://github.com/captcha-bot"/>
        <Project className="project-middle" title="Server Captcha Bot" description="Verification for your Discord Server done right." lore="Check it out!" url="https://github.com/captcha-bot"/>
        <Project title="Server Captcha Bot" description="Verification for your Discord Server done right." lore="Check it out!" url="https://github.com/captcha-bot"/>
      </Container>
      <Footer/>
    </div>
  )
}
