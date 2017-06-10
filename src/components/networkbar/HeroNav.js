import React from 'react';
import FontAwesome from 'react-fontawesome';

const HeroNav = (props) => {


  return (
    <div className='hero-nav'>
      <a href='' rel='nofollow'><FontAwesome name='eye' />Following</a>

      { props.loggedIn
      ? <a href=''>Logout</a>
      : <a href=''><FontAwesome name='sign-in' />Login</a> }

      { props.loggedIn
      ? <a href=''>Other</a>
      : <a href=''><FontAwesome name='edit' />Register</a> }

    </div>
  );
}

export default HeroNav;
