import React from 'react';
import AppBar from '../Home/components/appBar'
import Hero from '../../components/Hero/Hero'
import Footer from '../Home/components/footer';
import A_Card from './components/A-Card/A-Card';
import A_Grid from './components/A-Listing/A-Grid';

const SearchPage = () => {
    return (
        <div>
            <AppBar />
            <Hero />
            <section>
                <div>
                    <div>
                        <h2>More About Us</h2>
                        <p>With over a million agents from all the top brokerages, a local agent knows your market and can guide you through the process from start to finish</p>
                    </div>
                    <div className="agent-grid-wrapper">
                        <A_Grid />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SearchPage;
