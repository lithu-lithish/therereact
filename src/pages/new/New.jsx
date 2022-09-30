// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { useState } from "react";
// import Uploadone from "./upload/Uploadone";
// import Uploadtwo from "./upload/Uploadtwo";
// import View from "./viewfile/View";

// import del from "../../svg/del.svg";
// import view from "../../svg/view.svg";
// const New = ({ title }) => {
//   const [viewFiles1, setViewFiles1] = useState(false);
//   const [viewFiles2, setViewFiles2] = useState(false);
//   // const [feeds, setFeeds] = useState({
//   //   imageOne: "",
//   //   imageTwo: "",
//   // });

//   const [file1, setFile1] = useState("");
//   const [file2, setFile2] = useState("");
//   const reset1 = () => {
//     console.log("[reset1]");
//     setFile1("");
//     setViewFiles1(false);
//     // ref1.current.value = "";
//   };
//   const reset2 = () => {
//     console.log("[reset2]");
//     setFile2("");
//     setViewFiles2(false);
//   };
//   function handleFileOpen() {
//     document.getElementById("file").click();
//   }
//   return (
//     <>
//       <Formik
//         initialValues={{ firstName: "", add: "", email: "", mob: "" }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, "Must be 15 characters or less")
//             .required("*name is required"),
//           add: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("*address is required"),
//           email: Yup.string()
//             .email("Invalid email address")
//             .required("*email-id is required"),
//           mob: Yup.number()
//             .max(20, "Must be 20 characters or less")
//             .required("*mob number is Required"),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         <div className="new">
//           <Sidebar />
//           <div className="newContainer">
//             <Navbar title="Registration" />

//             <div className="bottom">
//               <div className="right">
//                 <div className="newUser">
//                   <p
//                     style={{
//                       color: "#011627",
//                       padding: "1.9% 0% 3% 35%",
//                       fontFamily: "Gilroy",
//                       fontStyle: "normal",
//                       fontWeight: "500",
//                       fontSize: "20px",
//                       weigth: "462px",
//                       height: "36px",
//                     }}
//                   >
//                     Enter the details to add new user
//                   </p>

//                   <Form className="newUserForm">
//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                         // border: "1px solid #BFC5C9",
//                       }}
//                     >
//                       <label htmlFor="firstName">Name</label>
//                       <Field
//                         name="firstName"
//                         type="text"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       />
//                       <ErrorMessage name="firstName">
//                         {(msg) => <div style={{ color: "red" }}>{msg}</div>}
//                       </ErrorMessage>
//                     </div>

//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                       }}
//                     >
//                       <label htmlFor="mob">Mobile Number</label>
//                       <Field
//                         name="mob"
//                         type="text"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       />
//                       <ErrorMessage name="mob">
//                         {(msg) => <div style={{ color: "red" }}>{msg}</div>}
//                       </ErrorMessage>
//                     </div>

//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                       }}
//                     >
//                       <label htmlFor="email">Email address</label>
//                       <Field
//                         name="email"
//                         type="email"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       />
//                       <ErrorMessage name="email">
//                         {(msg) => <div style={{ color: "red" }}>{msg}</div>}
//                       </ErrorMessage>
//                     </div>
//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                       }}
//                     >
//                       <label htmlFor="email">Residential Address</label>
//                       <Field
//                         name="add"
//                         type="text"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       />
//                       <ErrorMessage name="add">
//                         {(msg) => <div style={{ color: "red" }}>{msg}</div>}
//                       </ErrorMessage>
//                     </div>

//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                       }}
//                     >
//                       <label>Gender</label>
//                       <select
//                         className="newUserSelect"
//                         defaultValue=""
//                         name="active"
//                         id="active"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       >
//                         <option value="" disabled hidden>
//                           Select Gender
//                         </option>
//                         <option value="one">Male</option>
//                         <option value="two">Female</option>
//                         <option value="three">Prefer not to say</option>
//                       </select>
//                     </div>

