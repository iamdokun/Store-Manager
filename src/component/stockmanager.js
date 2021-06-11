import {Form, FormGroup, FormControl, ControlLabel, Col, Row,  Button} from 'react-bootstrap';

const Stock = () => {
    
    return ( 
        <div className="stock-page  mt-5 pt-3">
            
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
              <option selected>Choose...</option>
              <option>Bread</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control as="select">
              <option selected>Choose...</option>
              <option>Coconut Bread</option>
              <option>Sardine Bread</option>
              <option>Honey Bread</option>
              <option>Milk Bread</option>
              <option>Agege Bread</option>
              <option>Ghana Bread</option>
              <option>Vanilla Short Bread</option>
              <option>Chocolate Bread</option>
            </Form.Control>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" placeholder="Enter price" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Quatity</Form.Label>
              <Form.Control type="text" placeholder="Enter quatity" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="text" placeholder="Enter discount" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="text" placeholder="Generate ID" />
            </Form.Group>
          </Form.Row>

          <Button type="submit">Submit form</Button>
        </Form>
      
        </div>
     );
}
 
export default Stock;