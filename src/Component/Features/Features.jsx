import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <div className="features-header">
                <h1>Snap photos and share like never before</h1>
            </div>
            <div className="features-grid">
                <div className="feature-item">
                    <h3>Sed ut perspiciatis</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <button className="learn-more">Learn more</button>
                </div>
                <div className="feature-item">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="learn-more">Learn more</button>
                </div>
                <div className="feature-item">
                    <h3>Nemo enim ipsam</h3>
                    <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                    <button className="learn-more">Learn more</button>
                </div>
                <div className="feature-item">
                    <h3>Tempor incididunt</h3>
                    <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                    <button className="learn-more">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default Features;
