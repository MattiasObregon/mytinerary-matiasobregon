import { useRef } from "react"
import { Link as Anchor, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { signin } = user_actions;

export default function FormSignIn() {
  const navigate = useNavigate()
  const mail = useRef("")
  const password = useRef("")
  const dispatch = useDispatch()

  async function handleSignin() {
    let data = {
      mail: mail.current.value,
      password: password.current.value,
    }
    let responseDispatch = dispatch(signin({ data }))
      .then(res => {
        if (res.payload.token) {
          Swal.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          navigate('/')
        } else if (res.payload.messages.length > 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: res.payload.messages.map(each => `<p>${each}</p>`).join('')
          })
        }

      })
  }

  // let user = useSelector(store=>store)
  // console.log(user)

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-[400px]">
        <input
          ref={mail}
          type="text"
          name="mail"
          id="mail"
          placeholder="Mail"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="mb-4 px-3 py-2 border rounded w-full"
        />
        <button
          type="button"
          onClick={handleSignin}
          className="bg-indigo-600 text-white px-3 py-2 rounded w-full"
        >
          Continue
        </button>
        <p className="mt-4">New user?</p>
        <Anchor to="/auth/signup" className="text-indigo-600">
          <p>Sign up</p>
        </Anchor>
      </form>
    </div>
  );
}
