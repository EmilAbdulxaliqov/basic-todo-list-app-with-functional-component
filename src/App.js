import React, {useState} from 'react'
import {ListItem, ListItemText, Container, Button, TextField, Stack} from '@mui/material/'

function App() {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([])
  const updateItem = (item) => {
    setNewItem(item)
  }
  const addItem = () => {
    const list = items
    const item = {
      id: new Date().getTime(),
      value: newItem
    }
    list.push(item)
    setItems(list)
    setNewItem('')
  }
  const deleteItem = (id) => {
    const list = items
    const newList = list.filter(item => item.id !== id)
    console.log(list)
    setItems(newList)
  }
  return (
    <div className="App">
      <Container>
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
          <h1>TODO List</h1>
          <ListItem sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            {items.map(item => (
              <React.Fragment key={item.id}>
                <ListItemText>{item.value}</ListItemText>
                <Button onClick={() => deleteItem(item.id)} variant="contained">X</Button>
              </React.Fragment>
            ))}
          </ListItem>
          <TextField onChange={e => updateItem(e.target.value)}sx={{width: 400}}  label="Add Item"/>
          <Button onClick={() => addItem()} sx={{width: 400}} variant="contained">Add item</Button>
        </Stack>
      </Container>
      
      
    </div>
  );
}
// style={{width: '300px'}}
export default App;
