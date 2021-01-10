import React from 'react';

const Pagination = ({ cardsPerPage, totalPosts, paginate,isDeafultPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="page">
        {pageNumbers.map(number => (
          <li key={number}>
            <a className={(isDeafultPage===true)&&(number===1)?'active':''} onClick={(e) => paginate(number,e.preventDefault())} href='!#'>
              {number}
              {/* e.preventDefault() 記得取消 a 連結的預設行為 */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
