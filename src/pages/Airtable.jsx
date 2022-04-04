import { useState, useEffect } from "react"

import { redirect, axiosCall } from "../utilities/utilities"
export const Airtable = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        let response = await axiosCall("https://api.airtable.com/v0/app9QhNsv5170O8Iw/Projects?api_key=keyWdc5YHi3Jwi34f",'json')
        setUsers(response.data.records)
        console.log(response.data.records);
      };

      useEffect(() => {
        fetchData();
      }, [])
      return (
        <div id = "idEssai">
        <h1>Users List</h1>
        {users.map((item, index) => (
            <ul key={index} >
                {item.fields.LastName} {item.fields.FirstName}  {item.fields.Email}
            </ul>)
        )}
    </div>
      )
}