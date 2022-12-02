import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const reset = () => {
    setTitle('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '') {
      return;
    }
    onSubmit(title);
    reset();
    e.target.reset();
  };

  const handleChange = e => {
    setTitle(e.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="input"
          placeholder="Enter film's title"
          onChange={handleChange}
        />
      </label>
      <button type="submit">search</button>
    </form>
  );
};
SearchForm.propTypes = {
  films: PropTypes.func,
};
