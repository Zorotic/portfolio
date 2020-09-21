import { Heading } from 'theme-ui';
import Header from '../components/Header'

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
    </div>
  )
}
