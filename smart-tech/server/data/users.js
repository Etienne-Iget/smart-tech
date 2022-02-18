import bcrypt from 'bcryptjs';

const users = [
    {
        name:"Admin",
        email:"admin@smart.com",
        password:bcrypt.hashSync("smart-tech",10),
        isAdmin:true
    },
    {
        name:"User",
        email:"user@smart.com",
        password:bcrypt.hashSync("smart-user",10),
       
    }

  ];
  
  export default users;