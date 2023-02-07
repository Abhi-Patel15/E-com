import React from 'react';

const Grapsh = () => {
  return (
    <div>
     <div className="row mt-5">
        <div className="col-12 col-lg-8">
          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="mb-0">Sales Overview</h6>
                </div>
                <div className="dropdown ms-auto">
                  <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="javascript:;">Action</a>
                    </li>
                    <li><a className="dropdown-item" href="javascript:;">Another action</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
                <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1" style={{color: '#14abef'}} />Sales</span>
                <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1" style={{color: '#ffc107'}} />Visits</span>
              </div>
              <div className="chart-container-1">
                <canvas id="chart1" />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
              <div className="col">
                <div className="p-3">
                  <h5 className="mb-0">24.15M</h5>
                  <small className="mb-0">Overall Visitor <span> <i className="bx bx-up-arrow-alt align-middle" /> 2.43%</span></small>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <h5 className="mb-0">12:38</h5>
                  <small className="mb-0">Visitor Duration <span> <i className="bx bx-up-arrow-alt align-middle" /> 12.65%</span></small>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                  <h5 className="mb-0">639.82</h5>
                  <small className="mb-0">Pages/Visit <span> <i className="bx bx-up-arrow-alt align-middle" /> 5.62%</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grapsh;
