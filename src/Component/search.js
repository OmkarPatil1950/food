import React, { useState } from 'react';
import './search.css';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = (product_id) => {
    navigate('/productdetails/' + product_id);
    window.location.reload();
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    fetch(`http://localhost:8080/api/search/${value}`)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  return (
    <div className="search-container ">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="rounded-md px-3 py-2 text-sm w-80"
        value={searchTerm}
        onChange={handleChange}
      />

      {/* Dropdown */}
      {data.length > 0 && (
        <ul className={`dropdown ${data.length > 5 ? 'fixed-dropdown' : ''}`}>
          {data.map((item) => (
            <li
              key={item.p_Id}
              className='hover:cursor-pointer flex'
              onClick={() => handleClick(item.p_Id)}
            >
              <div className='flex'>
              <img className='h-7 w-7' src={item.p_Image}></img>
              <span className='text-black'>{item.p_Name}</span>
            </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
