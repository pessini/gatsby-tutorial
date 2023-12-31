// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const HomePage = () => {
  return (
    <main>
      <Layout pageTitle='Home Page'>
        <p>Hey there! I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></StaticImage>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default HomePage