import {Card, Image, Icon, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Menu = ({id, category, rating, eateryId}) => {

  const [eateries, setEateries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    getEateries()
  },[])

  const getEateries = async () => {
    try {
      let res = await axios.get("/api/eateries")
      setEateries(res.data)

    } catch (err) {
      console.log(err)
      setError(true)

    } finally{
      console.log ("you made it here... finally!")
      setLoading(false)
    }
  }

const stars = () => {
   for (let i=0; i<rating; i++) {
     return <Icon name='star' />}
}

if (loading) return (
  <Segment>
  <Dimmer active>
    <Loader />
  </Dimmer>
</Segment>

  )
if (error) return <p> Error </p>

  return(
    
    <Card key = {id} style={{margin:"10px", display: "inline-block"}}>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Menu Type: {category}</Card.Header>
    </Card.Content>
    <Card.Meta>
        <span className='date'>Restaurant: {eateries.find((e) => e.id === eateryId).name}</span>
      </Card.Meta>
    <Card.Content extra>
      <a>
       {stars()}
        Rating: {rating}
      </a>
    </Card.Content>
  </Card>
  )

}

export default Menu