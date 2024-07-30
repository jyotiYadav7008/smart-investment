import './../App.css';
import React from 'react';
import HeaderImage from'./../images/rightMove.png';
import GraphImage from'./../images/graph.png';

function CustomerDashboard() {
  return (
    <div className="App">
      <div className="zb-banner">
        <img className="zb-image" src={HeaderImage} alt="Natwest Mortgage Dashboard"/>
      </div>
      <div className="zb-content-wrapper" role="main">
        <div className="zb-container ">
          <div className="cd-fma-details cd-default-spacing">
            <section className="zb-section ">
              <div className="zb-columns zb-columns-multiline">
                
                <div className="zb-column-is-12 zb-column-is-mobile-12 zb-column-is-widescreen-6">
                  <section className="zb-card " >
                    <header className="zb-card-header">
                      <h2 className="zb-card-header-title">Pay off faster</h2>
                    </header>
                    <div className="zb-card-body ">
                      <p>Now could be the right time for you to start investment that would give returns and that will be beneficial for your kids (or) repayment of your mortgage.</p>
                      <div className="zb-image"><img src={GraphImage} /></div>
                      <p><a href="https://www.natwest.com/investments/stocks-and-shares-isa.html#calc" target="_blank" rel="noreferrer">Find out more about Stock ISA investment</a></p>
                      <p><a href="https://www.natwest.com/investments/junior-isa.html#calc" target="_blank" rel="noreferrer">Find out more about Junior ISA investment</a></p>
                      <p>powered by Natwest</p>
                    </div>
                  </section>
                </div>
              </div>
            </section>
        </div>
        </div>
      </div>
      
  </div>
  );
}
export default CustomerDashboard;
