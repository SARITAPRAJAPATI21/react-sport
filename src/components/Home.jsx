import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../components/Home.scss';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img5 from '../images/img5.png'


const Home=()=>{
    return(
  <div className='Home' >

 <div class='bgImage'>
 <svg class='waves' xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"><path fill="bisque"
  fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,288C480,299,600,309,720,277.3C840,245,960,
  171,1080,144C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,
  320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

  </div>
 <div class='container'> 
   <h1> Clash court sports</h1>
   <p>Long Island’s Premier Pick-Up Tennis & Pickleball League </p>
   <a class='btn btn-primary mx-3' id='btn1' href='/login'> Join Now</a>
   <a class='btn btn-danger' href='/favq' id='btn2'> FavQ</a>
  </div>



  <div class='container2'>
   <div id='box1'> 
  <h4>Welcome to Clash Court Sports</h4>
   <p>At Clash Court Sports, we are dedicated to providing
      everyone with tennis  and pickleball partners.
        It’s simple…. Register, Connect with
        Opponents, Play and Record Scores.</p>
      <p> Whether you’re a beginner or a
    seasoned player looking to compete, 
    we have something for you.</p>
   <p>Come join us and be a part of our tennis and
    pickleball community. Meet new friends, challenge yourself 
   and have a blast. We can’t wait to see you
    on the courts!</p>
  </div>
  <div id='box2'>
    <div id='img1'> <img  src={img1} alt='img1'/></div>
    <div id='img2'><img src={img2} alt='img2'/></div>
  </div>
  </div>


  <div class='container3'>
    <h4 class='registartion'>Registration</h4>
    <div class='images'>
    <div id='img3'> <h6>Play Singles - $50</h6><a class='btn btn-primary' href='/login'>Register for Spring 2024</a></div>
    <div id='img4'><h6>Play Singles - $50</h6><button class='btn btn-primary'>Register for Spring 2024</button></div>
    <div id='img5'> <h6>Play Singles - $50</h6><button class='btn btn-primary'>Register for Spring 2024</button></div>
   </div>
   </div>


   <div class='container4'>
   <svg  class='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
   <path fill="bisque" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,288C480,299,600,309,720,277.3C840,245,960,171,1080,144C1200,
   117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
   </path></svg>
   <div class='content4'>
   <h4>Giving Back</h4>
   <p>Your contributions play a direct role in maintaining our school’s tennis courts. By donating, you’re ensuring that our students have a well-kept space to develop their skills and love for
     the sport. Your support goes straight to the school, empowering our youth and fostering
    a  community of enthusiastic athletes. Thank you for considering this cause and
    for your invaluable suppor</p>
     <a class='btn' href='/donation' >Donate To A School Of Your Choice</a>
   </div>
   </div>






   <div class='container5'>

    <div class='content1'><h4>How it works</h4>
    <ol><li>Register</li>
    <li>Connect with opponents</li>
    <li>Play</li>
    <li>Record Scores</li></ol></div>

    <div class='content2'>
      <img src={img5} alt='gr'></img>
    </div>
   </div>


   <div class='container6'> 
   <div class='content1'>
   <p>Bringing all Long Island tennis and pickleball players together.</p>
   <p> Hope to see you on the courts</p>
   </div>
   <div class='content2'>– Tribby (Founder)</div>
   </div>


   <div class='container7'>
    <div class='content1'><h1>Contact Us Now</h1>
    <p>Fill out the form below to get in touch with us.
     We are here to answer any questions you may have and provide 
     you with the best tennis experience.
    </p>
    </div>

    <div class='content2'> 
     <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="message" rows="10" ></textarea>
  </div>

  <button class='btn btn-primary'>submit</button>
  </div>
 </div>





   </div>

 


  

    );
     
}
export default Home;