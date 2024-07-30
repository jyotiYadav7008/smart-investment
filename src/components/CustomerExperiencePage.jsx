import './../App.css';
import React from 'react';
import HeaderImage from'./../images/header.png';
import FooterImage from'./../images/footer.png';
import CustomerExperienceImage from'./../images/customerExperiencePage.png';

function CustomerExperiencePage() {
  return (
    <div className="App">
      <div className="zb-banner">
        <img className="zb-image" src={HeaderImage} alt="Natwest Mortgage Dashboard"/>
      </div>
      
    <section className="zb-section ">
        <div className="zb-columns zb-columns-multiline">
        <img className="zb-image" src={CustomerExperienceImage} alt="Natwest Customer Journey"/>
        </div>
    </section>
        
    <div className="zb-banner">
        <img className="zb-image" src={FooterImage} alt="Natwest Mortgage Dashboard"/>
    </div>
  </div>
  );
}

export default CustomerExperiencePage;
