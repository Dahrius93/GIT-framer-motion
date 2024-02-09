import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader'; 

const buttonVariants = {
  /*
  visible: {
    x: [0, -20, 20, -20], // continuerà a spostarsi facendo questo percorso
    transition: { delay: 2 }
  },
  */
  hover: {
    //scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], // tipo yoyo
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255,255)", // obra del testo all'interno
    boxShadow: "0px 0px 8px rgb(255,255,255,255)", // ombra del contorno del tasto
    transition: {
      // yoyo: 10  // yoyo 10 volte
      delay: 0,
      duration: 0.3,
      yoyo: Infinity // yoyo infinito
    }
  }
}
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={ containerVariants } 
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Welcome to Pizza Garage</h2>
      <Link to="/base">
        <motion.button
          variants={ buttonVariants }
          animate= 'visible'
          whileHover='hover'
        >
          Make your pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;

/* CODICE ORIGINALE SENZA ANIMAZIONI
const Home = () => {
  return (
    <div className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <button>
          Create Your Pizza
        </button>
      </Link>
    </div>
  )
}
*/


/* PROVA DI ALCUNE ANIMAZIONI (BIZZARRE) PER CAPIRE IL CONCETTO
const Home = () => {
  return (
    <motion.div className="home container"
      animate={{ rotateZ: 180, opacity: 0.2, marginTop: 200 }}
    >
      <motion.h2 
        animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}
        >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{scale: 1.5}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}
*/