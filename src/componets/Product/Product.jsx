import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar/SideBar";
import { listproduct } from "../../redux/store/slice";
import axios from "axios";
const Product = () => {
  const[users,setUsers] = useState([]);

  useEffect(() =>{
    loadUser();
  },[]);

  const loadUser = async () =>{
    const result = await axios.get("http://localhost:3500/users");
    setUsers(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3500/users/${id}`);
    loadUser();
  }
  return (
    <div className='container'>
    <table className="table">
  <thead className="bg-black text-black">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {users.map((user,index)=>(
      <tr>
        <th scope='row '>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <Link className='btn btn-primary' to={`/user/${user.id}`}>view</Link>
          <Link className='btn btn-outline-priimary' to={`/productedit/${user.id}`}>Edite</Link>
          <Link className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</Link>
        </td>
      </tr>
     ))}
  </tbody>
</table>
  </div>
  );
  // const [users, setUsers] = useState({
  //   name: "",
  //   username: "",
  //   email: " ",
  //   phone: " ",
  // });
  
  // useEffect(() => {
  //   loadUser();
  // }, []);
  // const dispatch = useDispatch();
  // // useEffect(() => {
  // //   dispatch(listproduct());
  // // }, []);

  // const loadUser = async () =>{
  //  const res = await axios.get("http://localhost:3500/users");
  //  setUsers()
  // };


  // const deleteProducts =async (id) => {
  //   await axios.delete(`http://localhost:3500/users/${id}`);
  //   loadUser();
  // }
  // const ViewProduct = useSelector((state) => state?.reducer?.ViewProduct);
  // console.log(ViewProduct, "vvvvvv");
  // const columns = [
  //   {
  //     name: "id",
  //     label: "ID",
  //     options: {
  //       filter: true,
  //       sort: true,
  //     },
  //   },
  //   {
  //     name: "name",
  //     label: "Name",
  //     options: {
  //       filter: true,
  //       sort: false,
  //     },
  //   },
  //   {
  //     name: "username",
  //     label: "Username",
  //     options: {
  //       filter: true,
  //       sort: false,
  //     },
  //   },
  //   {
  //     name: "email",
  //     label: "Email",
  //     options: {
  //       filter: true,
  //       sort: false,
  //     },
  //   },
  //   {
  //     name: "phone",
  //     label: "Phone",
  //     options: {
  //       filter: true,
  //       sort: false,
  //     },
  //   },
  //   {
  //     name: "action",
  //     label: "Action",
  //     options: {
  //       filter: true,
  //       customBodyRender: (value, tableMeta, updateValue) => {
  //         var id = tableMeta?.rowData[0];
  //         return (
  //           <>
  //             <Link className="btn" to={`user`}>
  //               <VisibilityRoundedIcon />
  //             </Link>
  //             <Link to={`/productedit/${id}`}>
  //               {" "}
  //               <button className="btn btn-outline-priimary">
  //                 <EditIcon />{" "}
  //               </button>
  //             </Link>
  //             <button className='btn'
  //         onClick={() => deleteProducts(id)}> <DeleteOutlineRoundedIcon /></button>
  //           </>
  //         );
  //       },
  //     },
  //   },
  // ];

  // const options = {
  //   filterType: "checkbox",
  // };
  // return (
  //   <SideBar
  //     props={
  //       <>
  //         <div className="d-flex justify-content-end mb-3 me-5">
  //           <Link to={"/productadd"}>
  //             <button className="btn btn-primary">Add Category</button>
  //           </Link>
  //         </div>
  //         <MUIDataTable
  //           title={"Employee List"}
  //           data={ViewProduct}
  //           columns={columns}
  //           options={options}
  //         />
  //       </>
  //     }
  //   />
  // );
};

export default Product;
