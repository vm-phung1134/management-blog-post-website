import { IPaginationNavProps } from "./type";

function PaginationNav(props: IPaginationNavProps) {
  const { currentPage, handleNextPage, handlePrevPage, totalPages } = props;
  return (
    <div className="flex justify-center my-5 mt-auto">
      <div className="btn-group flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className="btn bg-white font-thin normal-case"
        >
          <i className="fas fa-chevron-left"></i> Prev
        </button>
        <button className="btn bg-white text-orange-500">{currentPage}</button>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className="btn btn-md bg-white font-thin normal-case"
        >
          Next <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default PaginationNav;
