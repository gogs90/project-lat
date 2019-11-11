import React, { Component } from 'react';
import MaterialTable from "material-table";

class Tabels extends Component {
    constructor(props){
        super(props)
        this.tabledata = this.tabledata.bind(this)
    }

    state={
        data : localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
    }
    
    tableHeader() {
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
           
        })
     }

    tabledata(){
        return this.state.data.map( (isi, index) =>{
            const {no,nama,umur,hobi} = isi
            // var a = index +1;
            return(
                <tr key={index}>    
                    <td>{no}</td>
                    <td>{nama}</td>
                    <td>{umur}</td>
                    <td>{hobi}</td>
                    <td><button>Edit</button></td>
                    {/* <td><button onClick={this.handleDelTD.bind(this,no )}>Delete</button></td> */}
                    {/* <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button> */}
                </tr>
            )
        })
    }
    render(){
        return(
            <table className="dataTable" border="1" width="100%" >
                <tbody>
                    {/* <tr>{this.tableHeader()}</tr> */}
                    {/* <tr width="15%" background-color="green">
                        <td>No</td><td>Nama</td><td>Umur</td><td>Hobi</td>
                    </tr> */}{this.tableHeader()}
                    {this.tabledata()}
                </tbody>    
            </table>
        )
    }
}

function Tabel(props){
    let datas = JSON.parse(localStorage.getItem("data"));
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'nama' },
          { title: 'Umur', field: 'umur' },
          { title: 'Hobi', field: 'hobi'}
        ],
        tab: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
    })

    return(
        <React.Fragment>
            <div>
                <table className="dataTable" border="1" width="100%" >
                    <tbody>
                        <Tabels></Tabels>
                    </tbody>    
                </table>
            </div>
            {/* <MaterialTable
                columns={state.columns}
                data={state.tab}
                title="Data Biodata "
                editable={{
                    // onRowAdd: newData =>
                    //   new Promise(resolve => {
                    //     setTimeout(() => {
                    //       resolve();
                    //       setState(prevState => {
                    //         const tab = [...prevState.tab];
                    //         console.log("data sebelum di add " + tab)
                    //         tab.push(newData);
                    //         console.log("data sesudah di add "+ tab)
                    //         localStorage.setItem("data",JSON.stringify(tab));
                    //         return { ...prevState, tab };
                    //       });
                    //     }, 600);
                    //   }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        if (oldData) {
                            setState(prevState => {
                            const tab = [...prevState.tab];
                            tab[tab.indexOf(oldData)] = newData;
                            localStorage.setItem("data",JSON.stringify(tab));
                            return { ...prevState, tab };
                            });
                        }
                        }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        setState(prevState => {
                            const tab = [...prevState.tab];
                            tab.splice(tab.indexOf(oldData), 1);
                            localStorage.setItem("data",JSON.stringify(tab));
                            return { ...prevState, tab };
                        });
                        }, 600);
                    }),
                }}
            /> */}
        </React.Fragment>
    )
}


export default Tabel;
