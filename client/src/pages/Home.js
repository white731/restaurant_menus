import { Container, Header, Card, Image, Icon, PlaceholderParagraph } from 'semantic-ui-react'
import Eateries from '../components/Eateries'
import Menus from '../components/Menus'

const Home = () => {

  return(
 <div>
   <Container styles={{marginTop: "30px", marginBottom: "30px"}}>
     <Header textAlign="center" as="h1">Foodie.com</Header>
   </Container>
   
   <Eateries/>
   <Menus/>  
 </div>
  )

}

export default Home