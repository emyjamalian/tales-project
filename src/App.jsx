import { useState } from "react";
import "./App.css";
import StoryForm from "./components/Form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StoryForm></StoryForm>
    </>
  );
}

export default App;
