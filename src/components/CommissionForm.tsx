import { request } from 'http';
import React, { SyntheticEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommissionForm = () => {
  const [layout, setLayout] = useState({})
  const [bodyMaterial, setBodyMaterial] = useState({})
  const [aluFinish, setAluFinish] = useState({})
  const [polycarbFinish, setPolycarbFinish] = useState({})
  const [plateMaterial, setPlateMaterial] = useState({})
  const [aluPlateFinish, setAluPlateFinish] = useState({})
  const [brassPlateFinish, setBrassPlateFinish] = useState({})
  const [polyPlateFinish, setPolyPlateFinish] = useState({})
  const [weightMaterial, setWeightMaterial] = useState({})
  const [weightFinish, setWeightFinish] = useState({})
  const [mountingStyle, setMountingStyle] = useState({})

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let requestForm = {
      layout: layout,
      bodyMaterial: bodyMaterial,
      aluFinish: aluFinish,
      polycarbFinish: polycarbFinish,
      plateMaterial: plateMaterial,
      aluPlateFinish: aluPlateFinish,
      brassPlateFinish: brassPlateFinish,
      polyPlateFinish: polyPlateFinish,
      weightMaterial: weightMaterial,
      weightFinish: weightFinish,
      mountingStyle: mountingStyle,
    }
    try {
      console.log('im trying!')
      console.log(requestForm)
    } catch(err) {
      console.log('im catching!')
    }
  }

// ADD KEYS!
  return (
    <Form onSubmit={submit}>
        <Form.Select aria-label="layout"
        onChange={e => setLayout(e.currentTarget.value)}>
          <option>Select Layout</option>
          <option key="1" value="40%">40%</option>
          <option key="2" value="60%">60%</option>
          <option key="3" value="65%">65%</option>
          <option key="4" value="75%">75%</option>
          <option key="5" value="TKL">TKL</option>
          <option key="6" value="Full-Size">Full-Size</option>
          <option key="7" value="Other">Other</option>
        </Form.Select>

        <Form.Select aria-label="bodyMaterial"
        onChange={e => setBodyMaterial(e.currentTarget.value)}>
          <option >Body Material</option>
          <option key="1" value="aluminum">Aluminum</option>
          <option key="2" value="polycarbonate">Polycarbonate</option>
        </Form.Select>

        <Form.Select aria-label="aluminumFinish"
        onChange={e => setAluFinish(e.currentTarget.value)}>
          <option>Aluminum Finish Type</option>
          <option key="1" value="anodized">Anodized</option>
          <option key="2" value="carekote">Cerakote</option>
          <option key="3" value="ecoat">E-Coat</option>
          <option key="4" value="none">N/A - I want PC!</option>
        </Form.Select>

        <Form.Select aria-label="polycarbFinish"
        onChange={e => setPolycarbFinish(e.currentTarget.value)}>
          <option>Polycarbonate Finish Type</option>
          <option key="1" value="clear">Clear</option>
          <option key="2" value="frosted">Frosted</option>
          <option key="3" value="dyed">Dyed</option>
          <option key="4" value="none">N/A - I want ALU!!</option>
        </Form.Select>

        <Form.Select aria-label="plateMaterial"
        onChange={e => setPlateMaterial(e.currentTarget.value)}>
          <option>Plate Material</option>
          <option key="1" value="aluminum">Aluminum</option>
          <option key="2" value="brass">Brass</option>
          <option key="3" value="polycarbonate">Polycarbonate</option>
          <option key="4" value="pom">POM</option>
          <option key="5" value="carbonfiber">Carbon Fiber</option>
        </Form.Select>

        <Form.Select aria-label="aluPlateFinish"
        onChange={e => setAluPlateFinish(e.currentTarget.value)}>
          <option>Aluminum Plate Finish</option>
          <option key="1" value="anodized">Anodized</option>
          <option key="2" value="beadblasted">Bead Blasted</option>
          <option key="3" value="none">N/A - Don't want alu!</option>
        </Form.Select>

        <Form.Select aria-label="brassPlateFinish"
        onChange={e => setBrassPlateFinish(e.currentTarget.value)}>
          <option>Brass Plate Finish</option>
          <option key="1" value="polished">Polished</option>
          <option key="2" value="beadblased">Bead Blasted</option>
          <option key="3" value="none">N/A - Don't want Brass!</option>
        </Form.Select>

        <Form.Select aria-label="pcPlateFinish"
        onChange={e => setPolyPlateFinish(e.currentTarget.value)}>
          <option>Polycarbonate Plate Finish</option>
          <option key="1" value="clear">Clear</option>
          <option key="2" value="frosted">Frosted</option>
          <option key="3" value="none">N/A - Don't want PC!</option>
        </Form.Select>

        <Form.Select aria-label="weightMaterial"
        onChange={e => setWeightMaterial(e.currentTarget.value)}>
          <option>Weight Material</option>
          <option key="1" value="brass">Brass</option>
          <option key="2" value="stainless_steel">Stainless Steel</option>
          <option key="3" value="none">N/A - Don't want a weight!</option>
        </Form.Select>

        <Form.Select aria-label="weightFinish"
        onChange={e => setWeightFinish(e.currentTarget.value)}>
          <option>Weight finish</option>
          <option key="1" value="polished">Polished</option>
          <option key="2" value="beadblased">Bead Blasted</option>
          <option key="3" value="pvd">PVD</option>
          <option key="4" value="none">N/A - Don't want a weight!</option>
        </Form.Select>

        <Form.Select aria-label="mountingStyle"
        onChange={e => setMountingStyle(e.currentTarget.value)}>
          <option>What kind of mounting?</option>
          <option key="1" value="gasket">Gasket (Isolation)</option>
          <option key="2" value="oring">Gasket (O-ring)</option>
          <option key="3" value="topmount">Top Mount</option>
          <option key="4" value="other">Other</option>
        </Form.Select>

        <Button type="submit">Submit!</Button>
      </Form>
  )
}

export default CommissionForm