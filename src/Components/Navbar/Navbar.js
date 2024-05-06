import {useState} from 'react';
import './Navbar.css';
{/*Use of Children Prop
<NavItem>....."whatever is passed here is passed as children prop"..... </NavItem>
<NavItem></NavItem> :  This is a Custom Component, we can pass anything as children prop, we can pass a built-in component or a text or any other component here.
<span></span> : This is a Built in component,all html elements are built-in components and we can use onClick Prop in Built-in Components.
*/}


// function NavItem(props)
// {
//     // console.log(props.children);

//     // function handleClick()
//     // {
//     //     console.log("You clicked me!!");
//     // }
//     return (
//         <li className="nav-item" onClick={props.onNavItemClick}> {/* Here we should pass handleClick as a value not as a function if we write handleClick();it means we are executing the function whenever it is rendered rather we should write like handleClick , so that it's execution will be decided by react*/}
//             <div className="nav-link">{props.children}</div>
//         </li>
//     );
// }

{/* Passing children props as object Destructuring */}

function NavItem({children,onNavItemClick})
{
    console.log("NavItem Rendering");
    
 return(
    <li className='nav-item' onClick={()=>onNavItemClick(children)}> {/*We want to print the one whom it was clicked on, for that we have to pass the children as an argument to onNavItemClick but if we write : onNavItemClick(children) , then this function onNavItemClick will get executed when the functional component is rendered, so we pass another unnnamed function as a value which will call onNavItemClick(children) when onClick event occurs*/}
     <div className='nav-link'>{children}</div>
    </li>
 )
}


function Navbar()
{

    // let content = "Please Click on a button";
    const [content,setContent] = useState("Please Click on a button");
    console.log(content);
    function handleClick(text)
    {
        // console.log("You clicked,");
        // content = text;
        setContent(text);
        console.log(content); {/*The old content will be console logged here because when we do setContent(text) :: -> then the content does not get updated at that instant when this line of code is hit rather setContent function basically schedules the updation of the content to the time when this functional component is re-rendered */}
    }
    console.log("Navbar rendering");
 return(
    <div>
 {/* <ul className={`navbar $ {content==="About Us" ? "acas" : "mcbc"}`}> */} {/*  This is the way of adding dynamic classnames where we can pick up classname based on a condition , and we can write different css for each of the classnames and make the classnames dynamic*/}
 <ul className='navbar'> 
    
        {/* <NavItem><span>Something to say!!</span></NavItem> */}
        <NavItem onNavItemClick={handleClick}>About Us</NavItem>
        <NavItem onNavItemClick={handleClick}>Product</NavItem>
        <NavItem onNavItemClick={handleClick}>Contact Us</NavItem>
   
 </ul>
 {content} 
 {content === "About Us" && "Hey this is so cool"} {/*Conditional rendering */}
 </div>)
}


{/*Using NavItem as a reusable component :::::-> */}
// function NavItem({props})
// {
//     return (
//         <li className="nav-item">
//             <div className="nav-link">{props}</div>
//         </li>
//     );
// }
// function Navbar()
// {
//     return (<ul className="navbar">
//         <NavItem props="About Us"/>
//         <NavItem props="Product"/>
//         <NavItem props="Contact Us"/>
//         </ul>
//     );
// }


// function Navbar(props)
// {
// return <p>{props.isloggedin ? "Welcome" : "Please login  to continue"}</p>
// }


     {/* Object Destructuring */}
// function Navbar({isloggedin : login})
// {
//     return (
    
//     <p>{login ? "Welcome user" : "Please login to continue"}</p>
//     )
// }

  export default Navbar;