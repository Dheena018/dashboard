'use client'
// import { Link } from "react-router-dom";
import Link from "next/link"
// import user1 from "../../src/assests/user1.jpg"
import Image from "next/image";

// import  man from "../../src/assests/man.jpg"
// import number from "../../src/assests/number.jpg"



const NavbarOne = ()=>{
    return (
      <>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    src="/user1"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded w-[3rem] h-[3rem]"
                  />
                </Link>
                <div className="flex flex-col mx-3 font-serif font-bold ">
                  <div>
                    <p>Dheena</p>
                  </div>
                  <div>
                    <p>dheena@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex  my-5  font-serif font-bold  ">
                <div className="mx-[3rem]">
                  <Link href="/signup" className="hover:text-green-600">
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
        <div>
          <p className="text-black text-7xl mx-[12rem] my-[3rem] shadow-xl">
            Front-End Developer
          </p>
        </div>
        <div className="flex flex-row">
          <div className="mx-[8rem] flex my-[2rem]">
            <div className="w-[30rem]">
              <p className="font-extrabold hover:cursor-pointer hover:text-blue-400">
                BIOGRAPHY
              </p>
              <p>
                Before we can answer this question we need to define passion.
                Passion, as this executive exemplifies, is energy and engagement
                for people and the work they do. Passion as an emotion is a
                valuable trait when channeled appropriately. Focused on helping
                others understand and doing good work is positive passion.
                Losing your cool when things go wrong is negative passion. The
                challenge is to channel the positive to ameliorate or eliminate
                the negative.
              </p>
              <p>
                Passion becomes the catalyst that galvanizes individuals to
                commit to their own development as well as to deliver products
                and services that customers need. Passion too develops when
                employees commit – on company time – to give back to their
                community as volunteers.
              </p>
              <p>
                Passion is a powerful driver when applied to purpose. It becomes
                the personal commitment to making a positive difference to
                achieve sustainable results.
              </p>
            </div>
            <div>
              <Image
                src={man}
                alt="man"
                className="my-[5rem] mx-[5rem]  cursor-pointer hover:shadow-2xl h-[15rem] w-[18rem]"
              />
            </div>
            <div>
              <Image
                src={number}
                alt="number"
                className="mx-3 w-[20rem] h-[25rem]"
              />
            </div>
          </div>
        </div>
      </>
    );
}
export default NavbarOne;