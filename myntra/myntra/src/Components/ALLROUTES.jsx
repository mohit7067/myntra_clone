import React from "react";
import { MEN } from "../Pages/MEN";
import { Routes, Route } from "react-router-dom";
import { WOMEN } from "../Pages/WOMEN";
import { KIDS } from "../Pages/KIDS";
import { HomePage } from "../Pages/HomePage";
import { MENSINGLEPG } from "../Pages/MENSINGLEPG";
import { WOMENSGLPG } from "../Pages/WOMENSGLPG";
import { KIDSSGLPG } from "../Pages/KIDSSGLPG";
import { Cart } from "../Pages/Cart";

export const ALLROUTES = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<MEN />} />
          <Route path="/men/:id" element={<MENSINGLEPG />} />
          <Route path="/women" element={<WOMEN />} />
          <Route path="/women/:id" element={<WOMENSGLPG />} />
          <Route path="/kids" element={<KIDS />} />
          <Route path="/kids/:id" element={<KIDSSGLPG />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};
