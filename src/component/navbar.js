import React from "react";

const Navbar = () => {
    const style = {
        color: "#fff",
        backgroundColor:"#f1356d",
        borderRadius:"3px",
        padding: "5px 10px"
    }
    return ( 
        <React.Fragment >
            <header className="navbar">
                <h2>Store <span style={style}>Manager</span></h2>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/store">Store</a>
                    <a href="/history">History</a>
                </div>
            </header>
        </React.Fragment>
     );
}
 
export default Navbar;