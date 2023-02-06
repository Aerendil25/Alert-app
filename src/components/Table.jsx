import React from 'react';
import { useEffect, useState } from 'react';
import { useContextData } from "../context/ContextAPI";


const Table = () => {
    const { users } = useContextData();
    
    return (
      <>
        <h4 className="table-header">Runbook</h4>
        <div className="table-container">
        <table>
            <tr>
                <th>Issue name</th>
                <th>Developer name</th>
                <th>Number</th>
            </tr>
            
            {<p>Loading...</p> && users.map(user => (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
        </table>
      </div>
      </>
    );
  }
  
  export default Table;
  