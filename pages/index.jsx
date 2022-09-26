import { Heading } from 'theme-ui';
import Footer from '../components/Footer'

export default function Home() {
	return <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
				<Heading as='h1' id="heading" sx={{ textAlign: 'center' }}>Zorotic</Heading>
				<h4 id="heading2" as='h4' sx={{ textAlign: 'center', marginTop: 2}}>
				{"<"} 21 years old, He/Him, Hobbyist interested in making scalable/realtime applications. {"/>"}
				</h4>
				<br/>
				<Footer/>
			</div>
		</div>
}
