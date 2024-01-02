import { useSelector, useDispatch } from 'react-redux'
import { selectAnecdotesSortedByVotes } from './reducers/anecdoteReducer'; 
import AnecdoteForm from './components/AnecdoteForm.jsx';


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
      <AnecdoteForm />
    </div>
  )
}

export default App