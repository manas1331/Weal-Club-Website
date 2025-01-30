import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h1 className='section__title' id="about">About Us</h1> {/* Removed extra class for styling consistency */}
                <p className='para__text text__grey'>
                    WEAL empowers students to address health issues, becoming “Agents of Change” by promoting healthy habits within their communities. 
                    In Summer 2023, Team Weal completed a Mental Health series covering topics like therapy, mental illness, and managing emotions. 
                    We also hosted Vivacity '23—a health fest with activities for all ages, including a panel with Ekta Dixit, Rida Tharana, Tanny Bhattacharjee, and Anjana Thattil. 
                    Additionally, WEAL also organized three hackathons: 
                    HEAL-O-CODE in February 2023 at PESU EC Campus, the first health hackathon on campus, 
                    Health-Hack in September 2022 at PESU RR campus, 
                    Health-Hack 2.0 in February 2024 at PESU RR campus aimed at innovative healthcare solutions.
                </p>
            </div>
        </div>
    </div>
)

export default AboutUs;
