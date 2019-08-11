import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class Table extends Component{
  render()
  {
    const data = {
      columns: [
        {
          label: 'Orginisation',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Location',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Social issue',
          field: 'office',
          sort: 'asc',
          width: 200
        
        }
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo'
      
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco'
       
        },
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo'
      
        },

        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo'
      
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco'
       
        },
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo'
      
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco'
       
        },

        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo'
      
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco'
       
        },
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo'
      
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco'
       
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco'
       
        },
        {
          name: 'Jenette Caldwell',
          position: 'Development Lead',
          office: 'New York',
      
        }
      ]
    };
  
    return (
      <MDBDataTable
        striped
        bordered
        small
        data={data}
      />
    );
  }
  
}

export default Table;