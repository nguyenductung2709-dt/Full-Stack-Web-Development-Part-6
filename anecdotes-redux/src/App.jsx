import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, selectAnecdotesSortedByVotes } from './reducers/anecdoteReducer'; // Import the action creator


const App = () => {
  const sortedAnecdotes = useSelector(selectAnecdotesSortedByVotes);
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
      type: 'vote',
      payload: {
        id: id
      }
    })
  }
  
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit = {addAnecdote}>
        <div><input name = "anecdote"/></div>
        <button type = "submit">create</button>
      </form>
    </div>
  )
}

export default App