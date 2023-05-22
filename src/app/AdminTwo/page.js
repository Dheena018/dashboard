// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
// import admin from "../../src/assests/admin.avif"
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

  const data = [
    { name: "First Project", users: 12 },
    { name: "Second Project", users: 2 },
    { name: "Iintermediate Project", users: 6 },
    { name: "Complate Project", users: 10 },
  ];



const NavbarThree = ()=>{
    return (
      <>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    src="/admin.avif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="rounded w-[3rem] h-[3rem]"
                  />
                </Link>
                <div className="flex flex-col mx-3 font-serif font-bold animate-pulse">
                  <div>
                    <p>Karthickeyan</p>
                  </div>
                  <div>
                    <p>karthickeyan@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[3rem] my-5 font-serif font-bold animate-pulse ">
                <div>
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

        <div className="flex flex-row gap-[9rem] my-[4rem]">
          <PieChart width={500} height={500}>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={350}
              cy={200}
              outerRadius={100}
              fill="#37FB72"
              label
            />
            <Tooltip />
          </PieChart>
          <BarChart
            className="my-[4rem]"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#37FB72" background={{ fill: "#eee" }} />
          </BarChart>
        </div>

        <table className=" border-2 text-center w-[60rem] mx-[15rem]">
          <tbody>
            <tr className="bg-green-500">
              <th>Saturday/Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>wensday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
            <tr className="bg-green-300">
              <th>Extra Work</th>
              <th>9-6</th>
              <th>9.30-6.00</th>
              <th>9-6</th>
              <th>9-6</th>
              <th>9-6</th>
            </tr>
          </tbody>
        </table>
      </>
    );
};


export default NavbarThree;