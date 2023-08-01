
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
  const onSubmit = (data: RegistrationDetails) => {
    console.log(data);
  };
  //passes the state object changing to a constant
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  return (
    <>
      <MainPageHeaders heading="Create an account" />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} 
        width={700}

        >
         <TextField
            label="FirstName"
            type="firstName"
            {...register("FirstName", { required: "First name is required" })}
            error={!!errors.email}
            helperText={errors.FirstName?.message}
          />
 <TextField
            label="Last Name"
            type="lastName"
            {...register("LastName", { required: " Last name is required" })}
            error={!!errors.email}
            helperText={errors.LastName?.message}
          />
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.email}
            helperText={errors.password?.message}
          />
          <Link href="/">Already have an account?</Link>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default RegistrationForm;