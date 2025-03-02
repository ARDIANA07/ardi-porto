import React from "react";
import { Hasil, ListCategories, Navbar } from "../component/Index";

const Home = () => {
    return (
        <div>
        <Navbar />
        <div className="flex">
          <div className="w-1/4 p-4">
            <ListCategories />
            <hr/>
          </div>
          <div className="w-1/2 p-4 text-start ">
            <h3 className="text-lg font-semibold">Daftar Produk</h3>
            <hr  />
          </div>
          <div className="w-1/4 p-4">
            <Hasil />
            <hr />
          </div>
        </div>
      </div>
      
    );
};

export default Home