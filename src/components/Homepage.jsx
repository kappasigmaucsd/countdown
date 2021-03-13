import React from 'react';
import '../styles/homepage.css'

import Tabs from "./TabGroup";
import Timer from "./Timer";

import crest from '../img/crest.png'
import net from '../img/ks_net_logo-1.png'
import profile from '../img/Circle_Logo.png'
import clip from '../img/Covid_Hype.mp4'

import ig from '../img/ig.png'
import fb from '../img/fb.png'
import yt from '../img/yt.png'

class Homepage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <img src={profile} width="150"/>
                </div>

                <div className="main">
                    <Tabs>
                        <div label="Homepage">
                            <video autoPlay loop muted>
                                <source src={clip} type="video/mp4"/>
                                test
                            </video>
                        </div>
                        <div label="About">
                            Something about  our values blah blah blah
                        </div>
                        <div label="Rush">
                            <Timer/>
                        </div>
                        <div label="Leadership">
                            2020 - 2021 Executive Board
                        </div>
                        <div label="Contact">
                            yes
                        </div>
                    </Tabs>

                    <div className="links">
                        <div className="column">
                            <a href="https://www.instagram.com/kappasigmaucsd/">
                                <img src={ig} width="70"/>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://www.facebook.com/ucsdkappasig/">
                                <img src={fb} width="50"/>
                            </a>
                        </div>
                        <div className="column">
                            <a href="https://www.youtube.com/channel/UCB_P3xornSa5kcIry7kJI5g">
                                <img src={yt} width="65"/>
                            </a>
                        </div>
                    </div>

                </div>

                {/*
                <div className="links">
                    <a href="https://kappasigma.force.com/KS/login">
                        <img src={net} alt="ks net logo" width="150" height="50"/>
                    </a>
                </div>
                   */}

                <div className="footer">
                    <p>Pi-Psi Chapter of</p>
                    <p>Kappa Sigma</p>
                    <img src={crest} alt="Kappa Sigma Crest" width="100" height="150"/>
                    <p>@2021 by Kappa Sigma</p>
                </div>
            </div>
        );
    }
}

export default Homepage;