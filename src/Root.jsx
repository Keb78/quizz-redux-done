import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { addQuest, useQuizz } from "./redux/quizz";
import UpdateQuest from "./UpdateQuest";




export default function Root() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-orange-500 items-center shadow-lg">
        <h1 className="text-5xl font-extrabold text-white font-custom">Welcome!</h1>

        <ul className="flex space-x-4 text-white font-extrabold">
          <li>
            <Link to={"/"}>Quizz</Link>
          </li>
          <li>
            <Link to={"/AdminPage"}>Admin</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
