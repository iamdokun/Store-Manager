import { Table } from 'react-bootstrap';


const Store = () => {
    return ( 
        <div className="container mt-5">
          <h2 className="text-center mb-4">Available Product in Stock</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Pdt Available</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sardine Bread</td>
              <td>37</td>
              <td>350</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Coconut Bread</td>
              <td>25</td>
              <td>400</td>
            </tr>
          </tbody>
        </Table>
      </div>
     );
}
 
export default Store;