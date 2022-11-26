import { useState } from 'react';
import './App.css';


function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');

const [edit, setEdit] = useState(false);
const [active, setActive] = useState(null);

const [users, setUsers] = useState([]);

const addUser = (e) =>{
  e.preventDefault();
  const user = {
    name: name,
    email: email,
    address: address
  }
if(edit){
  let copy = users;
Object.assign(copy[active], user)
setUsers([...copy]);
setEdit(false);
setActive(null);
}
else{
setUsers([...users, user])
}
setName('')
setEmail('')
setAddress('')
};

const onEditClick = (index) =>{
  const user = users[index];
  setName(user.name);
  setEmail(user.email);
  setAddress(user.address);

  setActive(index);
  setEdit(true);
};

const deleteUser = (user) =>{
  if(window.confirm('are you sure?')){
    let copy = users.filter(item => item !== user);
setUsers([...copy]);
  }
}

return (
<div className='App'>
  <h1>CRUD Operation</h1>
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-xs-12 col-sm-10 col-md8 col-lg-5'>
        <form onSubmit={addUser}>
          <div className='form-group'>
            <label htmlFor=''>Name</label>
            <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Email</label>
            <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Address</label>
            <input type='text' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button className='btn btn-success form-control'>{edit ? 'update' :'Add'}</button>
        </form>
      </div>
    </div>
  </div>
  <table className='table table-bordered mt-5'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td><button className='btn btn-info' onClick={() =>onEditClick(index)}>Edit</button></td>
              <td><button className='btn btn-danger' onClick={() => deleteUser(user)}>Delete</button></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
);

}
export default App;