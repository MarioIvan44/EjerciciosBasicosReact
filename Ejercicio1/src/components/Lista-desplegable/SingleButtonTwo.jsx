const SingleButtonTwo = ({ titulo, option1, option2 }) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {titulo}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">{option1}</a></li>
                <li><a className="dropdown-item" href="#">{option2}</a></li>
            </ul>
        </div>
    )
}

export default SingleButtonTwo;