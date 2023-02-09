import React, { useEffect, useState } from 'react';
import SideBar from '../../Common/SideBar/SideBar';
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, listOfCategory } from '../../redux/store/slice';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { ToastNotify } from '../../Common/Tosti/Toast';
import ReactLoader from 'react-loader';

  

const Category = () => {
  const dispatch = useDispatch();
  const [loder,setLoder] = useState(false)
  const  ListOfCategroy = useSelector((state)=>state?.reducer?.ListOfCategroy?.data)

  useEffect(()=>{
     dispatch(listOfCategory())
    //  dispatch(deleteCategory())
   },[])
   if(loder){
    <ReactLoader />
   }
  const deleteCategorys = (id) =>{
    if (window.confirm("are you sure")){
         dispatch(deleteCategory({id,data:{ is_archived: true }}))
         setLoder(true)
         console.log(id,"dispictechid");
  }
}
 

  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
       filter: true,
       sort: true,
      }
     },
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "image",
     label: "Image",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "description",
     label: "Description",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "action",
      label: "Action",
      options: {
			  filter: true,
			  customBodyRender: (value, tableMeta, updateValue) => {
          var id =tableMeta?.rowData[0];
				return (
          <>
				 <Link className='btn' to={`user`}><VisibilityRoundedIcon /></Link>
        <Link to={`/editCategory/${id}`}> <button className='btn btn-outline-priimary' ><EditIcon /></button></Link> 
          <button className='btn'
          onClick={() => {deleteCategorys(id)}}
          ><DeleteOutlineRoundedIcon /></button>
          </>
				);
			  }
			}
     },
   ];
   

   
   const options = {
     filterType: 'checkbox',
     search:true
   };
  return (
    <SideBar
   props={
    <>
    <div className='d-flex justify-content-end mb-3 me-5'>
    <Link to={"/addCategory"}>
      <button className='btn btn-primary '  >Add Category</button>
    </Link>
    </div>
    
      <MUIDataTable
  title={"Employee List"}
  data={ListOfCategroy}
  columns={columns}
  options={options}
/>
{/* <AddAndEdit /> */}
    </>
   }
   />
  );
}

export default Category;
