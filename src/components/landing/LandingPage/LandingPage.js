import React from 'react'

import webIcon from "../../../images/web-dev-icon.png";
import NewsLetter from '../NewsLetter/NewsLetter'
import { LandingPageStyles } from './LandingPageStyles'
import { CountDown } from '../../Countdown/countDown';

export const LandingPage = ({site})=>  {
     return (
      <LandingPageStyles>
         <div className='landing-page__container'>
            <h1 className='landing-page__title'> {site.siteMetadata.landingPageTitle} </h1>
            <img className="landing-page__image" src={webIcon} alt="Web Dev"/>
            <p className="landing-page__description">
               {site.siteMetadata.landingPageDes}
            </p>
            <NewsLetter />
            <CountDown />
         </div>
      </LandingPageStyles>
   )
}

export default LandingPage
