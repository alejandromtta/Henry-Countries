export default function Pagination({ countriesPerPage, totalCountries, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
      i < 10 ? pageNumbers.push("0" + i) : pageNumbers.push(i);
    }
  
    return (
      <nav>
        {pageNumbers &&
          pageNumbers.map((el) => {
            return <button onClick={() => paginate(el)}>{el}</button>;
          })}
      </nav>
    );
  }