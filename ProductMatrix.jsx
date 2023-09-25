import React, { useState } from 'react';

const initialData = [
  {
    id: 1,
    insuranceName: 'Insurance A',
    productName: 'Product 1',
    claimStatus: 'Active',
    premium: 100,
    ageRange: '18-60',
    instructionPdf: 'product1.pdf',
    moreDetails: 'Link',
  },
  {
    id: 2,
    insuranceName: 'Insurance B',
    productName: 'Product 2',
    claimStatus: 'Inactive',
    premium: 150,
    ageRange: '25-55',
    instructionPdf: 'product2.pdf',
    moreDetails: 'Link',
  },
  {
    id: 3,
    insuranceName: 'Insurance c',
    productName: 'Product 3',
    claimStatus: 'active',
    premium: 200,
    ageRange: '30-70',
    instructionPdf: 'product3.pdf',
    moreDetails: 'Link',
  },
  {
  id: 4,
  insuranceName: 'Insurance D',
  productName: 'Product 4',
  claimStatus: 'Inactive',
  premium: 250,
  ageRange: '35-75',
  instructionPdf: 'product4.pdf',
  moreDetails: 'Link',

  },
  {
    id: 5,
    insuranceName: 'Insurance E',
    productName: 'Product 5',
    claimStatus: 'active',
    premium: 300,
    ageRange: '27-68',
    instructionPdf: 'product5.pdf',
    moreDetails: 'Link',
  }
  // Add more data as needed
];

const ProductMatrix = () => {
  const [data, setData] = useState(initialData);
  const [ageFilter, setAgeFilter] = useState('');
  const [premiumFilter, setPremiumFilter] = useState('');

  const handleAgeFilterChange = (e) => {
    setAgeFilter(e.target.value);
  };

  const handlePremiumFilterChange = (e) => {
    setPremiumFilter(e.target.value);
  };

  const filteredData = data.filter((item) => {
    // Filter by age
    if (ageFilter && item.ageRange !== ageFilter) {
      return false;
    }
    // Filter by premium
    if (premiumFilter && item.premium !== Number(premiumFilter)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h2 style={{color:"blue",textDecoration:"underline"}} className='m-5'>Product Matrix</h2>
      <br /><br />
      <div style={{marginLeft:"200px"}}>
        <label>
          Filter by Age:
          <select onChange={handleAgeFilterChange}>
            <option value="">All</option>
            <option value="18-60">18-60</option>
            <option value="25-55">25-55</option>
            <option value="30-70">30-70</option>
            <option value="35-75">35-75</option>
            <option value="27-68">27-68</option>
            {/* Add more age options as needed */}
          </select>
        </label> 
        <label style={{marginLeft:"30px"}}>
          Filter by Premium:
          <input type="number" onChange={handlePremiumFilterChange} />
        </label>
      </div>
      <br/><br/>
      <table  className='table table-bordered p-3 m-5'>
        <thead>
          <tr className='table-danger'>
            <th>Insurance Name</th>
            <th>Product Name</th>
            <th>Claim Status</th>
            <th>Premium</th>
            <th>Min-Max Age</th>
            <th>Instruction Pdf</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} >
              <td>{item.insuranceName}</td>
              <td>{item.productName}</td>
              <td>{item.claimStatus}</td>
              <td>{item.premium}</td>
              <td>{item.ageRange}</td>
              <td>
                <a href={item.instructionPdf} download>
                  Download
                </a>
              </td>
              <td>
                <a href={item.moreDetails}>more Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductMatrix;
