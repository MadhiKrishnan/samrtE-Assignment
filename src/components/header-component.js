import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeaderComponent  = () => {
    return (
<nav className="navbar navbar-expand-md  smarte_header">
  <a className="navbar-brand smarte_header_logo" href="#">infogen<span className="custom_i">i</span>e<span className="sub_logo">Prospect 360</span></a>

  <button className="manage_link" type="button">
    <FontAwesomeIcon className="mr-2" icon={faSort} />Manage
  </button>

        
</nav>
        
    );
}

export default HeaderComponent;