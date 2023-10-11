// import React, { useState } from "react";
// import Assets1 from "./assets/Assets1.png";
// import Assets2 from "./assets/Assets2.png";
// import { Link } from "react-router-dom";

// import Text from "../components/Text";

// export const Home = () => {
//   const [input, setInput] = useState("");

//   return (
//     <section>
//       <nav className="navbar container">
//         <div className="logo">
//           <h1>DosenKu</h1>
//         </div>
//         <div className="navList">
//           <div className="button btn-1">
//             <Link to={"/signup"}>Sign up</Link>
//           </div>
//           <div className="button btn-2">
//             <Link to={"/login"}>
//               <p>Login</p>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <header className="container">
//         <div className="contentContainer">
//           <h1>
//             Find any <br />
//             University <br />
//             Lecture here
//           </h1>
//           <h4>
//             <span>We'll</span> help you find any Lecturer <br />
//             Here
//           </h4>
//           <div className="searchContainer">
//             <form className="searchBar">
//               <input
//                 type="text"
//                 placeholder=" Type a lecturer name..."
//                 value={input}
//                 onChange={(e) => {
//                   setInput(e.target.value);
//                 }}
//               />
//             </form>
//             <button className="button btn-2">
//               <p>Find Now</p>
//             </button>
//           </div>
//         </div>
//         <div className="assetContainer">
//           <img src={Assets1} alt="foto1" />
//         </div>
//       </header>

//       <div className="content-1 container">
//         <div className="img-container">
//           <img src={Assets2} alt="foto2" />
//         </div>
//         <div className="carouselContainer">
//           <Text />
//         </div>
//       </div>

//       <div className="content-2 container"></div>
//     </section>
//   );
// };

import React, { useState } from "react";
import Assets1 from "./assets/Assets1.png";
import Assets2 from "./assets/Assets2.png";
import { Link } from "react-router-dom";

import Text from "../components/Text";

export const Home = () => {
  const [input, setInput] = useState("");

  return (
    <section>
      <nav className="navbar container p-5">
        <div className="logo text-primary text-2xl">
          <h1>DosenKu</h1>
        </div>
        <div className="navList">
          <div className="button btn-1 p-4">
            <Link to={"/signup"} className="">Sign up</Link>
          </div>
          <div className="button btn-2">
            <Link to={"/login"} className="text-white">
              <p>Login</p>
            </Link>
          </div>
        </div>
      </nav>

      <header className="container flex justify-between py-28">
        <div className="contentContainer">
          <h1 className="text-4xl leading-normal">
            Find any <br />
            University <br />
            Lecture here
          </h1>
          <h4 className="text-primary mt-3">
            <span>We'll</span> help you find any Lecturer <br />
            Here
          </h4>
          <div className="searchContainer flex items-center mt-2">
            <form className="searchBar border border-gray-300 rounded-md p-2">
              <input
                type="text"
                placeholder=" Type a lecturer name..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="w-full outline-none"
              />
            </form>
            <button className="button btn-2 bg-secondary">
              <p className="text-white">Find Now</p>
            </button>
          </div>
        </div>
        <div className="assetContainer">
          <img src={Assets1} alt="foto1" />
        </div>
      </header>

      <div className="content-1 container flex justify-between items-center mt-72 h-96 bg-yellow-200 rounded-3xl">
        <div className="img-container ml-20">
          <img src={Assets2} alt="foto2" />
        </div>
        <div className="carouselContainer px-24">
          <Text />
        </div>
      </div>

      <div className="content-2 container h-2/5"></div>
    </section>
  );
};