import { Fragment, useContext } from 'react'
import {Outlet, Link} from 'react-router-dom'

import {ReactComponent  as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async() => {
    await signOutUser();
    setCurrentUser(null)

  }

    return(
        <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
        </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            { //when there is a current user => we render Sign out link
              currentUser ? (
                <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
            
                //if the current user doesn't exists => we render Sign in link
             )
                :(            <Link className='nav-link' to='/auth'>
                Sign IN
            </Link>
            )}

          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation