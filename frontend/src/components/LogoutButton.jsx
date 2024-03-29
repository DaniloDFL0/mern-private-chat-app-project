import { BiLogOut } from "react-icons/bi"
import useLogout from "../hooks/useLogout"

const LogoutButton = () => {
  const { isLoading, logout } = useLogout()

  return (
    <div className="mt-auto">
      {!isLoading ? (
        <BiLogOut onClick={logout} className="w-6 h-6 text-white cursor-pointer"/>
      ) : (
        <span className="loading loading-spinner loading-sm"></span>
      )}
    </div>
  )
}

export default LogoutButton