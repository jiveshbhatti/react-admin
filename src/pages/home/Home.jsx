import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React, {useState, useEffect, useMemo} from "react";
import axios from 'axios'
import {axiosInstance} from  '../../config'
export default function Home() {
  const MONTHS = useMemo(() =>  [ "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
  ],[]);

  const [userStats, setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async ()=>{
      try{
      const res = await axiosInstance.get("/users/stats", {
        headers: {
          token: "jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODM4ODA4NCwiZXhwIjoxNjgxNTg4MDg0fQ.bI00nYzL-L37bg_xc6qpIAJSbTQvAMNx2oGmolP_4IQ"
        }
      });
      const statsList = res.data.sort( function (a,b){
        return a._id - b._id
      })
     statsList.map(item => setUserStats(prev => [...prev, {name:MONTHS[item._id -1], "New User": item.total }]))

    }catch(err){
      console.log(err)
    }
  }
  getStats()
  }, [MONTHS])



  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
