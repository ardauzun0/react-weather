import React from 'react';

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h3 className='weatherName'>{weather.name}</h3>
      <p>Anlık Bilgiler</p>
      <table id='weatherTable'>
        <tbody>
          <tr>
            <td className='tableTitle'>Koordinatlar</td>
            <td>[{weather.coord.lat}, {weather.coord.lon}]</td>
          </tr>
          <tr>
            <td className='tableTitle'>Sıcaklık</td>
            <td>{weather.main.temp}°C</td>
          </tr>
          <tr>
            <td className='tableTitle'>Hava Durumu</td>
            <td>{weather.weather[0].description}</td>
          </tr>
          <tr>
            <td className='tableTitle'>En Düşük Sıcaklık</td>
            <td>{weather.main.temp_min}°C</td>
          </tr>
          <tr>
            <td className='tableTitle'>En Yüksek Sıcaklık</td>
            <td>{weather.main.temp_max}°C</td>
          </tr>
          <tr>
            <td className='tableTitle'>Rüzgar Yönü</td>
            <td>{weather.wind.deg}°</td>
          </tr>
          <tr>
            <td className='tableTitle'>Basınç</td>
            <td>{weather.main.pressure} hPa</td>
          </tr>
          <tr>
            <td className='tableTitle'>Görüş</td>
            <td>{weather.visibility / 1000} km</td>
          </tr>
          <tr>
            <td className='tableTitle'>Rüzgar Hızı</td>
            <td>{weather.wind.speed} m/s</td>
          </tr>
          <tr>
            <td className='tableTitle'>Nem</td>
            <td>{weather.main.humidity}%</td>
          </tr>
        </tbody>
      </table>
      {/* Google Maps */}
      <iframe
        title='weatherMap'
        width='100%'
        height='300'
        frameBorder='0'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
        src={`https://maps.google.com/maps?q=${weather.coord.lat},${weather.coord.lon}&output=embed`}
      />
      <a className='button' href={`https://www.google.com/maps/place/${weather.coord.lat},${weather.coord.lon}`} target='_blank' rel='noreferrer'>
        Konumu Google Maps'te Görüntüle
      </a>
    </div >
  );
};

export default WeatherInfo;