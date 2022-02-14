import React from 'react'

import { AppSumoPage } from '../styled/AppSumo.styled'

const Appsumo = () => {
  return (
    <AppSumoPage>
        <header>
            <img id='smt-logo' src="./images/SMT logo.svg" alt="" />
            <span className='separator'>&amp;</span>
            <img id='appsumo-logo' src="./images/appsumo-logo.svg" alt="" />
        </header>
        <section>
          <h4>Hello Sumo-lings!</h4>
          <p>
            Please share your AppSumo email and AppSumo redemption code to claim your amazing deal.
          </p>
          <p>
            After your you will be prompted to create your free account where you can access all our amazing products and services.
          </p>
          <p>Thank you for your support!</p>
        </section>
        <form>
            <div className="form-field">
              <label htmlFor="first-name">First Name</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="appsumo-code">AppSumo Code</label>
              <input type="text" />
            </div>
            <div className='form-field'>
              <button>Let's Go</button>
            </div>
        </form>
    </AppSumoPage>
  )
}

export default Appsumo