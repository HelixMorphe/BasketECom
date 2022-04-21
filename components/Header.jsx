import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useSession, signIn, signOut } from 'next-auth/react'
// import Login from '../../pages/login'
function Header() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-row justify-between text-2xl font-normal text-gray-900">
      <div className="text-lg text-gray-900">
        {session && <div>Hi, {session.user.name}</div>}
        <div className="text-base text-gray-500">
          What would you like to buy today?
        </div>
      </div>
      <div className=" flex items-center justify-center rounded-2xl bg-green-600 p-4">
        <LocalMallIcon className="text-2xl text-white" />
      </div>
    </div>
  )
}

export default Header
