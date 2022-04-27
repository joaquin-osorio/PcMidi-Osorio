import "./ItemCount.css"

function ItemCount(props) {
    return(
        <div>
            <button onClick={restar}>-</button>
            <input value={props.initial}></input> 
            <button onClick={sumar}>+</button>
        </div>
    );
}

function sumar(){
    console.log("sumandoooo");
    document.querySelector("input").value=document.querySelector("input").value++;
}

function restar(){
    console.log("restandooo");
    document.querySelector("input").value=document.querySelector("input").value--;
}

export default ItemCount;