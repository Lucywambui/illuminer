import '../styles/Headings.scss';

interface MainPageHeaders{
  heading: 'Login' | 'Create an account' ;
}

function MainPageHeaders({heading}: MainPageHeaders){

 return(
  <>
  <h1>{heading}</h1>
  </>
 )

}
export default MainPageHeaders;