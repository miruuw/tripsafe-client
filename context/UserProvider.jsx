// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Menggunakan null sebagai nilai awal

//   return (
//     <UserContext.Provider
//       value={{ user, setUser }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);

// export default UserProvider;

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    avatar: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;



