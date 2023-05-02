import products from '../products.json';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const ProductTable = () => {

    const [searchedType, setSearchedType] = useState("");
    
    const productRows = products.filter(p => p?.productType?.toLowerCase().startsWith(searchedType.toLowerCase())).map(product => (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.productType}</td>
        </tr>
    ));

    return(
        <div className='content'>
            <div className='products col-5'>
              <Form>
                <Form.Group className="mb-3" controlId="formType">
                    <Form.Label>Search by product type</Form.Label>
                    <Form.Control type="text" placeholder="Type" value={searchedType} onChange={(e) => setSearchedType(e.target.value)}/>
                    </Form.Group>
                </Form>

                <div className='product-table'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productRows}
                        </tbody>
                    </Table>
                </div>  
            </div>
            
        </div>
    );   
};

export default ProductTable;