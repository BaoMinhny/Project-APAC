import React from 'react'

const SocialButton = () => {
  return (
        <div className="justify-content-between">
            <div className="d-flex flex-column align-items-center m-0">
              {/* Apple button */}
                  <button className="btn btn-outline-dark d-flex align-items-center w-100 mb-2 mt-1 p-2">
                  <img
                        src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                        alt="Apple"
                        className="me-5 ms-2"
                        style={{ height: "20px" }}
                      />
                    Continue with Apple
                  </button>
              {/* Google button */}
                  <button className="btn btn-outline-warning d-flex align-items-center w-100 mb-2 mt-1 p-2">
                  <img 
                        src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                        alt="Google"
                        className="me-5 ms-2"
                        style={{ height: "20px" }}
                      />
                      Log in with Google
                  </button>
              {/* Facebook button */}
                  <button className="btn btn-outline-primary d-flex align-items-center w-100 mb-2 mt-1 p-2">
                  <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        alt="Facebook"
                        className="me-5 ms-2"
                        style={{ height: "20px" }}
                      />
                      Log in with Facebook
                  </button>
            </div>
      </div>
  )
}

export default SocialButton