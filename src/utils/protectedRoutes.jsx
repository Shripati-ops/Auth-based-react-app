import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const ProtectedRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const checkIsUserLoggedIn = () =>{
    if (!isLoggedIn) {
      setIsLoggedIn(false);
      return navigate('/login');
    } else {
      setIsLoggedIn(true);
    }
  }

    useEffect(() => {
      checkIsUserLoggedIn();
    }, [isLoggedIn]);


    return (<Fragment>{isLoggedIn ? props.children : null}</Fragment>);
  }


