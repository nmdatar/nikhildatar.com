import React from 'react';
import Hero from '../components/Hero/Hero';
import './Home.css';
import '../App.css';


function Home() {
  return (
    <>
      <Hero />

      <div style={{textAlign: 'center', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
        <p>hey there, i'm Nikhil Datar!</p>

        <p>i'm a sophomore at Harvard studying computer science</p>

        <p>currently, i'm working on chest x-ray interpretation research using deep learning @ HMS</p>

        <p>i'm also an analyst @ Harvard Consulting and US-China AI associate @ Harvard Foreign Policy</p>

        <p> in my free time, you can find me playing chess, making Spotify playlists, and taking late-night walks</p>

        <div>
          <br></br>
          <p>find me anywhere below!</p>
          <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <a className='portfolio' href='https://www.linkedin.com/in/nikhil-datar/'><i class="fa-brands fa-linkedin"></i></a>
            <a className='portfolio' href='https://twitter.com/ndatar18'><i class="fa-brands fa-square-twitter"></i></a>
            <a className='portfolio' href='https://github.com/nmdatar'><i class="fa-brands fa-square-github"></i></a>
            <a className='portfolio' href='mailto:ndatar@college.harvard.edu'><i class="fa-solid fa-square-envelope"></i></a>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Home