//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                       }}
//                     >
//                       <label>Age</label>
//                       <select
//                         className="newUserSelect"
//                         defaultValue=""
//                         name="active"
//                         id="active"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       >
//                         <option value="" disabled hidden>
//                           Select Age
//                         </option>
//                         <option value="one">opt1</option>
//                         <option value="two">opt2</option>
//                         <option value="three">opt3</option>
//                       </select>
//                     </div>

//                     <div
//                       className="newUserItem"
//                       style={{
//                         width: "525px",
//                         paddingRight: "40%",
//                       }}
//                     >
//                       <label>Select Package</label>
//                       <select
//                         className="newUserSelect"
//                         defaultValue=""
//                         name="active"
//                         id="active"
//                         style={{
//                           borderColor: "#BFC5C9",
//                         }}
//                       >
//                         <option value="" disabled hidden>
//                           Select Package
//                         </option>

//                         <option value="yes">Flat</option>
//                         <option value="no">Percent</option>
//                       </select>
//                     </div>

//                     <div>
//                       <p
//                         style={{
//                           paddingBottom: "13%",
//                           fontFamily: "Gilroy",
//                           fontStyle: "normal",
//                           fontWeight: "600",
//                           // fontSize: "24.4px",
//                           lineHeight: "29px",
//                         }}
//                       >
//                         1. Upload user profile
//                       </p>
//                       <div
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           border: "1px solid #808A93",
//                           borderRadius: "12px",
//                           maxWidth: "270px",
//                           backgroundColor: "#F5F6F6",
//                         }}
//                       >
//                         <div
//                           className=""
//                           style={{
//                             display: "flex",
//                             height: "auto",
//                             minHeight: "190px",
//                             width: "270px",
//                             justifyContent: "center",
//                             flexGrow: 2,
//                             alignItems: "center",
//                             paddingLeft: "2%",
//                           }}
//                         >
//                           <Uploadone
//                             viewFiles={viewFiles1}
//                             setViewFiles={setViewFiles1}
//                             file={file1}
//                             setFile={setFile1}
//                           />
//                           {/* {viewFiles1 && (
//                             <button type="button" onClick={reset1}>
//                               reset
//                             </button>
//                           )} */}
//                         </div>
//                         <div
//                           style={{
//                             borderTop: "1px solid #808A93",
//                             borderRadius: "0px 0px 12px 12px",
//                             // alignItems: "center",
//                             // height: "80px",
//                             // width: "100%",
//                             display: "flex",
//                             padding: "2% 5%",
//                             justifyContent: "space-around",
//                             backgroundColor: "white",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "block",
//                               // marginRight: "-65px",
//                               // margin: "auto 0",
//                               marginLeft: "11%",
//                               paddingLeft: "0%",
//                               padding: "  5% ",
//                               fontFamily: "Gilroy",
//                               fontStyle: "normal",
//                               fontWeight: "600",
//                               // fontSize: "24.4px",
//                               // lineHeight: "29px",
//                             }}
//                           >
//                             user profile photo
//                           </div>
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "space-between",
//                             }}
//                           >
//                             <div
//                               style={{
//                                 borderRadius: "6px",
//                                 backgroundColor: "#d0fd3e",
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 margin: ".2rem",
//                               }}
//                             >
//                               {viewFiles1 && <View file={file1} />}
//                             </div>
//                             <div
//                               style={{
//                                 // display: "block"
//                                 margin: ".2rem",
//                                 borderRadius: "6px",
//                                 backgroundColor: "#d90429",
//                                 display: "flex",
//                                 justifyContent: "center",
//                               }}
//                             >
//                               {viewFiles1 && (
//                                 <img
//                                   onClick={reset1}
//                                   src={del}
//                                   // className="buttonDel"
//                                   style={{
//                                     // width: "155%",
//                                     padding: ".3rem",
//                                   }}
//                                 ></img>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div
//                       style={{
//                         paddingLeft: "5%",
//                       }}
//                     >
//                       <p
//                         style={{
//                           paddingBottom: "13%",
//                           fontFamily: "Gilroy",
//                           fontStyle: "normal",
//                           fontWeight: "600",
//                           // fontSize: "24.4px",
//                           lineHeight: "29px",
//                         }}
//                       >
//                         2. Upload proof of the user
//                       </p>
//                       <div
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           border: "1px solid #808A93",

