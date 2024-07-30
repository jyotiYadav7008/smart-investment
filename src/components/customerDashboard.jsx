import './../App.css';
import './login.css';
import React from 'react';
import HeaderImage from'./../images/rightMove.png';
import GraphImage from'./../images/rightMovegraph.png';

function CustomerDashboard() {

  const handleSubmit = () => {
    window.location.href = "https://www.natwest.com/investments/stocks-and-shares-isa.html#calc";
};

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
                      <h2 className="zb-card-header-title">Accelerate Mortgage Pay off with Stocks and Shares</h2>
                    </header>
                    <div className="zb-card-body ">
                      <p></p>
                      <div className="zb-image">Here's a simple forecast graph illustrating how investment of £750 per month in stocks can accelerate your mortgage pay off by comparing the impact of paying interest in addition with returns on your investment.
                        <p></p><img src={GraphImage} /><p></p></div>
                      {/* <p><a href="https://www.natwest.com/investments/stocks-and-shares-isa.html#calc" target="_blank" rel="noreferrer">Continue with Natwest Stock ISA</a></p> */}
                      <button class="zb-button zb-button-primary " id="otpSubmit" type="submit" onClick={handleSubmit}>
                          <span>Continue with Natwest Stock ISA</span>
                      </button>
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
