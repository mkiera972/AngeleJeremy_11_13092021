import React from 'react';

class Footer extends React.Component {
    render() {
        return (       
        <section className="footer">
            <div className="container">
                <div className="footer-logo">
                    <span className="footer-logo-start">K</span> 
                    <svg className="footer-logo-svg" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.641 11.9909L14.9282 4.57488L7.87743 0.490723L0.933472 12.6357L1.0403 24.0284L13.6463 31.4443L14.9282 30.692V19.9442L20.5902 9.94877L26.359 13.2806V24.0284L27.641 23.276V11.9909Z" fill="white"/>
                    </svg>
                    <span className="footer-logo-end">s</span> 
                    <span className="footer-logo-end">a</span> 
                </div>
                <div className="footer-copyrigth">
                    © 2020 Kasa. All rights reserved
                </div>
            </div>
        </section>
        );
    }
}
export default Footer;