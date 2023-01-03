import React,{ useState } from 'react'
import './basicForm.css'; 

export const BasicForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      if (!validateForm()) {
        setError('Email and password are required');
        return;
      }
      // Add code to submit the form here
    }
  
  return (
    <>
    <div className="basicForm">
      <div className='main-container-fluid'>
        <div className='sub-main'>
          
          <form onSubmit={handleSubmit}>
              <div className="row">
            <div className="col-7 mx-auto mt-5">
            <img className="img-fluid rounded-circle" src="/assets/images/logo3.png"></img>
            </div>
          </div>
          <br/>
          <br/>
                <div className='mb-1 row '>
                <div class="input-group mb-3 rounded-4 mt-1">
                      {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic"></img></span>     */}
                      <input type="text" class="form-control col rounded-pill" placeholder="Username@mjcollege.ac.in" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    

                </div>

                <div className='mb-1 row'>
                <div class="input-group mb-3 rounded-4 mt-1">
                      {/* <span className="input-group-text" id="basic-addon1"><img className="img-fluid userpic" src="/assets/images/user icon.jfif"></img></span>     */}
                      <input type="password" class="form-control col rounded-pill" placeholder="Password" aria-label="password" aria-describedby="basic-addon1"/>
                    </div>
                   
                </div>
                <div >
                  <button type="submit" className="btn btn-info py-2">Login</button>
                  <br/>Don't have account?<a href="/Signup">  Register</a>
                  <br />
                  <div className='d-grid d-md-block'>
                    <button className="btn btn-secondary btn-sm h-25"  >
                        <a className="nav-link" href='/home'>HOME</a>
                    </button>
                 </div>
                  
                </div>
               
          </form>
          
       </div> 
      </div>
      </div>
    </>
  )
}

export default BasicForm;

