import React from 'react';
import AnecdoteForm from './components/AnecdoteForm.jsx';
import AnecdoteList from './components/AnecdoteList.jsx';
import Filter from './components/Filter.jsx';
import Notification from './components/Notification.jsx';
import { useSelector } from 'react-redux';

const App = () => {
  const notification = useSelector(state => state.notification);

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && notification.message && <Notification />} 
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
