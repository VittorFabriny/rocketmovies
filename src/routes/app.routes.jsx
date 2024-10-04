import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Create } from "../Pages/Create";
import { Preview } from "../Pages/Preview";
import { Profile } from "../Pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}
