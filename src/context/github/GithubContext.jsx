import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import { fetchUser, fetchOptions } from '../../utils/fetchData'


const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [myUser, setMyUser] = useState({})
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  // Get users
  const fetchUserData = async (text) => {

    setLoading(true)
    const params = new URLSearchParams({ q: text })

    const userData = await fetchUser(`https://api.github.com/search/users?${params}`, fetchOptions)

    // console.log(userData)

    const { items } = userData

    setUsers(items)

    setLoading(false)
  }
  // Get MyUser
  const getMyUser = async () => {

    setLoading(true)

    const myData = await fetchUser(`https://api.github.com/user`, fetchOptions)

    setMyUser(myData)

    setLoading(false)
  }
  // Get single user
  const getUserData = async (login) => {

    setLoading(true)

    const userData = await fetchUser(`https://api.github.com/users/${login}`, fetchOptions)



    if (userData.status === 404) {
      window.location = '/notfound'
    } else {

      setUser(userData)
      setLoading(false)
    }


  }
  // Get repos
  const getRepos = async (login) => {

    setLoading(true)

    const repo = await fetchUser(`https://api.github.com/users/${login}/repos`, fetchOptions)

    setRepos(repo)
    setLoading(false)

  }




  const handleClear = () => {
    setUsers([])
  }

  return <GithubContext.Provider value={{
    user,
    repos,
    users,
    myUser,
    loading,
    getRepos,
    getMyUser,
    getUserData,
    handleClear,
    fetchUserData,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext


GithubProvider.propTypes = {
  children: PropTypes.node.isRequired
}

