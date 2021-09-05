import React, { Component } from 'react'
import CompanyService from '../services/CompanyService';

class CreateCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            companyid: this.props.match.params.companyid,
            name: '',
            password: '',
            email: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.companyid === '_add'){
            return
        }else{
            CompanyService.getCompanyById(this.state.companyid).then( (res) =>{
                let company = res.data;
                this.setState({name: company.name,
                    password: company.password,
                    email : company.email
                });
            });
        }
    }
    saveOrUpdateCompany = (e) => {
        e.preventDefault();
        let company = {name: this.state.name, password: this.state.password, email: this.state.email};
        console.log('ecompany => ' + JSON.stringify(company));

        // step 5
        if(this.state.companyid === '_add'){
            CompanyService.createCompany(company).then(res =>{
                this.props.history.push('/companies');
            });
        }else{
            CompanyService.updateCompany(company, this.state.companyid).then( res => {
                this.props.history.push('/companies');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/companies');
    }

    getTitle(){
        if(this.state.companyid === '_add'){
            return <h3 className="text-center">Add Company</h3>
        }else{
            return <h3 className="text-center">Update Company</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>  Name: </label>
                                        <input placeholder="Name" name="Name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="Password" className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email : </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCompany}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateCompanyComponent
