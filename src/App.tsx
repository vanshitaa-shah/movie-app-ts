import { RouterProvider } from "react-router-dom";
import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { router } from "./routes";

function App() {
  return (
    // <MovieProvider>
    <RouterProvider router={router} />
    // </MovieProvider>
  );
}

export default App;
