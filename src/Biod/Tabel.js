import React from 'react';
import MaterialTable from "material-table";
// import { Icon } from '@material-ui/core';
  
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';



function Tabel(props){
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'nama' },
          { title: 'Umur', field: 'umur' },
          { title: 'Hobi', field: 'hobi'},
        ],
        tab: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
    })

    return(
        <React.Fragment>
            <div>
                <table className="dataTable" border="1" width="100%" >
                    <tbody>
                        <tr width="15%" background-color="green">
                            <td>No</td><td>Nama</td><td>Umur</td><td>Hobi</td>
                        </tr>
                    </tbody>    
                </table>
            </div>
            <MaterialTable
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
            />
        </React.Fragment>
    )
}


export default Tabel;
