import { createSlice } from '@reduxjs/toolkit';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers: {
    voteAction: (state, action) => {
      const id = action.payload;
      const anecdoteToVote = state.find(anecdote => anecdote.id === id);
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1;
      }
    },
    createAnecdote: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    }
  }
})

export const selectAnecdotesSortedByVotes = (state) => {
  return [...state.anecdotes.slice().sort((a, b) => b.votes - a.votes)];
};

export const { voteAction, createAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
