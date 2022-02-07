import React from 'react';
import ParticlesBg  from "particles-bg";
import ReactJsTyping from 'reactjs-typing-effect';
import 'animate.css/animate.min.css';

const Header = ({ data }) => {

    if(data){
       var project = data.projects;
       var github = data.github;
      var name = data.name;
      var networks= data.social.map(network => {
         return <li key={network.name}>
           <a href={network.url}><i className={network.className}></i></a>
           </li>
       })
    }

    const listOfString=['Happy Frontend Engineer', 'Problem Solving Expert']

    return (
      <header id="home">
      <ParticlesBg type="thick" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div style={{ fontSize: 30, color: '#ffffff'}} className="banner-text animate__animated animate__bounceIn">
            <img className='responsive-headline' src='/images/hng-brand-logo.png' alt='HNG Brand Logo' />
            <h1 className="responsive-headline">{name}</h1>
            <ReactJsTyping StringList={listOfString} speed={900}/>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Resume</a>

               <div className="row">
               <div className="twelve columns">
               <ul className="social-links">
                  {networks}
               </ul>
               </div>
            </div>
            </ul>
          
         </div>
      </div>
      

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
}

export default Header;
