import { React, useState } from 'react';
import Login from '../component/login';
import Stock from '../component/stockmanager';
import Cashier from '../component/cashier';


const Home = () => {

    // const isManager

     const [isLoggedIn, setIsLoggedIn] = useState(false)
    //  const [username, setUsername] = useState("");
    //  const [password, setPassword] = useState("");
    //  const [isAdmin, setIsAdmin] = useState(false);

   const showPage = () => {
        if (!isLoggedIn) {
            return (
                <Login onLoginSuccess={() => setIsLoggedIn({ isLoggedIn: true })} />
              );
         }

        // const manager = "manager";
        // const cashier= "cashier";

        //  const userDetails = {
        //     username: { manager : cashier},
        //     password: { manager : cashier }
        //   };

       

        const userDetails = {
          isManager: {
            username: "manager",
            password: "manager"
          },
          isCashier: {
            username: "cashier",
            password: "cashier"
          },
        };

        if (userDetails.isManager) {
            return <Cashier />;
        } else if (userDetails.isCashier) {
            return <Stock />;
        }

        // if (userDetails.isCashier.username === "cashier" && userDetails.isCashier.password === "cashier") {
        //     return <Cashier />;
        //   }
        // if (userDetails.isManager.username === "manager" && userDetails.isManager.password === "manager") {
        //     return <Stock />;
        //   }

      
          

        //    const isManager = userDetails.username === "manager" && userDetails.password === "manager";
        
        //   const isCashier = userDetails.username === "cashier" && userDetails.password === "cashier";

        // if (userDetails.isCashier.username === "cashier" && userDetails.isCashier.password === "cashier") {
        //     return <Cashier />;
        //   }
        //   if (userDetails.isManager.username === "manager" && userDetails.isManager.password === "manager") {
        //     return <Stock />;
        //   } 
          
          


          // if (userDetails.username === "manager" && userDetails.password === "manager") {
        //     setIsAdmin(true)
        // };
        // if (userDetails.username === "cashier" && userDetails.password === "cashier") {
        //     setIsAdmin(false)
        // };

        //  const users = [isCashier, isManager];

        //  function staff () {
        //     users.map(user => user)
        //  }
         
        //  if (isManager) {
        //     return <Stock />;
        //   } 
        //    if (isCashier) {
        //     return <Cashier />;
        //   }
    }

    return (
        <div className="home-page">

        {showPage()}
        
        </div>
    );
}
 
export default Home;
