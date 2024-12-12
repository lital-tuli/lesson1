function Home({userName}) {

    const welcomeHandler = () => {
        console.log("welcome Noam");
        
    }
    const welcomeHandler2 = (userName) => {
        console.log("welcome " + userName);
        
    }
    return (
<>

<button onClick={welcomeHandler} className="btn btn-info">welcome</button>
<button onClick={()=> {welcomeHandler2(userName)}} className="btn btn-info">welcome2</button>

</>
        
      );
}

export default Home;