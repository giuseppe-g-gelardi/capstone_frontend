import React from 'react';
import { Form, Button } from 'react-bootstrap';


const CommissionForm = () => {
  return (
    <Form>
        <Form.Select aria-label="layout">
          <option>Select Layout</option>
          <option value="1">40%</option>
          <option value="2">60%</option>
          <option value="3">65%</option>
          <option value="4">75%</option>
          <option value="5">TKL</option>
          <option value="6">Full-Size</option>
          <option value="7">Other</option>
        </Form.Select>

        <Form.Select aria-label="bodyMaterial">
          <option >Body Material</option>
          <option value="1">Aluminum</option>
          <option value="2">Polycarbonate</option>
        </Form.Select>

        <Form.Select aria-label="aluminumFinish">
          <option>Aluminum Finish Type</option>
          <option value="1">Anodized</option>
          <option value="2">Cerakote</option>
          <option value="3">E-Coat</option>
          <option value="4">N/A - I want PC!</option>
        </Form.Select>

        <Form.Select aria-label="polycarbFinish">
          <option>Polycarbonate Finish Type</option>
          <option value="1">Clear</option>
          <option value="2">Frosted</option>
          <option value="3">Dyed</option>
          <option value="4">N/A - I want ALU!!</option>
        </Form.Select>

        <Form.Select aria-label="plateMaterial">
          <option>Plate Material</option>
          <option value="1">Aluminum</option>
          <option value="2">Brass</option>
          <option value="3">Polycarbonate</option>
          <option value="4">POM</option>
          <option value="5">Carbon Fiber</option>
        </Form.Select>

        <Form.Select aria-label="aluPlateFinish">
          <option>Aluminum Plate Finish</option>
          <option value="1">Anodized</option>
          <option value="2">Bead Blasted</option>
          <option value="3">N/A - Don't want alu!</option>
        </Form.Select>

        <Form.Select aria-label="brassPlateFinish">
          <option>Brass Plate Finish</option>
          <option value="1">Polished</option>
          <option value="2">Bead Blasted</option>
          <option value="3">N/A - Don't want Brass!</option>
        </Form.Select>

        <Form.Select aria-label="pcPlateFinish">
          <option>Polycarbonate Plate Finish</option>
          <option value="1">Clear</option>
          <option value="2">Frosted</option>
          <option value="3">N/A - Don't want PC!</option>
        </Form.Select>

        <Form.Select aria-label="weightMaterial">
          <option>Weight Material</option>
          <option value="1">Brass</option>
          <option value="2">Stainless Steel</option>
          <option value="3">N/A - Don't want a weight!</option>
        </Form.Select>

        <Form.Select aria-label="weightFinish">
          <option>Weight finish</option>
          <option value="1">Polished</option>
          <option value="2">Bead Blasted</option>
          <option value="3">PVD</option>
          <option value="4">N/A - Don't want a weight!</option>
        </Form.Select>

        <Form.Select aria-label="mountingStyle">
          <option>What kind of mounting?</option>
          <option value="1">Gasket (Isolation)</option>
          <option value="2">Gasket (O-ring)</option>
          <option value="3">Top Mount</option>
          <option value="4">Other</option>
        </Form.Select>

        <Button type="submit">Submit!</Button>
      </Form>
  )
}

export default CommissionForm