import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const AllUsersTable = ({ data, columns }) => {
    const navigate = useNavigate();
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
                    <td className="d-flex align-items-center">
                        <span style={{color:`${row.status==='Online'?'#35CC5F':'#000'}`}}>{row.status}</span>
                        <Dropdown>
                          <Dropdown.Toggle variant="" id="dropdown-basic">
                            <i className="icon" ><BiDotsVerticalRounded /></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>navigate('/users/1') } >User Details</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" style={{color:'red'}} >Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    )
}

export default AllUsersTable;