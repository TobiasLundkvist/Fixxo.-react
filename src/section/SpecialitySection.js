import React from 'react'

function SpecialitySection() {
  return (
    <section>
        <div className="container gradient-gray">
            <div className="speciality-background">
                <h2 className="speciality-title">Our Speciality</h2>
                <div className="speciality-body">
                    <div className="speciality-text">
                        <div className="speciality-info">
                            <h3>Track Your Order</h3>
                            <a href="#">Get Started {'>'}</a>
                        </div>
                        <div></div>
                    </div>
                    <div className="speciality-text">
                        <div className="speciality-info">
                            <h3>Make a Return</h3>
                            <a href="#">Get Started {'>'}</a>
                        </div>
                        <div></div>
                    </div>
                    <div className="speciality-text">
                        <div className="speciality-info">
                            <h3>Request a Price Adjustment</h3>
                            <a href="#">Get Started {'>'}</a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialitySection