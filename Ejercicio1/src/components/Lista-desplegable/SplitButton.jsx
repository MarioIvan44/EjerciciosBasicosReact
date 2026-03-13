const SplitButtonWithThreeOptions = ({ titulo, option1, option2, option3 }) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">{titulo}</button>
            <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">{option1}</a></li>
                <li><a className="dropdown-item" href="#">{option2}</a></li>
                <li><a className="dropdown-item" href="#">{option3}</a></li>
            </ul>
        </div>
    )
}

export default SplitButtonWithThreeOptions;