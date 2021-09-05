import React, { Component } from 'react'
import CompanyService from '../services/CompanyService'

class ViewCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyid: this.props.match.params.companyid,
            company: {}
        }
    }

    componentDidMount(){
        CompanyService.getCompanyById(this.state.companyid).then( res => {
            this.setState({company: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Company Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Company  Name: </label>
                            <div> { this.state.company.name }</div>
                        </div>
                        <div className = "row">
                            <label> Company Password: </label>
                            <div> { this.state.company.password }</div>
                        </div>
                        <div className = "row">
                            <label> Company Email: </label>
                            <div> { this.state.company.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCompanyComponent
