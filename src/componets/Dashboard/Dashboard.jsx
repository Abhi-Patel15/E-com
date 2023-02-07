import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Common/Card/Card';
import SideBar from '../../Common/SideBar/SideBar';
import { counOfData, graphOfData, listOfTabel, registrationOfTabel } from '../../redux/store/slice';


const Dashboard = () => {
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(listOfTabel())
   dispatch(counOfData())
   dispatch(registrationOfTabel())
   dispatch(graphOfData())
 }, []);
  const counOfDatas = useSelector((state)=>state?.reducer?.countOfDatas?.data)
  const GraphOfDatas = useSelector((state)=>state?.reducer?.GraphOfDatas?.data)
  const ListOfOrders =useSelector((state)=>state?.reducer?.ListOfOrders?.data)
  const RegistrationDtatas =useSelector((state)=>state?.reducer?.RegistrationDatas?.data)
//  console.log(counOfDatas,"counOfDatas")
//  console.log(GraphOfDatas,"GraphOfDatas");

 console.log(ListOfOrders,"ListOfOrders");

  return (
   <SideBar
   props={
    <>
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
    {Object.entries(counOfDatas || {}).slice(0,8).map(([key, value]) => (
            <div class="col-3 mt-2">
      <Cards 
      name= {key}
      number ={value}
      />
      </div>
     
))}
</div>
    <div className="card radius-10 mb-5">
    <div className="card-body">
      <div className="d-flex align-items-center">
        <div>
          <h6 className="mb-0">Recent Registration</h6>
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
      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody>
          {RegistrationDtatas?.map((item, index) => (
              <tr data-index={index +1}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email_id}</td>
                <td>{item.phone_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
     {/* listofOrder */}
  <div className="card radius-10 mt-5">
    <div className="card-body">
      <div className="d-flex align-items-center">
        <div>
          <h6 className="mb-0">Recent List Of Orders</h6>
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
      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {ListOfOrders?.map((item, index) => (
              <tr data-index={index +1}>
                <td>{item.order_id}</td>
                <td>{item.userName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </>
   }
   />    
  );
}

export default Dashboard;
