import React from 'react'
import Header from '../../components/header/header'
import "./SearchScreen.css"
import Footer from '../../components/footer/footer'
import SearchInput from '../../components/searchInput/SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const SearchScreen = () => {
  return (
    <div className='search-container min-vh-100 d-flex flex-column'>
      <Header/>
          {/* Main Content */}
          <div className="main-content text-center p-5 flex-grow-1">
            {/* Search Section */}
            <h2 className="mb-4 mt-4 fw-bolder">Looking for Asset</h2>
            <SearchInput/>
            <hr className='w-100 mt-5'/>
            {/* Popular Search */}
            <h2 className="mt-4 mb-4 fw-bold">Popular Search</h2>
              <div className="container justify-content-center">
                <div className="row w-100">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="col-6 col-md-4 col-lg-2 d-flex justify-content-center mb-3">
                      <button
                        className="btn-style btn btn-outline-dark rounded-pill d-flex align-items-center bg-warning-subtle"
                      >
                        <span className="me-2"><FontAwesomeIcon icon={faSearch}/></span> Item {index + 1}
                      </button>
                    </div>
                    ))}
                </div>
              </div>
                <hr/>
                </div>
                {/* footer */}
              <Footer/>
    </div>
  )
}

export default SearchScreen
