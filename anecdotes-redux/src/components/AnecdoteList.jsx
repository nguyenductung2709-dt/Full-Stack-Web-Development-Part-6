import { useSelector, useDispatch } from 'react-redux';
import { selectAnecdotesSortedByVotes, voteAction } from '../reducers/anecdoteReducer'; 

const AnecdoteList = () => {
    const anecdotes = useSelector(selectAnecdotesSortedByVotes);
    const filter = useSelector(state => state.filter);
  
    let filterWord = '';
  
    if (Array.isArray(filter) && filter.length > 0) {
      const filterWords = filter.filter(Boolean); 
      filterWord = filterWords[filterWords.length - 1].toLowerCase();
    }
  
    const filteredAnecdotes = anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filterWord)
    );
  
    const dispatch = useDispatch();
  
    const vote = id => {
      dispatch(voteAction(id));
    };
  
    return (
      <div>
        {filteredAnecdotes.map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default AnecdoteList;
  
