import React from 'react';
import { Typography, Branding, Illustration, LogoDesign, MotionGraphic, Packaging } from '../assets/img/index.js';


const MySkills = () => {
    return (
        <section className='skill' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='skill-bx'>
                            <h2>What I Do?</h2>

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='container col-12'>
                        <ul className='skill-img'>
                            <li>
                                {/* <img src={LogoDesign} /> */}
                                <h3> Logo Design</h3>
                            </li>
                            <li>
                                {/* <img src={Typography} /> */}
                                <h3> Typography</h3>
                            </li>
                            <li>
                                {/* <img src={Packaging} /> */}
                                <h3> Packaging</h3>
                            </li>
                        </ul>
                        <ul className='skill-img'>
                            <li>
                                {/* <img src={Branding} /> */}
                                <h3> Branding</h3>
                            </li>
                            <li>
                                {/* <img src={Illustration} /> */}
                                <h3> Illustration </h3>
                            </li>
                            <li>
                                {/* <img src={MotionGraphic} /> */}
                                <h3> Motion Graphic</h3>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;