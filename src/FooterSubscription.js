import React from 'react';

const FooterSubscription = (props) => {
    return (
        <div className="container text-right text-light">
            <p>Get an email notification as soon as someone you searched for has been found.</p>
            {props.children}
        </div>
    )
}

export default FooterSubscription;