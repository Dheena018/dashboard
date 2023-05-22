'use client'
import Link from "next/link";
// import Router from "next/navigation";
import { useRouter } from "next/navigation";
// import Typed from "@Typed"
// import type { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactTyped from "react-typed";

// import { Link } from "react-router-dom";
// import Typed from 'react-typed';

// import { useFormik } from "formik";/
// import * as Yup from "yup";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";


const SignUp = ()=>{

  // const navigate =useNavigate()
  const router = useRouter()


  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phoneno: "",
      address: "",
      pincode: "",
      gender: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(12, "Invalid first_name")
        .required("first_name is required"),
      last_name: Yup.string()
        .max(1, "Invalid last_name")
        .required("last_name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required"),
      phoneno: Yup.number()
        .max(9999999999, "maximum 10 numbes")
        .min(11111111, "minimum 10 digits")
        .required("Enter phone no properly"),
      address: Yup.string()
        .max(20, "max 20 character")
        .required("enter your address"),
      pincode: Yup.number()
        .min(6, "max 20 character")
        .required("Enter proper only"),
    }),
    onSubmit: (values) => {
      router.replace("/Profile")
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      console.log(values);
    },
    
  });
  // console.log(formik.values);

    return (
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-10 pb-8 w-96"
        >
          <h2 className="text-center text-black font-bold text-2xl mb-4">
            Create Your <ReactTyped strings={["Profile"]} typeSpeed={40} />
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="first_name"
              type="text"
              placeholder="Enter your name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              // required
            />
            {formik.errors.first_name && (
              <p style={{ color: "red" }}>First Name is Required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="last_name"
              type="text"
              placeholder="Enter your name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              // required
            />
            {formik.errors.last_name && (
              <p style={{ color: "red" }}>Last Name is Required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              // required
            />
            {formik.errors.email && (
              <p style={{ color: "red" }}>Email is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phoneno"
            >
              Phone No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone no"
              type="phoneno"
              name="phoneno"
              placeholder="Enter your Number"
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              // required
            />
            {formik.errors.phoneno && (
              <p style={{ color: "red" }}>PhoneNo is Required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="address"
              name="address"
              placeholder="Enter your address"
              value={formik.values.address}
              onChange={formik.handleChange}
              // required
            />
            {formik.errors.address && (
              <p style={{ color: "red" }}>Address is Required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="pincode"
            >
              Pin Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pin code"
              type="number"
              name="pincode"
              placeholder="Enter your Pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              // required
            />
            {formik.errors.pincode && (
              <p style={{ color: "red" }}>PinCode error </p>
            )}
          </div>

          <div>
            {/* <div>
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                Gender
              </label>
            </div> */}
            <div className="flex items-center justify-center gap-[2rem]">
              {/* <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label
                  htmlFor="male"
                  className="inline text-gray-700 font-bold mb-2"
                >
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                />
                <label
                  htmlFor="female"
                  className="inline text-gray-700 font-bold mb-2"
                >
                  Female
                </label>
              </div> */}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-96 py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={navigate('/navbar')}
            >
              Create Profile
            </button>
            
          </div>
          <Link
              href="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account? Log in.
            </Link>
        </form>
      </div>
    );
}

export default SignUp;