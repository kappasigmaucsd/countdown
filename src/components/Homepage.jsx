import React from 'react';
import '../styles/homepage.css'

import Tabs from "./TabGroup";
import Timer from "./Timer";
import crest from '../img/crest.png'
import net from '../img/ks_net_logo-1.png'

class Homepage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Kappa Sigma</h1>
                </div>

                <div className="main">
                    <Tabs>
                        <div label="Homepage">
                            Kappa Sigma, UCSD
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