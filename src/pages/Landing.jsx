import React, { useEffect } from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';

const Landing = ({ buttonClicked, setButtonClicked }) => {
    useEffect(() => {
        console.log(buttonClicked);
    }, [buttonClicked])
    return (
        <div className='text-black'>
            {
                buttonClicked == "Login" ? <Login /> : buttonClicked == "Signup" ? <Signup /> :
                    <>EmptyPage</>
            }
        </div>
    )
}

export default Landing