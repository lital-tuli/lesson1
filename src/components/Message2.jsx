function Message2({isAdmin}) {
    // a method that fits if you have a condition doesnt have else
    return ( 

<>
{isAdmin && <> <h4>welcome back admin</h4><button className="btn btn-warning"> add product</button> </>}
</>

     );
}

export default Message2;