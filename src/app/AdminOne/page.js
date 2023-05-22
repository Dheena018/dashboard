// import user2 from "../../src/assests/userr2.jpg"
import Image from "next/image";
// import user2 from "../public/user2.jpg"
// import { Link } from "react-router-dom";
import Link from "next/link";


const NavbarTwo = ()=>{
    return (
      <>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    src="/user2"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="rounded w-[3rem] h-[3rem]"
                  />
                </Link>
                <div className="flex flex-col mx-3 font-serif font-bold animate-pulse">
                  <div>
                    <p>Akash Srma</p>
                  </div>
                  <div>
                    <p>akashsrma@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[3rem] my-5 font-serif font-bold animate-pulse ">
                <div>
                  <Link href="/Profile" className="hover:text-green-600">
                    Profile
                  </Link>
                </div>
                <div>
                  <Link href="/" className="hover:text-green-600">
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex mx-[3rem] my-9">
          <p className="font-extrabold animate-pulse text-lg text-green-950">
            Employee Details:
          </p>
        </div>
        <table className="border-2 text-center w-[50rem] mx-[12rem]">
            <tbody>
          <tr className="bg-green-600 ">
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
          
          <tr className="bg-green-200">
            <th>S.No</th>
            <th>AKash Srma</th>
            <th>Front-end Developer</th>
          </tr>
          </tbody>
        </table>
      </>
    );
};

export default NavbarTwo;