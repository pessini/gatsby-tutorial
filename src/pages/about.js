// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle='About me'>
        <p>I'm the proud <b>creator</b> of this <Link to='/'>site</Link>, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage