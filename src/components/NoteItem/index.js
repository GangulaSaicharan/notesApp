// Write your code here
import {ListItem, H1, P} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, description} = details
  return (
    <ListItem>
      <H1>{title}</H1>
      <P>{description}</P>
    </ListItem>
  )
}

export default NoteItem
