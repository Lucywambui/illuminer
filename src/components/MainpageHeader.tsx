interface MainPageHeaders{
  heading: 'Login' | 'Create an account' ;
  onChange?: (heading: string) => void;
}

function MainPageHeaders({heading}: MainPageHeaders){

 return(
  <>
  <h1>{heading}</h1>
  </>
 )

}
export default MainPageHeaders;