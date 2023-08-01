var heading: string; 

function MainForm(){
const handleSubmit = () =>{
 if(heading === 'Login'){
  alert('Please login');
 }else{
 alert('Please register');
 }
}



 return(
 <form onSubmit={handleSubmit}>

 </form>)
}