import ItemCount from "./ItemCount"


const Items = () => {
    return (
            <div className="card col-2">
                <h5 className="card-title text-center">Producto</h5>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpue_kSPskwcncXROttpQ3McfClYJNTOjgfw&usqp=CAU" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <ItemCount/>
                </div>
            </div>
    )
}

export default Items;
