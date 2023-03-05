import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import '../css/style.css'
import personsignup from '../img/personSignUp.png'
import google from '../img/google.png'





export default function Login() {


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const handlechangeemail = (e) => {
        setemail(e.target.value);
    }

    const handlechangepw = (e) => {
        setpassword(e.target.value);
    }

    const isSigned = true;

    return (

        <div className='signupContainer'>
            <nav className='navigation'>
                <div><p>Breathe.</p></div>
            </nav>
            <div className='signupContain'>
                <div className='signupFirstDiv'>
                    <img alt='person signing up' src={personsignup}></img>
                </div>

                <div className='signupSecondDiv loginSecondDiv'>
                    <p className=''>Create an account to save your progress</p>
                    <form className='formDiv'>
                        <input required='required' type='email' onChange={handlechangeemail} placeholder='email'></input>
                        <input required='required' minLength='7' maxLength='20' type='password' onChange={handlechangepw} placeholder='password'></input>
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

                    <div className='dividingBorder'><span>or</span><hr></hr></div>

                    <div className='signupGoogleLogo '>
                        <button>
                            <img className='googleImg' src={google} />
                            <span >Sign in with google</span>
                        </button>
                    </div>

                    <div className='signupButLogin'>
                        <p>No account?</p>
                        <Link to='/signup' className='linkup'>
                            <p className='linkuplogin'>SIGN UP</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}