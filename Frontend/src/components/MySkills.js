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
                    <div className='container col-12 d-flex justify-content-center'>
                        <ul className='skill-img'>
                            <li>
                                <img src={LogoDesign} />
                                {/* <img src='./LOGO-DESIGN.webp' /> */}

                                <h3> Logo Design</h3>
                            </li>
                            <li>
                                <img src={Typography} />
                                {/* <img src='./Typography.webp' /> */}

                                <h3> Typography</h3>
                            </li>
                            <li>
                                <img src={Packaging} />
                                {/* <img src='./Packaging.webp' /> */}

                                <h3> Packaging</h3>
                            </li>
                        </ul>
                        <ul className='skill-img'>
                            <li>
                                <img src={Branding} />
                                {/* <img src='./Branding.webp' /> */}

                                <h3> Branding</h3>
                            </li>
                            <li>
                                <img src={Illustration} />
                                {/* <img src='./Illustration.webp' /> */}

                                <h3> Illustration </h3>
                            </li>
                            <li>
                                <img src={MotionGraphic} />
                                {/* <img src='./MOTION-GRAPHIC.webp' /> */}

                                <h3> Motion <br /> Graphic</h3>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;