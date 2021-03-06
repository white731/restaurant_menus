import { useState, useEffect } from "react"
import axios from 'axios';
import Eatery from "./Eatery";
import { Container, Header, Segment, Dimmer, Loader } from "semantic-ui-react";

const Eateries = () => {
  const [eatery, setEatery] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    getEateries()
  },[])

  const getEateries = async () => {
    try {
      let res = await axios.get("/api/eateries")
      setEatery(res.data)
      console.log(res)

    } catch (err) {
      console.log(err)
      setError(true)

    } finally{
      console.log ("you made it here... finally!")
      setLoading(false)
    }
  }



  const renderEateries = () => {
    if (loading) return (
      <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
    
      )
    if (error) return <p> Error </p>

    return eatery.map((e)=>{
      return (
        <>
          <Eatery name={e.name} category={e.category} id={e.id} rating={e.rating}/>
        </>
      )
    })
  }

  return (
    <>
      <Header style={{marginTop: "30px"}} textAlign="center" as="h1">Favorite Restaurants</Header>
      <Container style={{overFlow: 'auto', whiteSpace: 'nowrap', overflowX: "scroll"}}>
      {renderEateries()}
      </Container>
    </>
  )

}

export default Eateries