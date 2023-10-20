import { useEffect, useState } from 'react'
import { fetchUser, fetchOptions } from '../../utils/fetchData'
import Loader from '../layouts/Loader'
const UserResult = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUser('https://api.github.com/users', fetchOptions)

      setUsers(userData)
      setLoading(false)
    }

    fetchUserData()
  }, [])


  if (!loading) {

    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map(user => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>
    )
  } else {
    return <Loader />
  }
}

export default UserResult