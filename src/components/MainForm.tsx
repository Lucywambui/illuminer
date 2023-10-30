import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import Homepage from "./Homepage";

var heading: string;

function MainForm() {
  const handleSubmit = () => {
    if (heading === "Login") {
      alert("Please login");
    } else {
      alert("Please register");
    }
  };
  const router= createBrowserRouter(
   createRoutesFromElements(
    <Route path="/">
    <Route 
     index
     element={<LoginForm email="" password="" />} />
    <Route
      path="/register"
      element={
        <RegistrationForm FirstName="" LastName="" email="" password="" />
      }
    />
    <Route path="/home" 
    element={
    <Homepage/>
      }
    />
  </Route>
   )
  );

  return (
   <RouterProvider router={router}/>
  );
}

export default MainForm;
