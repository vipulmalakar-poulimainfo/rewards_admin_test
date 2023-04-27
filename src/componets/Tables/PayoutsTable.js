import React from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const PayoutsTable = ({ data, columns, func }) => {
    const navigate = useNavigate();
    return(
        <Table hover>
          <thead style={{backgroundColor:'#F4F4F4'}}>
            <tr>
              {
                columns?.map((column, index) => (
                  <th key={index}>{column.Header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data?.map((row, index) => (
                <tr key={index} className="pointer" onClick={()=> func(row)} >
                    <td>{row?.id}</td>
                    <td><img src={row?.image} className="me-3" style={{width:'1.7rem'}} alt={row?.name} />{row?.name}</td>
                    <td>{row?.date}</td>
                    <td>{row?.points}</td>
                    <td>{row?.amount}</td>
                    <td style={{fontWeight:'500',color:`${row?.status==='Paid'?'#35CC5F':row?.status==='Pending'?'#F3A250':'#DD1616'}`}}>{row?.status}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    )
}

export default PayoutsTable;