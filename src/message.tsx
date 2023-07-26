//used PascalCasing : Where first letter of every word is capital

function Message (){
 const name = 'Lucy';
 if(name){
 return <h1>Hello {name}</h1>
 }
 return <h1>Hello World</h1>
}

export default Message;