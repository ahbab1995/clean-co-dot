
import React,{ useState } from 'react';

const useAdmin = () => {
   const [admin,setAdmin] = useState()

   return [admin]
};

export default useAdmin;