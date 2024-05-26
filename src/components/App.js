import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((createnotes) => (
        <Note
          key={createnotes.id}
          title={createnotes.title}
          content={createnotes.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
