import { useState, useEffect } from "react"
import { ourFetch, axiosCall } from "../utilities/utilities"

export const WithoutName = () => {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
        let response = await axiosCall("https://jsonplaceholder.typicode.com/users",'json')
        setUsers(response.data)
      };

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div id = "idEssai">
            <h1>Essais de composant</h1>
            {users.map((item, index) => (
                <li key={index} value={item.nom} >
                    {item.name}
                </li>)
            )}
        </div>
    )
}