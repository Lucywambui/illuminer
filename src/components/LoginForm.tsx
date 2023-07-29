// import { useState } from "react";
// interface NotesGroupProps {
//   notes: string[];
//   heading: string;
//   //A property that is essentially a medium of communicate with the parent function for when something needs to happen once one of the notes are selected.
//   onSelectNote: (note: string) => void;
// }

import { TextField,Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";


// function NotesGroup({notes, heading, onSelectNote}: NotesGroupProps) {


//   //useState is a hook
//   //hook allows for use of inbuilt react functions
//   //the -1 initializes the selectedIndex state variable
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   // arr[0] //the selectedIndex variable
//   // arr[1] //the function that updates the selected variable


//   return (
//     //this ensures you are not creating extra elements in the DOM
//     <>
//       <h1>{heading}</h1>
//       {notes.length === 0 && <p>No Notes Created</p>}
//       <ul className="list-group">
       
//         {notes.map((note,index) => (
//           //Each list item should have a unique key property so that react is able to keep track of list items that are added or removed
//           //TO DO: ADD Ids
//           <li className= { selectedIndex === index ? 'list-group-item active' : 'list-group-item' } onClick={()=>{setSelectedIndex(index); onSelectNote(note);}} key={note}>{note}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


// export default NotesGroup;
interface LoginDetails{
  email:string;
  password:string;
}

function LoginForm({email, password}: LoginDetails){
  const form = useForm<LoginDetails>({
    defaultValues:{
      email:'',
      password:''
    },  
 });
 const onSubmit = (data: LoginDetails) =>{
  console.log(data);
 }
//passes the state object changing to a constant
 const {register, handleSubmit, formState } = form;
 const { errors }= formState;
return(<>
<form noValidate onSubmit={handleSubmit(onSubmit)}>
  <Stack spacing={2} width={400}>
    <TextField label="Email" type="email" {...register("email", {required: "Email is required"})} error={!!errors.email} helperText={errors.email?.message}/>
    <TextField label="Password" type="password" {...register("password",{required: "Password is required"})} error={!!errors.email} helperText={errors.password?.message}/>
  <Button type="submit" variant="contained" color="primary">Login</Button>
  </Stack>
</form>
</>)
}

export default LoginForm;


