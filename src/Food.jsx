
function Food(){
    const food1 = "Orange";
    const food2 = "Banana";
    
    return(
        <ul>
            <li>{food1}</li>{/* This is a comment in JSX */}
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food;