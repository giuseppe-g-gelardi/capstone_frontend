import React, { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';
import axios from 'axios';
import { TiFilter } from "react-icons/ti";
import Button from '@restart/ui/esm/Button';

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

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

  // const filteredElements = inventoryData.filter((el) => el.includes(filteredItems))

  const getData = () => {
    console.log(inventoryData)
  }

  // const getFiltered = () => {
  //   console.log(filteredItems)
  // }

  return (

    <div>
      <h2>Current inventory</h2> 
      {/* <Form>
        <input type="text"></input>
        <button  >filter inventory <TiFilter /></button>
      </Form>
      <Button onClick={getFiltered}> click this also </Button> */}
      
      
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
          {inventoryData.map((item) => 
          <tr>
            <td>{item.name}</td>
            <td>{item.layout}</td>
            <td>{item.color}</td>
            <td>{item.angle}</td>
            <td>{item.switches}</td>
            <td>{item.keycaps}</td>
            <td>{item.plate}</td>
            <td>{item.price}</td>
          </tr>
          )}
        </tbody>
      </Table>

      <button onClick={getData}>log the datas!!</button>
      
    </div>
  )
}

export default Inventory