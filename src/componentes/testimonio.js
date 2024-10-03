import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/Emma-testimonio.png')}
        alt='imagen de Emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='texto-testimonio'>Emma Bostian En Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>"Siempre me costó aprender JavaScript. Hice muchos cursos, pero el de freeCodeCamp fue el que me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify".</p>
      </div>
    </div>
  );
}

export default Testimonio