import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import GithubContext from "../../context/github/GithubContext"

const MyUser = () => {

  const { myUser, getMyUser } = useContext(GithubContext)

  useEffect(() => {
    getMyUser()
  }, [])

  const { login, avatar_url } = myUser

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt='Profile image' />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  )
}


export default MyUser