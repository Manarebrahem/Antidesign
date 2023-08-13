import './App.css';
import {useLayoutEffect,useState} from "react"
import {Table} from 'antd';
import {PuffLoader} from 'react-spinners';
function App () {
const { Column} = Table;
const [users,setUsers]=useState([])
const [loading,setLoading]=useState(false)


useLayoutEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((res)=>setUsers(res))
},[])

useLayoutEffect(()=>{
  setLoading(true)
  setTimeout(()=>setLoading(false),3000)
},[])

return(
  <div className='App'>
  {
  loading?
    <PuffLoader color="#d73737" size={360}/>
    :
    <div className='box'>
      <Table dataSource={users} >
        <Column title="First Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex='id' key="id" />
        <Column title="Address" dataIndex='username' key="username" />
      </Table>
    </div>
    }
  </div>
);
}
export default App;


