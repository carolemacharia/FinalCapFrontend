import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

import IconButton from './IconButton';
import Engagement from './Engagement';
import SocialMediaLinks from './SocialMediaLinks';
import FooterSubscription from './FooterSubscription';
import EmailSubscribeForm from './EmailSubscribeForm';



const LayoutRoute = (props) => {
    
    const [globalState, setGlobalState] = useContext(AppContext);

    const footerStyle = {
        // position: 'absolute',
        // bottom: '0px',
        // left: '0px',
        // width: '100%'
    }

    const logoutUser = () => {
        setGlobalState(
          {
            ...globalState,
            loggedIn: false
          }
        )
      }

    return (
        <React.Fragment>
            <NavBar 
                brand="MPD" 
                links={[
                {
                    label: 'Home',
                    path: '/'
                },
                {
                    label: 'About',
                    path: '/about'
                },
                {
                    label: 'Contact',
                    path: '/contact'
                },

                globalState.loggedIn && 

                {
                    label: 'Report',
                    path: '/report'

                }
                ]}
            >
                { 
                !globalState.loggedIn && 
                <Link to="/login" className="btn btn-secondary">Login/Register</Link>
                }

                { 
                globalState.loggedIn && 
                <>
                    <Link to="/profile" className="btn btn-secondary">Profile</Link>
                    <button onClick={logoutUser} className="btn btn-secondary">Log out</button>
                </>
                }


               
            </NavBar>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <br/><br/>

            <div style={footerStyle}>
                <Engagement>
                    <SocialMediaLinks>
                    <IconButton icon="fa-facebook"/>
                    <IconButton icon="fa-linkedin"/>
                    <IconButton icon="fa-instagram"/>
                    <IconButton icon="fa-youtube"/>
                    </SocialMediaLinks>

                    <FooterSubscription>  
                    <EmailSubscribeForm btnLabel="Subscribe"/> 
                    </FooterSubscription>

                    
                </Engagement>
                <NavBar 
                    brand="MPD" 
                    links={
                    [
                        {
                        label: 'Home',
                        path: '/'
                        },
                        {
                        label: 'About',
                        path: '/about'
                        },
                        {
                        label: 'Contact',
                        path: '/contact'
                        },
                       
                    ]
                    }
                    
                />
            </div>
        </React.Fragment>
    )
}

export default LayoutRoute;