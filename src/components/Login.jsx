
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../components/Login.scss'

const Login =()=>{
    return<>
       <div class='container1'>
       <svg  class='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="bisque" 
       fill-opacity="1" d="M0,0L60,53.3C120,107,240,213,360,261.3C480,309,600,299,720,272C840,245,
       960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,
       320C240,320,120,320,60,320L0,320Z"></path></svg>
 </div>

<div class='login'>
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address <span>*</span></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password <span>*</span></label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>


    </>
}
export default Login;