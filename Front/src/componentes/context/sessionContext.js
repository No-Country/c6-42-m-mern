import React, { useState } from 'react';
import Cookie from 'js-cookie';

export const SessionContext = React.createContext({});

const SessionContextProvider = ({ children }) => {
  const [ userInfo, setUserInfo ] = useState(Cookie.get('fsuid') ? JSON.parse(Cookie.get('fsuid')) : null);

  return <SessionContext.Provider value={{
    userInfo,
    setUserInfo
  }}>
    {children}
  </SessionContext.Provider>
};

export default SessionContextProvider;
