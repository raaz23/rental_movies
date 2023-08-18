const Pagination = (props) => {

  let arr=[];
  let numPage=props.numPage;
  for(let i=1;i<=numPage; i++){
    arr.push(i);
  }

  return (
    <div>
    <div className="col-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {arr.map((el) => (
            <li
              key={el}
              className={`page-item ${props.currPage === el ? "active" : ""}`}
            >
              <a className="page-link" onClick={() => props.handlePageClick(el)} >
                {el}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    </div>
  );
};

export default Pagination;
