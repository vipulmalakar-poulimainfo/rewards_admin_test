import React from "react";
import Table from 'react-bootstrap/Table';

const UserActivityTable = ({ data, columns }) => {
    return(
        <Table hover>
          <thead style={{backgroundColor:'#F4F4F4'}}>
            <tr>
              {
                columns.map((column, index) => (
                  <th key={index}>{column.Header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td><img src={row.image} className="me-3" style={{width:'1.7rem'}} alt={row.name} />{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.vpn}</td>
                  <td>{row.location}</td>
                  <td>{row.date}</td>
                  <td>{row.ads}</td>
                  <td style={{textDecoration:'underline'}}>{row.points}</td>
                  <td className="fw-bold" style={{color:`${row.status==='Paid'?'#35CC5F':row.status==='Cacelled'?'#DD1616':'#FFAF15'}`}}>{row.status}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    )
}

export default UserActivityTable;