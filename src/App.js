import React, { useEffect, useState} from 'react'
import Employee from './components/Employee'
import faker from 'faker'
import {Table} from 'semantic-ui-react'


function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
   let fakeEmployees = [] 
   for( let i = 0; i < 8; i++) {
     fakeEmployees[i] = {name: faker.name.findName(), department: faker.commerce.department(), salary: Math.floor(Math.random() * 200000) + 50000 }
   }
   setEmployees(fakeEmployees)
  }, [])
  const { filterStr } = this.state;
  return (
    <div className="App">
    
      
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><button type="button" onClick={ e => this.setState({ filterStr: e.target.value })} >
              Employee Name
            </button>
       
        </Table.HeaderCell>
        <Table.HeaderCell> Department</Table.HeaderCell>
        <Table.HeaderCell>Salary</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {employees.map((employee) => 
      <Employee
        name={employee.name} department={employee.department} salary={employee.salary} />
    )}
    </Table.Body>
  </Table>

   
    </div>
  );
}

export default App;

