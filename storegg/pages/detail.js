import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { topupAmount } from "../data/data";
import Image from "next/image";

const detail = () => {
  const [topUp, setTopUp] = useState();
  // console.log(activeClass)
  const handleClick = (e) => {
    e.preventDefault();
    setTopUp(e.target.id);
  };

  return (
    <div>
      <Navbar />
      <main>
        <h1>Top Up</h1>
        <p className="text-lg tracking-wide text-indigo-800 mt-4">
          Perkuat akun dan jadilah pemenang sejati
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 my-10 max-w-5xl">
          <div className="h-64 relative overflow-hidden w-48 md:col-span-2 mx-auto bg-cover rounded-3xl">
            <Image layout="fill" src={"/assets/sven.png"} />
          </div>

          <div className="ml-2 md:-ml-4">
            <h2 className="text-2xl">Dota 2</h2>
            <br />
            <div className="text-slate-600">
              <p>Category:</p>
              <ul className="flex">
                <li className="badge">
                  <label>Moba</label>
                </li>
                <li className="badge">
                  <label>Real Time Strategy</label>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider md:hidden my-10 col-span-2 "></div>

          <div className="space-y-10 md:-ml-4 col-start-1 col-span-2 md:col-start-3 md:row-start-2 md:col-span-3">
            <Input
              type="text"
              label="Verify ID"
              name="verifyId"
              placeholder="Verify your ID"
            />

            <div>
              <label>Nominal top up</label>
              <div className="grid md:grid-cols-3 gap-8 md:gap-2 mt-8">
                {topupAmount.map((item, i) => (
                  <div
                    key={i}
                    id={item.id}
                    onClick={handleClick}
                    className={`bg-cyan-50 border-2 border-transparent p-5 rounded-2xl relative cursor-pointer ${
                      item.id === topUp ? "active" : ""
                    }`}
                  >
                    <h3
                      onClick={(e) => e.preventDefault()}
                      className="mb-3 pointer-events-none"
                    >
                      {item.amount}{" "}
                      <span className="font-thin">{item.type}</span>
                    </h3>
                    <label>Rp. {item.price}</label>
                    {item.id === topUp && (
                      <>
                        <BiCheck className="absolute top-6 right-6 md:top-3 right-3 h-8 w-8 border-2 rounded-full bg-cyan-50 text-cyan-400" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Input
              type="text"
              label="Bank Account Name"
              name="bankAccountName"
              placeholder="Enter your bank account name"
            />

            <a className="btn color-block">Continue</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default detail;
