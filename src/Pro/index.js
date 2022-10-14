import React, { useState } from 'react';
import Api from '../Api/Api1';
import ReactPaginate from 'react-paginate';
import './ProductApi.css';

function ProductAPI() {
  const useF1 = Api();
  const valuesF = useF1;

  const [pageNumber, setPageNumber] = useState(0);

  const usersperPage = 1;
  const pagesVisited = pageNumber * usersperPage;

  const displayUsers = valuesF.slice(pagesVisited, pagesVisited + usersperPage)
    .map((item) => (
      <ul key={item.id}>
        <li>{item.productName}</li>
        <img src={item.img.sourceUrl} alt=""></img>
      </ul>
    ))

  const pageCount = Math.ceil(valuesF.length / usersperPage);
  const onPageChange = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <div className='list'>
      <h1>APIGRAP</h1>
      <div className='container'>
        {displayUsers}
        <ReactPaginate
          previousLabel={'< Previous'}
          nextLabel={'Next >'}
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </div>
  );
}

export default ProductAPI;