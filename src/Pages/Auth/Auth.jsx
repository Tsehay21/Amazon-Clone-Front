import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./signUp.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(email,password)
  const [loading, setLoading] = useState({ signIn: false, signUp: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  //console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    // const actionType = e.target.name; // SignIn or SignUp
    if (e.target.name == "signin") {
      //firbase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          //console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          //console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            {/* we call it controlled input */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            " Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
//**************************** */
// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import classes from "./signUp.module.css";
// import { auth } from "../../Utility/firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import {ClipLoader} from "react-spinners"

// const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState({signIn: false,signUp:false})

//   const [{ user }, dispatch] = useContext(DataContext);

//   //console.log(user);

//   const authHandler = async (e) => {
//     e.preventDefault();
//     const actionType = e.target.name; // SignIn or SignUp
//     try {
//       let userInfo;
//       if (actionType === "signin") {
//         // Sign In
//         userInfo = await signInWithEmailAndPassword(auth, email, password);
//         setLoading({...loading, signIn:true})
//       } else {
//         // setLoading({...loading, signUp:true})
//         // Sign Up
//         userInfo = await createUserWithEmailAndPassword(auth, email, password);
//         setLoading({...loading, signUp:true})
//       }
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       });
//       setLoading({...loading, signIn:false})
//     } catch (error) {
//       //console.log(error.message)
//       setError(error.message);
//       setLoading({...loading, signIn:false})
//     }
//   };

//   return (
//     <section className={classes.login}>
//       {/* logo */}
//       <Link>
//         <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
//       </Link>
//       {/* form */}
//       <div className={classes.login__container}>
//         <h1>Sign In</h1>
//         <form onSubmit={authHandler}>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//             />
//           </div>
//           <button
//             type="submit"
//             name="signin"
//             className={classes.login__signInButton}
//           >
//             {loading.signIn ? (
//               <ClipLoader color="#000" size={15} />
//             ) : (
//               " Sign In"
//             )}
//           </button>
//         </form>
//         {/* agreement */}
//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>
//         {/* create account btn */}
//         <form onSubmit={authHandler}>
//           <button
//             type="submit"
//             name="signup"
//             className={classes.login__registerButton}
//           >
//             {loading.signUp ? (
//               <ClipLoader color="#000" size={15} />
//             ) : (
//               " Create your Amazon Account"
//             )}
//           </button>
//           {error && (
//             <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Auth;
