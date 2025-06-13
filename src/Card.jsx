{/* import Variable from './directory/name.jpg'*/}

function Card(){
    return (
        <div className="card-test">
            <img className="card-image" src="https://cdn-icons-png.flaticon.com/256/10817/10817310.png" alt="profile picture"></img>
            {/*<img src="{Variable}" alt="Imported picture"></img>*/}
            <h2 className="card-title">Mario</h2>
            <p className="card-text">System Engineering</p>
        </div>
    )
}

export default Card;