import React from 'react';
import './component.css';
import Navbarr from './Navbarr';



function LandingPage() {
    return (
        
        <div className='mainPage'>
            <Navbarr/>
            <div className='welcome-section'>
                <div className='welcome-message'>
                    <h1>Welcome to RDGN!</h1>
                    <p>This is a test to better understand how to manipulate my page to make it look more presentable for you! </p><br />
                    <p>Please Stay Tuned for further Modifications on my Github or By Following our Website and<span> Enjoy My journey with me! </span> </p>
                </div>
                <div className='news-side'>
                    Here I will be testing all the possible ways on how to present the news in a more modern way!
                    <ul>
                        <li>News 1</li>
                        <li>News 2</li>
                        <li>News 3</li>
                        <li>News 4</li>
                        <li>News 5</li>
                    </ul>
                </div>
            </div>
            <div className='portfolio-section'>
                <div className='powerbi-portfolio'>
                    here we will be adding a real-time Power BI that will show Our work
                </div>
            </div>
            <div className='video-section'>
                <div className='video-container'>
                We will be adding a video here. Still to be determined!
                </div>
            </div>
            <div className='links-section'>
                <button>consultants</button>
                <button>EINA</button>
                <button>Intra Bank</button>
            </div>
        </div>
    )
}

export default LandingPage