import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInput = () => {
  return (
     <div className="search-input-container d-flex justify-content-center w-100">
          <div className="row justify-content-center ">
              <div className="col-md-5">
                  <div className="input-group me-2 mb-3">
                      <input
                        type="text"
                        className="form-control border-end-0"
                        placeholder="Item Name"
                        aria-label="Item Name"
                      />
                      <span className="input-group-text bg-transparent border-start-0">
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <div className="input-group me-2">
                      <input
                        type="text"
                        className="form-control border-end-0"
                        placeholder="Catalog Name"
                        aria-label="Catalog Name"
                      />
                      <span className="input-group-text bg-transparent border-start-0">
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                      </span>
                  </div>
                </div>
                {/* Search button */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-3">
                <button className="btn btn-warning w-100 mt-0 fw-bold text-white">Search</button>
              </div>
            </div>            
        </div>
  )
}

export default SearchInput