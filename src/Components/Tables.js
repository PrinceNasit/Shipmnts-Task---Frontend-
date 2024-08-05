import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { mockData } from "../Data/mockdata";

const Tables=()=>{
       const[data,setData]=useState(mockData);
       const [key,setKey]=useState('id');
       const[dis,setDis]=useState('asc');
       const[inFi,setInFi]=useState('id');
       const [fil,setFil]=useState('>');
       const [value, setValue] = useState('');

  const handleFieldChange = (e) => {
    setInFi(e.target.value);
    applyFilter(mockData);
  };

  const handleFilterChange = (e) => {
    setFil(e.target.value);
    applyFilter(mockData);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
    applyFilter(mockData);

  };

  const applyFilter = (data) => {
    const res= data.filter((item) => {
      switch (fil) {
        case '=':
          return item[inFi] == value;
        case '>':
          return item[inFi] > value;
        case '>=':
          return item[inFi] >= value;
        case '!':
          return item[inFi] != value;
        case '<':
          return item[inFi] < value;
        case '<=':
          return item[inFi] <= value;
        default:
          return true;
      }
    });
    setData(res);
  };

//   console.log(typeof(res));
    const keys=Object.keys(data[0]);
    // console.log(keys,data[0]);

    const getDataFrom=(event)=>{
        let val=event.target.value.trim();
        if(val===""){
            setData(mockData);
        }
        let res= mockData.filter(row => {
            return Object.values(row).some(value => value.toString().toLowerCase().includes(val.toLowerCase()));
          });
          setData(res);
    }
    const setSort = async () => {
        const sortedData = [...mockData];
        sortedData.sort((a, b) => {
          const aValue = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
          const bValue = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
      
          if (dis === '2') {
            return aValue > bValue ? 1 : -1;
          } else {
            return aValue < bValue ? 1 : -1;
          }
        });
        setData(sortedData);
      };
    const sort=(event)=>{
        let val=event.target.value;
        // console.log(val);
        setDis(val);
        // console.log(dis);
        setSort();
    }
    const sortOne=(event)=>{
        setKey(event.target.value);
        setSort();
    }
    useEffect(() => {
        applyFilter(mockData);
      }, [inFi, fil, value]);
    
      useEffect(() => {
        setSort();
      }, [key, dis]);
    
    return(

        <div>

        <Table striped="columns">
      <thead>
        <tr>
          {keys.map((item)=><th>{item}</th>)}
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.role}</td>
      <td>{item.hireDate}</td>
      <td>{item.isActive?"true":"false"}</td>
      <td>{item.salary}</td>
      <td>{item.department}</td>
      <td>{item.projectsCompleted}</td>
      <td>{item.lastLogin}</td>
      <td>{item.accessLevel}</td>
    </tr>
  ))}
      </tbody>
    </Table>   
    <div>
  <input
    type="search"
    onChange={getDataFrom}
    className="search-bar"
  />
</div>
<div>
  <select className="m-3" value={key} onChange={sortOne}>
    {keys.map((val) => (
      <option key={val} value={val}>
        {val}
      </option>
    ))}
  </select>
  {key && (
    <select className="m-3" value={dis} onChange={sort}>
      <option value="2">Descending</option>
      <option value="1">Ascending</option>
    </select>
  )}
</div>
<div>
<select className="m-3" value={inFi} onChange={handleFieldChange}>
        <option value="id">id</option>
        <option value="age">age</option>
        <option value="salary">salary</option>
        <option value="projectsCompleted">projects Completed</option>
      </select>
      <select className="m-3" value={fil} onChange={handleFilterChange}>
        <option value="=">Equal</option>
        <option value=">">Greater than</option>
        <option value=">=">Greater than or equal</option>
        <option value="!">Not Equal</option>
        <option value="<">Less than</option>
        <option value="<=">Less than or equal</option>
      </select>
      <input
        className="m-3"
        type="text"
        value={value}
        onChange={handleValueChange}
        placeholder="Enter value"
      />

</div>
      <div>
        
      </div>
    </div>
    )
}

export default Tables;