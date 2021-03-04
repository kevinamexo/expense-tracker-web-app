import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './PricingCard.css'

function PrincingCard({pricingData}) {

    const price = pricingData.price.toString().split('.'),dollar = price[0]

	const cents = price[1] || "00";
    return (
        <div className="pricing-card">
            <section className="membership-level"> 
                <p>{pricingData.priceDesc}</p>
            </section> 
            <section>
                <h2>
                    <span className="currency_span">{currency}</span>
                    <span className="price-span">{price}</span>
                    <span className="cents-span">{cents}</span>
                </h2>
                <p className="price-desc">{pricingData.priceDesc}</p>

				<p className="price-overview">{pricingData.priceOverview}</p>

				<p className="description">{pricingData.description}</p>

            </section>
            <section>
                <button>
                    {pricingData.tryNow}
                </button>
            </section>
        </div>
    )
}

export default PrincingCard


