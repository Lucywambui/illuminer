
interface Props{
 text:string;
 //children: ReactNode: //Allows you to create multilines of html in parent component
 //i.e: <Alert>Hello World <span> Lucy </span></Alert>  will be code passed in PARENT WHICH IS App.tsx
}
const Alert = ({text}:Props) => {
  return (
    <div className="alert alert-primary">{text}</div>
  )
}

export default Alert;