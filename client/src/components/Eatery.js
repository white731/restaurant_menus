import { Container, Header, Card, Image, Icon } from 'semantic-ui-react'

const Eatery = ({id, name, category, rating}) => {

  return(
    
    <Card style={{margin:"10px", display: "inline-block"}}>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Restaurant Name: {name}</Card.Header>
      <Card.Meta>
        <span className='date'>Category: {category}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Rating: {rating}
      </a>
    </Card.Content>
  </Card>
  )

}

export default Eatery