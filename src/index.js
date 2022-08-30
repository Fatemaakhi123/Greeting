import react from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
let date=new Date();
date=date.getHours();
const stylecss={
    color: "pink"
};
let greet="";
if(date<10)
{
     greet="Good Morning";
}
else if(date>=10 && date<14){
    greet="Good noon";
}
else if(date>=14 && date<18){
greet="Good afternoon";
}
else if(date>=18 && date<20)
{
    greet="Good evening";
}
else
{
    greet="good night";
}
ReactDOM.render(
    <>
     <h1 className='center'>Hello Sir,<span style={stylecss}> {greet}</span></h1>
     </>,
    document.getElementById('root')
)
