import {Form, FormGroup, FormControl, ControlLabel, Col, Row,  Button} from 'react-bootstrap';


const Cashier = () => {
    return ( 
        <div className="container mt-5 pt-3 cashier-wrap">
        <Form>
       <h2 className="text-center mb-4">Cashier</h2>
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

       <Form.Group className="mb-3" controlId="">
         <Form.Label>Quatity</Form.Label>
         <Form.Control type="text" placeholder="Enter quatity" />
       </Form.Group>

       <Button variant="primary" type="submit" >
         PAY
       </Button>
     </Form>

     {/* Generate Receipt */}
     <div className="receipt-wrap mt-5">
         <h2 className="text-center">Store Name</h2>
         <ul>
             <li>Product ID: {}</li>
             <li>Product Name: {}</li>
             <li>Quatity: {}</li>
             <li>Price: {}</li>
             <li>Discount: {}</li>
             <li>Amount: {}</li>
         </ul>
         <h4>Total Amount: {}</h4>

         <button className="btn btn-danger mt-3">Print</button>
     </div>

     </div>

     );
}
 
export default Cashier;