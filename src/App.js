import React from "react";
import "./App.css";
import Chart from './components/Chart';
import Chat from './components/Chat';
import Table from './components/Table';
import Logo from './components/Logo';
import User from './components/User';
import LinkToNotes from './components/LinkToNotes';
import Notes from './components/Notes';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Logo />
      <User/>
      <Chat/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="box">
              <LinkToNotes/>
              <Chart/>
              <Table/>
            </div>
          }
        />
        <Route
          path="/notes"
          element={
            <div className="notes-box">
              <Notes/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
