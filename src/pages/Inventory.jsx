import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getInventory()
  }, [])

  const getInventory = async () => {
    try {
      axios.get('http://127.0.0.1:8000/api/inventory/all/').then(
        response => {
          setInventoryData(response.data)
        },
        err => {
          console.log(err)
        }
      )
    } catch (except) {
      console.log(except)
    }
  }

  return (
    <div>
      <h2 id='inventory-heading'>Current inventory</h2>

      <div id='inventory-filter' className='inventory'>
        <input
          type='text'
          placeholder='Filter...'
          onChange={e => {
            setSearchTerm(e.target.value)
          }}
        />
        <br />
        <div className='table'>
          <Table responsive striped bordered hover variant='light'>
            <thead>
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
              {inventoryData
                .filter(val => {
                  let searchString = ''
                  for (let [key, value] of Object.entries(val)) {
                    searchString += `${value}\t`
                  }
                  if (searchTerm === '') {
                    return val
                  } else if (
                    searchString
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val
                  }
                })
                .map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.layout}</td>
                      <td>{val.color}</td>
                      <td>{val.angle}</td>
                      <td>{val.switches}</td>
                      <td>{val.keycaps}</td>
                      <td>{val.plate}</td>
                      <td>{val.price}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Inventory

// import React, { useState, useEffect } from 'react'
// import { Table } from 'react-bootstrap'
// import axios from 'axios'
// // import { TiFilter } from "react-icons/ti";

// const Inventory = () => {
//   const [inventoryData, setInventoryData] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     getInventory()
//   }, [])

//   const getInventory = async () => {
//     try {
//       axios.get('http://127.0.0.1:8000/api/inventory/all/').then(
//         response => {
//           setInventoryData(response.data)
//         },
//         err => {
//           console.log(err)
//         }
//       )
//     } catch (except) {
//       console.log(except)
//     }
//   }

//   return (
//     <div>
//       <h2>Current inventory</h2>

//       <div className='inventory'>
//         <input
//           type='text'
//           placeholder='Filter...'
//           onChange={e => {
//             setSearchTerm(e.target.value)
//           }}
//         />
//         <div className='table'>
//           <Table responsive striped bordered hover variant='dark'>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Layout</th>
//                 <th>Color</th>
//                 <th>Angle</th>
//                 <th>Switches</th>
//                 <th>Keycaps</th>
//                 <th>Plate</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {inventoryData
//                 .filter(val => {
//                   let searchString = ''
//                   for (let [key, value] of Object.entries(val)) {
//                     searchString += `${value}\t`
//                   }
//                   if (searchTerm === '') {
//                     return val
//                   } else if (
//                     searchString
//                       .toLowerCase()
//                       .includes(searchTerm.toLowerCase())
//                   ) {
//                     return val
//                   }
//                 })
//                 .map((val, key) => {
//                   return (
//                     <tr key={key}>
//                       <td>{val.name}</td>
//                       <td>{val.layout}</td>
//                       <td>{val.color}</td>
//                       <td>{val.angle}</td>
//                       <td>{val.switches}</td>
//                       <td>{val.keycaps}</td>
//                       <td>{val.plate}</td>
//                       <td>{val.price}</td>
//                     </tr>
//                   )
//                 })}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Inventory
