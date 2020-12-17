import { useState, useEffect } from "react"
import axios from 'axios';
import Menu from "./Menu";
import { Container, Header, Segment, Dimmer, Loader } from "semantic-ui-react";

const Menus = () => {
  const [menus, setMenus] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // const [eateryId, setEateryID] = useState(match.params.id)

  useEffect(()=>{
    getMenus()
  },[])

  const getMenus = async () => {
    try {
      let res = await axios.get(`/api/a/eateries/all_menus`)
      setMenus(res.data)
      console.log(res)

    } catch (err) {
      console.log(err)
      setError(true)

    } finally{
      console.log ("you made it here... finally!")
      setLoading(false)
    }
  }



  const renderMenus = () => {
    if (loading) return (
      <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
      )
    if (error) return <p> Error </p>

    return menus.map((m)=>{
      return (
        <>
          <Menu category={m.category} id={m.id} rating={m.rating} eateryId = {m.eatery_id}/>
        </>
      )
    })
  }

  return (
    <>
      <Header style={{marginTop: "30px"}} textAlign="center" as="h1">Favorite Menus</Header>
      <Container style={{overFlow: 'auto', whiteSpace: 'nowrap', overflowX: "scroll"}}>
      {renderMenus()}
      </Container>
    </>
  )

}

export default Menus