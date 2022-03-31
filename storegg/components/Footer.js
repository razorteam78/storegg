import React from "react";

import { footer } from "../data/data";

const Footer = () => {
  return (
    <section className="grid mb-0 bg-slate-100 p-8 sm:grid-cols-2 gap-5 md:grid-cols-4">
      <div className="text-slate-700 pl-4 pr-4 grid gap-4">
        <img src="assets/logo.png" className="w-auto mx-auto my-4" />
        <p>StoreGG membantu gamers untuk menjadi pemenang sejati</p>
        <p>Copyright 2022. All Right Reserved</p>
      </div>

      {footer.map((data,i) => (
        <div key={i} className="pl-6">
          <h3 className="mb-5 mt-5 md:mt-0">{data.title}</h3>
          <ul>
            {data.submenu.map((submenu, i) => (
              <li key={i} className="my-2">
                <a className="text-slate-700 hover:text-indigo-900" href="/">
                  {submenu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Footer;
