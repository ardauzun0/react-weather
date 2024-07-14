import React, { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
    } else {
      alert('Lütfen Ülke veya Şehir Adı Giriniz');
    }
  };

  return (
    <form className='first-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Ülke veya Şehir"
      />
      <button type="submit">Hava Durumunu Getir</button>
    </form>
  );
};

export default WeatherForm;
