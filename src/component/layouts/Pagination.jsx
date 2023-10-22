import { PropTypes } from 'prop-types'

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <nav>

      <ul className='flex flex-row gap-8 mt-9 justify-center mx-auto'>
        {pageNumbers.map(number => (
          <li key={number} className=''>
            <p onClick={() => paginate(number)} className='btn btn-circle cursor-pointer text-xl'>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};



Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  totalUsers: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
};


export default Pagination;
