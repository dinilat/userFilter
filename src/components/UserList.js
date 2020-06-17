import React,{useEffect,useState} from 'react';
import nameInfo from "../constants/nameInfo.json"

const UserList = (props) => {
    const [usersList,setUsersList] = useState([])
   useEffect(()=>{
    let newData=[]
    let renderRow =  true

    nameInfo.map(val=>{
        console.log(val)
if((val.name.toLowerCase()).includes(props.searchKey.toLowerCase()))
renderRow =true
else
renderRow = false
if (renderRow)
newData.push(<tr>
<td>
{val.name}
</td>
<td>
{val.gender}
</td>
</tr>

)
})
setUsersList(newData)
    console.log("searchkeynis" , props.searchKey)
  },[props.searchKey])
  
  
    return (
        <div style={{alignItems:'center',justifyContent:"center"}}>
        <h1>User List</h1>

        <div>
        {usersList.length>0?
        <table className="table table-striped" >
        <thead>
        <tr>
            <th>USER NAME</th>
                <th>GENDER</th>
            </tr>
        </thead>
           
                
            <tbody>{usersList}</tbody>
           
        </table>
        :
        <div>No users Found</div>
        }

        </div>
        
       
    </div>
 
    );
  }
  
  export default UserList;