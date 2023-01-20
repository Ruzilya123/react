import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Routing() {

  return (
    <div>
        <Link>
            Womazing
        </Link>
        <ul>
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="*">Not Found</NavLink></li>
        </ul>
        {/* <div>
                <Routes>
                    <Route path="/" element={<Main />}  />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div> */}
        
        
    </div>
  )
}

export default Routing