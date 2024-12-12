function Message1({isAdmin}) {

if (isAdmin) 
    return (
<>
<h4>welcome back admin</h4>
        <button className="btn btn-warning"> add product</button>

</>
        
    )

    return ( 
        <>

        <h4>welcome back user </h4>
        <button className="btn btn-primary" >show products</button>
        </>
     );
}

export default Message1;