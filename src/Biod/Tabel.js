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
    });

    return(
         <MaterialTable
            // columns={[
            //     { title: "Nama", field: "nama" },
            //     { title: "Umur", field: "umur" },
            //     { title: "Hobi", field: "hobi" },
            // ]}
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
    )
}
export default Tabel;

// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 650,
//     },
//   });
  
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
//   export default function Tabel() {
//     const classes = useStyles();
  
//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat&nbsp;(g)</TableCell>
//               <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//               <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => (
//               <TableRow key={row.name}>
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     );
//   }

