import React from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const CountryUsersTable = ({ data, columns }) => {
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
                <tr key={index}>
                    <td>{row?.id}</td>
                    <td><img src={row?.image} className="me-3" style={{width:'1.7rem'}} alt={row?.name} />{row?.name}</td>
                    <td>{row?.email}</td>
                    <td>{row?.location}</td>
                    <td style={{color:'#040980', textDecoration:'underline', cursor:'pointer'}}>View Details</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    )
}

export default CountryUsersTable;