import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/style.css'
import personsignup from '../img/personSignUp.png'
import google from '../img/google.png'




export default function Signup() {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

   const isSigned = true;



    const handlechangefn = (e) => {
        setfname(e.target.value);
    }

    const handlechangeln = (e) => {
        setlname(e.target.value);
    }

    const handlechangeemail = (e) => {
        setemail(e.target.value);
    }

    const handlechangepw = (e) => {
        setpassword(e.target.value);
    }


    return (

        <div className='signupContainer'>
            <nav className='navigation'>
                <div><p>Breathe.</p></div>
            </nav>
            <div className='signupContain'>
                {/* <div className='signupFirstDiv'>

                    <img alt='person signing up' src={personsignup}></img>
                </div> */}
                <div className='signupSecondDiv'>
                    
                    <p className=''>Create an account to save your progress</p>
                    <form className='formDiv'>
                        <input required='required' type='text' onChange={handlechangefn} placeholder='first name'></input>
                        <input required='required' type='text' onChange={handlechangeln} placeholder='last name'></input>
                        <input required='required' type='email' onChange={handlechangeemail} placeholder='email'></input>
                        <input required='required' minLength='7' maxLength='20' type='password' onChange={handlechangepw} placeholder='password'></input>
                        {/* <input required='required' type='submit'></input> */}
                        {
                        isSigned ? (
                            <Link to='/main' className='linkup'>
                                <input className='linkupSubmit' required='required' type='submit'></input>
                            </Link>
                        ) : (
                            <Link to='/signup' className='linkup'>
                                <input required='required' type='submit'></input>
                            </Link>
                        )
                    }

                    </form>
                    <div className='signupGoogleLogo'>
                        <button>
                            
                            <img className='googleImg' src={google} />
                            <span>Sign up with google</span>
                        </button>
                    </div>
                    <div className='signupButLogin'>
                        <p>Have an account?</p>
                        <Link to='/login' className='linkup'>
                            <p className='linkuplogin'>LOG IN</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}