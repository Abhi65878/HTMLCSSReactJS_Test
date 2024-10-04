import React from 'react';
import './SocialMediaSection.css';
import Building_img from '/src/assets/Building_img.jpg'; 

const SocialMediaSection = () => {
    return (
        <section className="social-media">
            <div className="header">
                <h1>Have you ever posted any photo on social media?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="content">
                <div className="text-block">
                    <div className="text-item">
                        <h3>Sed ut perspiciatis</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </div>
                    <div className="text-item">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="text-item">
                        <h3>Nemo enim ipsam</h3>
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                    </div>
                </div>
                <div className="image-block">
                    <img src={Building_img} alt="Buildings" />
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;
