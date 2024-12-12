function Product() {
    let products = [
        {id: "01", name: "product1", price: 100}, 
        {id: "02", name: "product2", price: 300},
        {id: "03", name: "product3", price: 2200},
        {id: "04", name: "product4", price: 2422},
    ];
// let products=[];
    return ( 
        <>
        <h2>Products</h2>
        {products.length ? (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.name}</td>
                        <td>₪{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        ) : ( 
            <p>Sorry, product not found</p>
        )}
        </>
     );
}

export default Product;