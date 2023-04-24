import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// 
function App() {
  const [pages] = useState ([
    {name: "about me" },
    {name: "project"},
    {name: "contact"}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav>
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        </Nav>
      </Header>
      <main>

      </main>
      <Footer />
    </div>
  );
}

export default App;
// 