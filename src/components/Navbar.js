import React from "react";
import './style.scss'

class Navbar extends React.Component {

    render() {
      return <nav>
        <h4>Rekomendasi toko shopee dan tokopedia</h4>
        <a href="/">
            <button>Home</button>
        </a>
      </nav>;
    }
  }

  export default Navbar;