//                           borderRadius: "12px",
//                           maxWidth: "270px",
//                           backgroundColor: "#F5F6F6",
//                         }}
//                       >
//                         <div
//                           className=""
//                           style={{
//                             display: "flex",
//                             height: "auto",
//                             minHeight: "190px",
//                             width: "270px",
//                             justifyContent: "center",
//                             flexGrow: 1,
//                             alignItems: "center",
//                             paddingLeft: "2%",
//                             // backgroundColor: "#F5F6F6",
//                           }}
//                         >
//                           <Uploadtwo
//                             viewFiles={viewFiles2}
//                             setViewFiles={setViewFiles2}
//                             file={file2}
//                             setFile={setFile2}
//                             style={{
//                               padding: "5%",
//                             }}
//                           />
//                         </div>
//                         <div
//                           style={{
//                             borderTop: "1px solid #808A93",
//                             borderRadius: "0px 0px 12px 12px",
//                             backgroundColor: "white",
//                             alignItems: "center",
//                             // height: "80px",
//                             width: "100%",
//                             display: "flex",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <p
//                             style={{
//                               textAlign: "center",
//                               padding: "5%",

//                               fontFamily: "Gilroy",
//                               fontStyle: "normal",
//                               fontWeight: "600",
//                               // fontSize: "24.4px",
//                               lineHeight: "29px",
//                             }}
//                           >
//                             proof document
//                           </p>
//                           <div
//                             style={{
//                               display: "flex",
//                               position: "relative",
//                             }}
//                           >
//                             <p
//                               style={{
//                                 paddingLeft: "28%",
//                                 paddingTop: "1.3%",
//                               }}
//                             >
//                               {viewFiles2 && <View file={file2} />}
//                             </p>
//                             <p style={{ display: "block" }}>
//                               {viewFiles2 && (
//                                 <button
//                                   type="button"
//                                   onClick={reset2}
//                                   style={{
//                                     border: "none",
//                                     backgroundColor: "white",
//                                   }}
//                                 >
//                                   <img
//                                     src={del}
//                                     // className="buttonDel"
//                                     style={{
//                                       backgroundColor: "#d90429",
//                                       borderRadius: "6px",
//                                       width: "250%",
//                                       padding: "32%",
//                                     }}
//                                   ></img>
//                                 </button>
//                               )}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="align"
//                       style={{
//                         backgroundColor: "",
//                         paddingLeft: "35%",
//                         paddingTop: "15px",
//                       }}
//                     >
//                       <button
//                         id="cancelB"
//                         className="newUserButton-cancel"
//                         style={{
//                           color: "black",
//                           background: "white",
//                           weigth: "298px",
//                           height: "50px",

//                           borderWidth: "2px",
//                         }}
//                       >
//                         CANCEL
//                       </button>

//                       <span>
//                         <button
//                           className="newUserButton"
//                           style={{
//                             color: "black",
//                             background: "#D0FD3E",
//                             weigth: "298px",
//                             height: "50px",
//                           }}
//                         >
//                           NEXT
//                         </button>
//                       </span>
//                     </div>
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Formik>
//     </>
//   );
// };

// export default New;

import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Uploadone from "./upload/Uploadone";
import Uploadtwo from "./upload/Uploadtwo";
import View from "./viewfile/View";

