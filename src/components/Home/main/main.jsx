import React from 'react';
import styles from './main.module.css';
import photo from "../../../assets/Ellipse 1.png";
import icon from "../../../assets/ghost.png";
import { Link } from 'react-scroll';
import gith from '../../../assets/github.png';

import discord from '../../../assets/discord.png';



const Main = () => {
    return (
        <div>
        <div className="Container">

            <div className="Me">
                <h2>Hello I'm</h2>
                <div className="com">
                <h1 className="name">DJEBBAR Zakaria</h1>
                </div>
                <p>a 19 years old , Computer Science Student </p>


            </div>
            <img src={photo} alt="tswirti" className="tswira"/>
            



        </div>

        <h1 className="Social">Socials</h1>
            <div className="SocialMedia">
                <a href="https://github.com/Zed-913" target="_blank" class="haw">
                    <img src={gith} alt="GitHub" class="LOGOS"/>
                    <h1 className="zz">Github</h1>
            </a>

            <div className="haw2">
                <img src={discord} alt="Discord Logo" className="LOGOS"/>
                <h1 className="ele">Discord</h1>

            </div>
            </div>
        </div>
    )
}

export default Main;




