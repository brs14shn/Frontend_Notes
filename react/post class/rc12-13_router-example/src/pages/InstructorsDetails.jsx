import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const InstructorsDetails = () => {
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();
  const navigate =useNavigate()

  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  // const inst =useLocation()
  const {state} =useLocation()
  // const [inst, setInst] = useState([]);

  // const getInstructors = () => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setInst(data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getInstructors();
  // }, [id]);

  //console.log(inst);
  console.log(state)

  return (
    <div className="text-center">
      <h3>{state.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{state.email}</h4>
      <h4>{state.phone}</h4>
      <div>
        <button  onClick={()=>navigate("/")} className="btn btn-success me-2 ">Home</button>
        <button onClick={()=>navigate(-1)}  className="btn btn-danger">Go Back</button>
      </div>
    </div>
  );
};

export default InstructorsDetails;


//! Link ile NaVLink arasındaki fark NavLink içerisinde active özelliğini olması 
//! Link ile NaVLink statik durumlarda, navigate ise dinamik router olarak hareket eder.
//* navigate bir fonksiyon gibidir.
//! Navigate ise 
