import React, { Component } from 'react'
import CompanyService from '../services/CompanyService'

class ListCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companies: []
        }
        this.addCompany = this.addCompany.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    deleteCompany(companyid){
        CompanyService.deleteCompany(companyid).then( res => {
            this.setState({companies: this.state.companies.filter(company => company.companyid !== companyid)});
        });
    }
    viewCompany(companyid){
        this.props.history.push(`/view-company/${companyid}`);
    }
    editCompany(companyid){
        this.props.history.push(`/add-company/${companyid}`);
    }

    componentDidMount(){
        CompanyService.getCompanies().then((res) => {
            this.setState({ companies: res.data});
        });
    }

    addCompany(){
        this.props.history.push('/add-company/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Company List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCompany}> Add Company</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Company  Name</th>
                            <th> Company Password</th>
                            <th> Company Email </th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.companies.map(
                                company =>
                                    <tr key = {company.companyid}>
                                        <td> { company.name} </td>
                                        <td> {company.password}</td>
                                        <td> {company.email}</td>
                                        <td>
                                            <button onClick={ () => this.editCompany(company.companyid)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompany(company.companyid)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCompany(company.companyid)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListCompanyComponent
