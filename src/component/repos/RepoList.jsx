import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import { useState } from 'react'
import Pagination from '../layouts/Pagination'

function RepoList({ repos }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(5)

  // Get current page
  const indexofLastRepo = currentPage * usersPerPage
  const indexofFirstRepo = indexofLastRepo - usersPerPage
  const currentRepos = repos.slice(indexofFirstRepo, indexofLastRepo)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)




  return (
    <>
      <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className='card-body'>
          <h2 className='text-3xl my-4 font-bold card-title'>
            Repositories
          </h2>
          {currentRepos?.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={repos.length}
        paginate={paginate}
      />
    </>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}


export default RepoList