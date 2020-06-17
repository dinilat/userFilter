
import React,{useEffect,useState} from 'react';
import UserList from './UserList'
const Comp1 = () => {
    const [searckKey,setSearckKey] = useState('')
   useEffect(()=>{
  },[])
  
  
  const handleinputchange = (e) =>{
    setSearckKey(e.target.value)
  }
    return (
      <div style={{margin:'16px'}}>
 <input
                          type="text"
                          className="form-control input-lg"
                          placeholder="Search user .."
                          id="searckKey"
                          value={searckKey}
                          onChange={handleinputchange}
                        />
                        <UserList
                        searchKey = {searckKey}
                        />
      </div>
    );
  }
  
  export default Comp1;