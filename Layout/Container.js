import Head from 'next/head'

import Navigation from "../components/Navigation"


const Container = ({children}) => {
  return (

    <div>

      <Head>
        <title>Next.js Proyect</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css"/>
      
      </Head>

        <Navigation/>

        <div className="container"> 
            {children} 
        </div>

    </div>
  )
}

export default Container