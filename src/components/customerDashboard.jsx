import './../App.css';
import React from 'react';
import HeaderImage from'./../images/header.png';
import FooterImage from'./../images/footer.png';
import GraphImage from'./../images/graph.png';

function CustomerDashboard() {
  return (
    <div className="App">
      <div className="zb-banner">
        <img className="zb-image" src={HeaderImage} alt="Natwest Mortgage Dashboard"/>
      </div>
      <div className="zb-content-wrapper" role="main">
        <div className="zb-container ">
          <section className="zb-section ">
            <h2 className="zb-heading2 ctHidden">Hello,&nbsp;Abhishek</h2>
            <div className="cd-notification-wrapper">
              <p>Thank you, your mortgage application has been submitted!</p>
            </div>
          </section>
          <div className="cd-fma-details cd-default-spacing">
            <section className="zb-section ">
              <div className="zb-columns zb-columns-multiline">
                <div className="zb-column-is-12 zb-column-is-mobile-12 zb-column-is-widescreen-6">
                  <section className="zb-card cd-fma-accept">
                    <header className="zb-card-header">
                      <h2 className="zb-card-header-title">Your mortgage application</h2>
                    </header>
                    <div className="zb-card-body ">
                      <p>Thank you for choosing NatWest. We’ve received your application.</p>
                      <p className="ctHidden">Your mortgage reference number is <strong>84231402</strong>. You can use this to log in to the tracker that shows your application progress and what you need to do next. 
                      <a href="https://www.tracker.natwest.com/nwb/mortgageapp/tracker/login.jsp" target="_blank" rel="noreferrer">Click here</a>.</p><p>Should we need any further information from you our underwriting team will contact you.</p>
                      <p>Once your mortgage has been approved we will send your mortgage offer to your email.</p>
                    </div>
                  </section>
                </div>
                <div className="zb-column-is-12 zb-column-is-mobile-12 zb-column-is-widescreen-6">
                  <section className="zb-card " >
                    <header className="zb-card-header">
                      <h2 className="zb-card-header-title">Invest a little more and Pay off your Mortgage Early</h2>
                    </header>
                    <div className="zb-card-body ">
                      <p>Now could be the right time for you to start investment that would give returns and that will be beneficial for your kids (or) repayment of your mortgage.</p>
                      <div className="zb-image"><img src={GraphImage} /></div>
                      <p><a href="https://www.natwest.com/investments/stocks-and-shares-isa.html#calc" target="_blank" rel="noreferrer">Find out more about Stock ISA investment</a></p>
                      <p><a href="https://www.natwest.com/investments/junior-isa.html#calc" target="_blank" rel="noreferrer">Find out more about Junior ISA investment</a></p>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            <section className="zb-section ">
            <section className="zb-card " data-cy="fma-feedback-card">
              <header className="zb-card-header"><h2 className="zb-card-header-title">Five minute feedback</h2></header>
              <div className="zb-card-body ">
                <p>Your views are important to us and will help improve the service we provide.</p>
                <p><a href="https://insights.natwest.com/cgi-bin/qwebcorporate.dll?idx=MV6FM4&amp;BRAND=0&amp;CNOTES=New_Mortgage-XO&amp;PRODUCT_1=a%20mortgage&amp;PRODUCT_2=mortgage" target="_blank" rel="noreferrer">Give us your opinion</a></p>
              </div>
            </section>
          </section>
        </div>
        </div>
      </div>
      <div className="zb-banner">
        <img className="zb-image" src={FooterImage} alt="Natwest Mortgage Dashboard"/>
      </div>
  </div>
  );
}

export default CustomerDashboard;
