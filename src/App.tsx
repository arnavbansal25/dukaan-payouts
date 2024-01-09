import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import PaymentsPage from "./components/PaymentsPage";

function App() {
  return (
    <div className="bg-background flex min-h-screen">
      <Sidebar />
      <main className="w-full lg:w-[calc(100vw-14rem)]">
        <Header />
        <PaymentsPage />
      </main>
    </div>
  );
}

export default App;
