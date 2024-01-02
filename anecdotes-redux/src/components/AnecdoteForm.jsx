import { createAnecdote } from "../reducers/anecdoteReducer"; 
import { setMessage} from "../reducers/notificationReducer"; 
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setMessage(`you created anecdote ${content}`)) 
  }

  return(
  <> 
  <h2>create new</h2>
  <form onSubmit = {addAnecdote}>
    <div><input name = "anecdote"/></div>
    <button type = "submit">create</button>
  </form>
  </>
)
}

export default AnecdoteForm