import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/notes')
      .then(response => {
        console.log(response.data)
        setNotes(response.data)
      })
      .catch(err => {
        console.log(response)
      })
  }, [])

  const notesToShow = showAll ? notes
  : notes.filter(n => n.important === true)

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleAdd = (event) =>{
    event.preventDefault()
    console.log(event.target)

    //create a note object
    const note = {
      id: notes.length +1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    if(newNote !== '') setNotes(notes.concat(note))
    setNewNote('')
  }

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>Toggle</button>
      <ul>
        {notesToShow.map(note =>
          <li key={note.id}>{note.content}<p>
            {note.date}</p></li>)}
      </ul>

      <form>
        <input value={newNote} onChange={handleChange}/>
        <button onClick={handleAdd}> Add </button>
      </form>
    </> 

  );
}

export default App;
