import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Inventory = () => {

  const [inventoryData, setInventoryData] = useState([])

  useEffect(() => {
    getInventory()
  }, [])

  const getInventory = async () => {
    try {
      axios.get('http://127.0.0.1:8000/api/inventory/all/').then((response) => {
        setInventoryData(response.data)
      },(err) => {
        console.log(err)
      })
    }
    catch(except) {
      console.log(except)
    }
  }


  return (

    <div>
      <h1>Current inventory</h1>
      <Table responsive striped bordered hover variant="dark" >
        <thead >
          <tr>
            <th>Name</th>
            <th>Layout</th>
            <th>Color</th>
            <th>Angle</th>
            <th>Switches</th>
            <th>Keycaps</th>
            <th>Plate</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.name}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.layout}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.color}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.angle}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.switches}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.keycaps}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.plate}</li>)}</td>
            <td>{inventoryData.map((item, index) => <li key={index}>{item.price}</li>)}</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
  )
}

export default Inventory