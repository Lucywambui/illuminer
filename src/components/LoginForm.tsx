import { TextField, Button, Stack, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import "../styles/LoginForm.scss";
import { collection, addDoc, getFirestore, doc, getDoc, getDocs } from "firebase/firestore";
import {db} from '../environment';
import MainPageHeaders from "./MainpageHeader";


//interface for the Login details required
interface LoginDetails {
  email: string;
  password: string;
}

//The main function tha can be passed to other components and reused in other components
function LoginForm({ email, password }: LoginDetails) {
  //A useForm method takes optional parameters with various props https://react-hook-form.com/docs/useform
  const form = useForm<LoginDetails>({
    //a prop for default values
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //The onSubmit method as a promise that breaks down the handleSubmit function
  //the event here is an object that contains event properties passed to the onSubmit
  const onSubmit = async (e: any) => {
    //display the email and password 
    console.log(e.email + e.password);
    //try and retrieve the email and password from the from form and compare them with the current Login Details in firestore
    try {
      //get Docs from the firestore collection  named users by accessing db in environment 
      const docRef = await getDocs(collection(db, "users"));
      //if the reference to the document is not empty
      if(!docRef.empty){
        //go through each refrenced location
        docRef.forEach(doc =>{
          //check if any doc data and password match the passed
          //THIS DOEN'T WORK
          if(doc.data().email == e.email && doc.data().password == e.password){
            return true;
          }
          return false;
        })
      }
    } catch (e: any) {
      console.error("User does not exist ", e);
      alert("User does not exist");

    }
}
  //passes the state object changing as a constant
  //formstate contains informationabout the entire form state
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  return (
    <>
      <MainPageHeaders heading="Login" />
  { /** the handleSubmit prop function for useForm calls the onSubmit method */}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} 
        width={700}
        >
          <TextField
            label="Email"
            type="email"
            /** allows you to register an input and validate in this case its the email */
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            onChange={event => { form.setValue('email', event.target.value) }}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            /** allows you to register an input and validate in this case its the password */
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            onChange ={event => { form.setValue('password', event.target.value)}}
            helperText={errors.password?.message}
          />
          <Link id="link" href="/register">Don't have an account?</Link>
          <Button id="button" type="submit" variant="contained" >
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default LoginForm;
