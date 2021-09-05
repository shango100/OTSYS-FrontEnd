import React, { Component } from 'react';
import CompanyService from '../services/CompanyService'
import ReactTable from "react-table";
// import 'react-table/react-table.css';

class Apod extends Component {

    render() {

        // const tableRows = this.state.apods.map((apod, index) =>
        //     <tr key={index}>
        //         <td>{apod.date}</td>
        //         <td>{apod.explanation}</td>
        //         <td>{apod.hdurl}</td>
        //         <td>{apod.media_type}</td>
        //         <td>{apod.service_version}</td>
        //         <td>{apod.title}</td>
        //         <td>{apod.url}</td>
        //     </tr>
        // );

        if (this.state.apods==null){
           const tableRows = <div><p>its empty</p></div>;
        }else {
            const tableRows = <div><p>it has something</p></div>;

        }

        return (
            <div className="App">
                <div className="apod-container">
                    {<table>
                        {/*<tbody>{tableRows}</tbody>*/}
                    </table>}
                </div>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = { apods: []};
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=xIHveplESIuani7IMoMdEJMT3S80ixBq0s8M4adJ')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    apods: responseData._embedded.apods,
                });
            })
            .catch(err => console.error(err));
    }

}

export default Apod;