const Counter = ({counter, inc, dec, rnd, rst}) => {
    return (
        <div className="jumbotron">
            <h1 className="m-3">{counter}</h1>
            <button onClick={dec} className="btn btn-primary m-3">DEC</button>
            <button onClick={inc} className="btn btn-primary m-3">INC</button>
            <button onClick={rnd} className="btn btn-primary m-3">RND</button>
            <button onClick={rst} className="btn btn-danger m-3">RST</button>
        </div>
    )
}

export default Counter;