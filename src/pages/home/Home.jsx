import React from 'react'
import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <h1 className='home__title'>Panel del administrador</h1>
      <section className='home__buttons'>
      <Link className="button" to="/programmer">
        Crear Programación
      </Link>
      <Link className="button" to="/highlight">
        Crear Momento destacado
      </Link>
      </section>
    </div>
  );
}

export default Home