import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import fb from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import instagram from '../assets/social/instagram-white.svg'
import app from '../assets/store/app-store.svg'
import play from '../assets/store/play-store.svg'
import microsoft from '../assets/store/windows-store.svg'

import './footer.css'



export default function Footer() {
    return (
        <>
<footer>
  
 
  <section class="">
    <div class="container">
      <div class="row">
        <div>
          <p>
            Home <span></span> | <span>Terms and Conditions</span> | <span>Privacy Policy</span> | <span>Collection Statement</span> | <span>Manage Account</span> 
          </p>
        </div>
      </div>
    </div>
  </section>
  <h6 className="copyright">
  Copyright © 2021 DEMO Streaming. All Rights Reserved.

  </h6>
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="d-lg-block" style={{marginLeft:'5em'}}>
    <a>
        <img className="social-icon" src={fb} alt="" />
      </a>
      <a >
      <img className="social-icon" src={twitter} alt="" />
      </a>
      <a>
      <img className="social-icon" src={instagram} alt="" />
      </a>
    </div>
    <div class="d-lg-block" style={{marginRight:'5em'}}>
    <a href="">
        <img className="store-icon" src={app} alt="" />
      </a>
      <a href="">
      <img className="store-icon" src={play} alt="" />
      </a>
      <a href="">
      <img className="store-icon" src={microsoft} alt="" />
      </a>
    <div>
    </div>

      
    </div>
  </section>
  
</footer>
        </>
    )
}
