function Ex1() {
    return (
        <div>


            <div
            className="container-fluid bg-secondary text-dark d-flex align-items-center justify-content-center mb-5"
            style={{ height: '200px', fontSize: '40px' }}
            >
            <div className="row">
                <div className="col text-center">
                Let's test the grid
                </div>
            </div>
            </div>

            <div className=" mb-5">
                    <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
            </div>






            <div className="container ">
                <div className="row">
                    <div className="col border" style={{ height: 50 }}>First column</div>
                    <div className="col border" style={{ height: 50 }}>Second column</div>
                </div>

                <div className="row ">
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                </div>

                <div className="row ">
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                    <div className="col border" style={{ height: 50 }}>col</div>
                </div>
            </div>
        </div>
    );
}



export default Ex1;
