import React from 'react';
const Table = () => {
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
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>24</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>35</td>
            </tr>
            <tr>
                <td>SI 32930</td>
                <td>Roland Mendel</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>16</td>
            </tr>
        </table>
      </div>
      </>
    );
  }
  
  export default Table;
  