import del from "../../svg/del.svg";
import view from "../../svg/view.svg";
import nextArrow from "../../svg/nextArrow.svg";
const New = ({ title }) => {
  const [viewFiles1, setViewFiles1] = useState(false);
  const [viewFiles2, setViewFiles2] = useState(false);
  // const [feeds, setFeeds] = useState({
  //   imageOne: "",
  //   imageTwo: "",
  // });

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const reset1 = () => {
    console.log("[reset1]");
    setFile1("");
    setViewFiles1(false);
    // ref1.current.value = "";
  };
  const reset2 = () => {
    console.log("[reset2]");
    setFile2("");
    setViewFiles2(false);
  };
  function handleFileOpen() {
    document.getElementById("file").click();
  }

  const navigate = useNavigate();
  // const formik = useFormik({
  //   onSubmit: () => {
  //   },
  // });

  return (
    <>
      <Formik
        initialValues={{ firstName: "", add: "", email: "", mob: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("*name is required"),
          add: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*address is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("*email-id is required"),
          mob: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*mob number is Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate("/addpack");
          }, 400);
        }}
      >
        <div className="new">
          <Sidebar />
          <div className="newContainer">
            {/* <Navbar /> */}
            <Navbar title="Registration" />

            <div className="bottom">
              <div className="right">
                <div className="newUser">
                  <p
                    style={{
                      color: "#011627",
                      padding: "1.9% 0% 3% 35%",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      weigth: "462px",
                      height: "36px",
                    }}
                  >
                    Enter the details to add new user
                  </p>

                  <Form className="newUserForm">
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                        // border: "1px solid #BFC5C9",
                      }}
                    >
                      <label htmlFor="firstName">Name</label>
                      <Field
                        name="firstName"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="firstName">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="mob">Mobile Number</label>
                      <Field
                        name="mob"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="mob">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Email address</label>
                      <Field
                        name="email"
                        type="email"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Residential Address</label>
                      <Field
                        name="add"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="add">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Gender</label>
                      <select
                        className="newUserSelect"
                        defaultValue=""
                        name="active"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option value="one">Male</option>
                        <option value="two">Female</option>
                        <option value="three">Prefer not to say</option>
                      </select>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Age</label>
                      <select
                        className="newUserSelect"
                        defaultValue=""
                        name="active"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Age
                        </option>
                        <option value="one">opt1</option>
                        <option value="two">opt2</option>
                        <option value="three">opt3</option>
                      </select>
                    </div>
                    <div
                      className="newUserItem1"
                      style={{
                        width: "525px",
                        paddingRight: "40%",
                      }}
                    >
                      <label>Select Package</label>
                      <select
                        className="newUserSelect"
                        defaultValue=""
                        name="active"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Package
                        </option>
                        <option value="yes">Flat</option>
                        <option value="no">Percent</option>
                      </select>
                    </div>

                    <div>
                      <p
                        style={{
                          paddingBottom: "13%",
                          fontFamily: "Gilroy",
                          fontStyle: "normal",
                          fontWeight: "600",
                          // fontSize: "24.4px",
                          lineHeight: "29px",
                        }}
                      >
                        1. Upload user profile
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          border: "1px solid #808A93",
                          borderRadius: "12px",
                          maxWidth: "270px",
                          backgroundColor: "#F5F6F6",
                        }}
                      >
                        <div
                          className=""
                          style={{
                            display: "flex",
                            height: "auto",
                            minHeight: "190px",
                            width: "270px",
                            justifyContent: "center",
                            flexGrow: 2,
                            alignItems: "center",
                            paddingLeft: "2%",
                          }}
                        >
                          <Uploadone
                            viewFiles={viewFiles1}
                            setViewFiles={setViewFiles1}
                            file={file1}
                            setFile={setFile1}
                          />
                          {/* {viewFiles1 && (
                            <button type="button" onClick={reset1}>
                              reset
                            </button>
                          )} */}
                        </div>
                        <div
                          style={{
                            borderTop: "1px solid #808A93",
                            borderRadius: "0px 0px 12px 12px",
                            alignItems: "center",
                            // height: "80px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "white",
                          }}
                        >
                          <p
                            style={{
                              display: "block",
                              textAlign: "center",
                              justifyContent: "center",
                              padding: "5%",
                            }}
                          >
                            user profile photo
                          </p>
                          <p
                            style={{
                              paddingTop: "6px",
                              paddingRight: "3px",
                            }}
                          >
                            {viewFiles1 && <View file={file1} />}
                          </p>
                          <p style={{ display: "block" }}>
                            {viewFiles1 && (
                              <button
                                type="button"
                                onClick={reset1}
                                style={{
                                  border: "none",
                                  paddingLeft: "0%",
                                  paddingRight: "0%",
                                  padding: "4%",
                                  paddingTop: "5.3px",
                                }}
                                className="buttonDel"
                              >
                                <img
                                  src={del}
                                  className="buttonDel"
                                  style={{
                                    width: "64%",
                                  }}
                                ></img>
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        paddingLeft: "5%",
                      }}
                    >
                      <p
                        style={{
                          paddingBottom: "13%",
                          fontFamily: "Gilroy",
                          fontStyle: "normal",
                          fontWeight: "600",
                          // fontSize: "24.4px",
                          lineHeight: "29px",
                        }}
                      >
                        2. Upload proof of the user
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          border: "1px solid #808A93",

                          borderRadius: "12px",
                          maxWidth: "270px",
                          backgroundColor: "#F5F6F6",
                        }}
                      >
                        <div
                          className=""
                          style={{
                            display: "flex",
                            height: "auto",
                            minHeight: "190px",
                            width: "270px",
                            justifyContent: "center",
                            flexGrow: 1,
                            alignItems: "center",
                            // backgroundColor: "#F5F6F6",
                            paddingLeft: "2%",
                          }}
                        >
                          <Uploadtwo
                            viewFiles={viewFiles2}
                            setViewFiles={setViewFiles2}
                            file={file2}
                            setFile={setFile2}
                            style={{
                              padding: "5%",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            borderTop: "1px solid #808A93",
                            borderRadius: "0px 0px 12px 12px",
                            backgroundColor: "white",
                            alignItems: "center",
                            // height: "80px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              textAlign: "center",
                              padding: "5%",
                            }}
                          >
                            proof document
                          </p>
                          <p
                            style={{
                              paddingTop: "6px",
                              paddingRight: "3px",
                            }}
                          >
                            {viewFiles2 && <View file={file2} />}
                          </p>
                          <p style={{ display: "block" }}>
                            {viewFiles2 && (
                              <button
                                type="button"
                                onClick={reset2}
                                style={{
                                  border: "none",
                                  paddingLeft: "0%",
                                  paddingRight: "0%",
                                  padding: "4%",
                                  paddingTop: "5.3px",
                                }}
                                className="buttonDel"
                              >
                                <img
                                  src={del}
                                  className="buttonDel"
                                  style={{
                                    width: "64%",
                                  }}
                                ></img>
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="align"
                      style={{
                        backgroundColor: "",
                        paddingLeft: "35%",
                        paddingTop: "15px",
                      }}
                    >
                      <button
                        id="cancelB"
                        className="newUserButton-cancel"
                        style={{
                          color: "black",
                          background: "white",
                          weigth: "298px",
                          height: "50px",

                          borderWidth: "2px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Gilroy",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "17.4px",
                          }}
                        >
                          CANCEL
                        </p>
                      </button>

                      <span>
                        <button
                          className="newUserButton"
                          type="submit"
                          style={{
                            color: "black",
                            background: "#D0FD3E",
                            weigth: "298px",
                            height: "50px",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>
                              <p
                                style={{
                                  fontFamily: "Gilroy",
                                  fontStyle: "normal",
                                  fontWeight: "500",
                                  fontSize: "17.4px",
                                }}
                              >
                                NEXT
                              </p>
                            </div>
                            <div>
                              <img
                                src={nextArrow}
                                style={{
                                  width: "60%",
                                  // marginLeft: "5%",
                                  marginTop: "12%",
                                }}
                              />
                            </div>
                          </div>
                        </button>
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default New;
