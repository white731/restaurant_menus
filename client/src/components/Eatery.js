import {Card, Image, Icon } from 'semantic-ui-react'

const Eatery = ({id, name, category, rating}) => {

const stars = () => {
   for (let i=0; i<rating; i++) {
     return <Icon name='star' />}
}

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
       {stars()}
        Rating: {rating}
      </a>
    </Card.Content>
  </Card>
  )

}

export default Eatery