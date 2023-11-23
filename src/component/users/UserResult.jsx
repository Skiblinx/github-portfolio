import { useContext, useState } from 'react'
import UserResultChild from './UserResultChild'
import Loader from '../layouts/Loader'
import GithubContext from "../../context/github/GithubContext"
import MyUser from './MyUser'
import Pagination from '../layouts/Pagination'



const UserResult = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(6)


  const { loading, users } = useContext(GithubContext)

  // Get current page
  const indexofLastUser = currentPage * usersPerPage
  const indexofFirstUser = indexofLastUser - usersPerPage
  const currentUsers = users.slice(indexofFirstUser, indexofLastUser)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)



  if (!loading) {

    return (
      <>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>


          {(users.length != 0 ? currentUsers.map(user => (
            <UserResultChild key={user.id} user={user} />
          )) : (<MyUser />))}

        </div>

        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
        />
      </>
    )
  } else {
    return <Loader />
  }
}

export default UserResult