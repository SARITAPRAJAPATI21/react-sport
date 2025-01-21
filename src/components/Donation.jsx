import React from 'react'
import '../components/Donations.scss'
import card from '../images/card.png'
import paypal from '../images/paypal.png'
const Donation=()=> {
    return (
     <>
        <div class='Donation'>
       <svg  class='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bisque" 
       fill-opacity="1" d="M0,0L60,53.3C120,107,240,213,360,261.3C480,309,600,299,720,272C840,245,
       960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,
       320C240,320,120,320,60,320L0,320Z"></path></svg>
      
   <div class='heading'>
   <h1>Help them to build</h1><h1>
   their better future</h1>
   </div>

 </div>

 <div class='amount'>
   <div class='pack'> <button class='btn1'> Give Monthly</button>  <button class='btn2'> Give Monthly</button></div>
   <div class='options'>  <button> Choose a Monthly Plan</button></div>
   <div class='dollor1'> <button  class='btn1'> $15</button>  <button> $30</button> <button> $50</button> </div>
   <div class='dollor2'> <button> $75</button>  <button> $100</button> <button> Others</button></div>
 </div>


 <div class='payment'><h6>Your Gift Amount</h6>
 <h1>$15</h1>
 <div class='cards'>
 <img src={card} alt=''/>
 <img src={paypal} alt=''/>
 </div>
 <button class='btn btn-primary'>Continue</button></div>
   
     </>
    );
  }
  
  export default Donation;