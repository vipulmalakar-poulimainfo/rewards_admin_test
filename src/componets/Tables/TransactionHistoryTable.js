import React from "react";
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const TransactionHistoryTable = ({ data, columns }) => {
    const navigate = useNavigate();
    return(
        <Table hover>
          <thead style={{backgroundColor:'#D9D9D9'}}>
            <tr>
              {
                columns.map((column, index) => (
                  <th key={index}>{column.Header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody style={{backgroundColor:'#F7F7F7',fontWeight:'500'}}>
            {
              data.length === 0?
                <tr>
                  <td colSpan={columns.length} className="text-center py-4">No Transaction done by this user yet.</td>
                </tr>
              :
              data?.map((row, index) => (
                <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{row.name}</td>
                    <td>{row.transactionId}</td>
                    <td>{row.amount}</td>
                    <td>{row.date}</td>
                    <td style={{color:`${row.status==='Success'?'#1CD82F':'#F80606'}`}}>{row.status}</td>
                    <td><button className="btn py-0" style={{fontWeight:'500',color:'#040980',border:'2px solid #040980'}}>Download</button> </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    )
}

export default TransactionHistoryTable;