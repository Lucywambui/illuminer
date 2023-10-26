
// interface Props{
//  text:string;
//  //children: ReactNode: //Allows you to create multilines of html in parent component
//  //i.e: <Alert>Hello World <span> Lucy </span></Alert>  will be code passed in PARENT WHICH IS App.tsx
// }
// const Alert = ({text}:Props) => {
//   return (
//     <div className="alert alert-primary">{text}</div>
//   )
// }

import { useForm } from "react-hook-form";
import MainPageHeaders from "./MainpageHeader";
import { Button, Link, Stack, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../environment";
import * as React from "react";

// export default Alert;

interface RegistrationDetails{
  FirstName: string;
  LastName: string;
  email: string;
  password: string;
}

function RegistrationForm({FirstName, LastName, email, password}: RegistrationDetails) {
  const form = useForm<RegistrationDetails>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
    },
  });

  //Creates a new user in the firebase db 
  const onSubmit = async (e:any) => {
    e.preventDefault();

   console.log(e);
    try {
     
        const docRef = await addDoc(collection(db, "users"), {
            ... e
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
 
  //passes the state object changing to a constant
  const { register, handleSubmit, formState, setError } = form;
  const { errors } = formState;
  return (
    <>
      <MainPageHeaders heading="Create an account" />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} 
        width={700}

        >
         <TextField
            label="First Name"
            type="firstName"
            {...register("FirstName", { required: true })}
            error = {!!errors.FirstName?.message}
            helperText={errors.FirstName?.message}
          />
 <TextField
            label="Last Name"
            type="lastName"
            {...register("LastName", { required: true })}
            error={!!errors.LastName?.message}
            helperText={errors.LastName?.message}
          />
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: true, })}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", { required: true, minLength: 6, maxLength: 12 })}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
          <Link id="link" href="/">Already have an account?</Link>
          <Button id="button" type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default RegistrationForm;