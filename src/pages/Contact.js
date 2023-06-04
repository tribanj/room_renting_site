import React, { useState, useEffect } from "react";
import Layout from "../componentss/Layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { async } from "@firebase/util";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  // console.log(landlord.email, "<-------");

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Unble to ftech data");
      }
    };
    getLandlord();
  }, [params.landlordId]);
  return (
    <Layout>
      <div className=" container  mt-4">
        <h3>Contact Details</h3>
        <div>
          {landlord !== "" && (
            <main>
              <h3>Name : {landlord?.name}</h3>
              <form>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    value={message}
                    id="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingTextarea"> your message</label>
                </div>
               
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => {
                    window.location.href = `mailto:${
                      landlord.email
                    }?subject=${searchParams.get(
                      "listingName"
                    )}&body=${message}`;
                  }}
                >
                  Send Message
                </button>
              </form>
            </main>
          )}
        </div>
      </div>
    </Layout>
  );
};

// export default Contact;
// import "../../src/styles/contact.css"
// import React, { useState, useEffect } from "react";
// import Layout from "../componentss/Layout/Layout";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase.config";
// import { useParams, useSearchParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [message, setMessage] = useState("");
//   const [landlord, setLandlord] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const params = useParams();

//     console.log(landlord.email, "<-------");

//   useEffect(() => {
//     const getLandlord = async () => {
//       const docRef = doc(db, "users", params.landlordId);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setLandlord(docSnap.data());
//       } else {
//         toast.error("Unble to ftech data");
//       }
//     };
//     getLandlord();
//   }, [params.landlordId]);

//   const handleSend = () => {
//     const mailtoLink = `mailto:${landlord.email}?subject=${searchParams.get(
//       "listingName"
//     )}&body=${message}`;
//       console.log(landlord, " handle<-------");

//     window.location.href = mailtoLink;
//   };

//   return (
//     <Layout>
//       <div className=" container  mt-4">
//         <h3>Contact Details</h3>
//         <div>
//           {landlord !== "" && (
//             <main>
//               <h3>Name : {landlord?.name}</h3>
//               <form>
//                 <div className="form-floating">
//                   <textarea
//                     className="form-control"
//                     placeholder="Leave a comment here"
//                     value={message}
//                     id="message"
//                     onChange={(e) => {
//                       setMessage(e.target.value);
//                     }}
//                   />
//                   <label htmlFor="floatingTextarea"> your message</label>
//                 </div>
               
//                 <button
//                   className="btn btn-primary mt-2"
//                   onClick={handleSend}
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </main>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

export default Contact;
