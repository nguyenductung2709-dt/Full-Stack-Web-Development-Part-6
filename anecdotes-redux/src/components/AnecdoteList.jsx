import { useSelector, useDispatch } from 'react-redux';
import { selectAnecdotesSortedByVotes } from '../reducers/anecdoteReducer'; 

const AnecdoteList = () => {
  const sortedAnecdotes = useSelector(selectAnecdotesSortedByVotes);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch({
      type: 'vote',
      payload: {
        id: id
      }
    });
  };

  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
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
