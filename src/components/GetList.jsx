import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Search from "./Search";
import errorImage from "../assets/error.svg"

const GetList = () => {
  const [retreats, setRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 3;

  const dateRanges = {
    "2023-2024": [1672531199, 1704067199], 
    "2024-2025": [1704067200, 1735689599], 
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=${itemsPerPage}`;

    if (filters.type) {
      url += `&filter=${filters.type}`;
    }
    if (searchTerm) {
      url += `&search=${searchTerm}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format");
      }

      let filteredData = data;

      if (filters.date) {
        const [startDate, endDate] = dateRanges[filters.date];
        filteredData = data.filter((retreat) => {
          const retreatDate = parseInt(retreat.date, 10);
          return retreatDate >= startDate && retreatDate <= endDate;
        });
      }

      setRetreats(filteredData);

      if (filteredData.length < itemsPerPage) {
        setTotalPages(currentPage);
      } else {
        setTotalPages(currentPage + 1);
      }
    } catch (err) {
      setError(err.message);
      setRetreats([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // console.log(`Effect: Fetching data for page ${currentPage}`);
    fetchData();
  }, [currentPage, filters, searchTerm]);

  //   useEffect(() => {
  //     console.log(`Current Page: ${currentPage}`);
  //   }, [currentPage]);


  return (
    <div className="mb-16 lg:mb-4">
      <div className="flex lg:flex-row flex-col gap-4 p-4 w-full justify-between">
        <Filter onFilter={setFilters} />
        <Search onSearch={setSearchTerm} />
      </div>
      {error ? (
        <div className="flex w-full items-center justify-center">
            <img src={errorImage} alt={error} className="size-3/5 lg:size-2/5"/>
        </div>
      ) : (
        <>
          {loading ? (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
                {retreats.map((retreat) => (
                  <Card key={retreat.id} retreat={retreat} />
                ))}
              </div>
              <div className="flex flex-row gap-4 justify-center items-center mt-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="p-2 bg-primary rounded-full lg:rounded-lg text-white font-medium disabled:opacity-80"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentPage >= totalPages}
                  className="py-2 px-4 bg-primary rounded-full lg:rounded-lg text-white font-medium disabled:opacity-80"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="shadow-md rounded-lg bg-secondary p-4">
      <div className="animate-pulse flex flex-col">
        <div className="rounded-md opacity-50 bg-amber-400 h-48 w-full lg:w-3/5"></div>
        <div className="mt-2 rounded opacity-50 bg-amber-600 h-4 w-4/5"></div>
        <div className="mt-2 rounded opacity-50 bg-amber-500 h-3 w-4/5"></div>
        <div className="mt-2 rounded opacity-50 bg-amber-500 h-3 w-2/5"></div>
        <div className="mt-2 rounded opacity-50 bg-amber-500 h-2 w-3/5"></div>
        <div className="mt-2 rounded opacity-50 bg-amber-500 h-2 w-3/5"></div>
        <div className="mt-2 rounded opacity-50 bg-amber-500 h-2 w-3/5"></div>
      </div>
    </div>
  );
};


export default GetList;
