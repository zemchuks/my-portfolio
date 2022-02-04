import React from 'react';

const Footer = ({ data }) => {

    if(data){
      var networks= data.social.map(network => {
        return <li key={network.name}>
          <a href={network.url}><i className={network.className}></i></a>
          </li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright" style={{ color: 'white'}}>
              <li>&copy; Copyright 2021 Benson</li>
              <li>Design by <a title="Styleshout" href="https://www.linkedin.com/in/bruno-ezemba-0bb302170/" style={{ color: 'white'}}>Benson Madueke</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    )
  
}

export default Footer;
