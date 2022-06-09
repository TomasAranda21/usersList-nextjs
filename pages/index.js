import Container from "../Layout/Container"
import Head from 'next/head'
import Users from "../components/Users"

function Home( {users} ) {


  return (
   
    <Container>

      <Head>
        <title>users | Home</title>
      </Head>

      <Users user = {users}/>

    </Container>


  )
}

Home.getInitialProps = async (ctx) => {

  const res = await fetch('https://reqres.in/api/users')

  const data = await res.json()

  return {users : data.data}
}


export default Home
