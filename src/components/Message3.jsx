function Message3({isAdmin}) {
    //        using ternary operator allows us to define a false condition

    return ( 
 <>
{isAdmin?
(
    <>
    <h4>welcome back admin</h4>
    <button className="btn btn-warning"> add product</button>
    </>

) : (
<>
<h4>welcome back user </h4>
<button className="btn btn-primary" >show products</button>

</>


)

}
</>  
     );
    }

export default Message3;