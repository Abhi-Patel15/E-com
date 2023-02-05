import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../Common/SideBar/SideBar';
import { listOfTabel } from '../../redux/store/slice';

const Dashboard = () => {
//   const dispatch = useDispatch();

//  useEffect(() => {
//    dispatch(listOfTabel())
//  }, []);
//   const ListOfOrde = useSelector((state)=>state)
//  console.log(ListOfOrde,"Listoforder")
  return (
   <SideBar
   props={
    <>
      Dashboard
    </>
   }
   />    
  );
}

export default Dashboard;
