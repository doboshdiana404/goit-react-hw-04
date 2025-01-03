import { useState } from 'react';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value);
      setValue('');
    }
    if (value.trim() == '') {
      toast.error('Enter text!');
    }
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label className={s.wrap}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <button className={s.icon}>
            <CiSearch />
          </button>
        </label>
      </form>
    </header>
  );
}
