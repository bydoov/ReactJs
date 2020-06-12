import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';


export class Department extends Component 
{

    constructor(props)
    {
        super(props);
        this.state ={deps:[],}
    }

    componentDidMount()
    {
        this.refreshList();
    }

    refreshList(){
this.setState({
    deps:[{"DepartmentId":1, "DepartmentName":"IT"},
    {"DepartmentId":2, "DepartmentName":"Sup"}
]
})

    }


    render(){
        const{deps} = this.state;

return(

<Table className="mt-4" striped bordered hover size="sm">
    <thead>
        <tr>
            <th>DepartmentId</th>
            <th>DepartmentName</th>
        </tr>
    </thead>
    <tbody>
        {deps.map(dep=>
            <tr key = {dep.DepartmentId}> 
            <td>{dep.DepartmentId}</td>
            <td>{dep.DepartmentName}</td>
            </tr>)}
    </tbody>
</Table>


)
}
}
export default Department;

