import NavBar from '../components/NavBar';
import FormSignUp from '../components/FormSignUp';
import backgroundImage from '../../public/img/backgroundLog.jpg';

// import { useDispatch } from 'react-redux';
// import users_actions from '../store/actions/users';
// import { useEffect, useState } from 'react';
// import Users from '../components/Users';
// const { read_users }  = users_actions;

export default function SignIn() {
  // const [reload, setReload] = useState(false)
  // const dispatch = useDispatch()
  // useEffect(
  //   () => { dispatch(read_users())},
  //   [reload]
  // )

  return (
    <div className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-10 md:pt-20 lg:pt-[32px] md:pr-10 lg:pr-[218px] md:pl-10 lg:pl-[219px]">
         <NavBar/> 
      </div>

      <div className="flex flex-col items-center justify-center h-full mt-[100px]">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <FormSignUp />
          </div>
      </div>
    </div>
  );
}