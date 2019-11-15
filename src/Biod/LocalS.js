import React,{Component} from 'react';
// import '.Biodata/LocalS.css';
import './LocalS.css';
import './LocalS.scss'
import Tabel from './Tabel'
import {connect} from 'react-redux'
import { tsExpressionWithTypeArguments } from '@babel/types';


//======
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class LocalS extends Component{
    constructor(props){
        super(props)
        // this.handleShow = this.handleShow.bind(this)
    }

    

    state={
        no      : '',
        nama    :'', 
        umur    :'',
        hobi    :'',
        tampilNama : '',
        dataAwal : [],
        data : localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
        statusTable : false,
        cekData : false,
        hapus : false,
        simpan : false
    }

    componentDidMount() {
        this.setState({
            dataAwal : [
                {
                    no      : '1',
                    nama    : 'Awal',
                    umur    : '19',
                    hobi    : 'Testing'
                }
            ]
        })
        // , this.pertama 
    }

    addNama = (e) => {
        e.preventDefault()
        if(this.state.nama === ""){
            alert(" Harap isi nama !")
        }else if(this.state.umur === ""){
            alert(" Harap isi umur !")
        }else if(this.state.hobi === "" ){
            alert(" Harap isi hobi !")
        }else{
            let key = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
        var size = key.length + 1;
        this.setState({
                        data : 
                        [...this.state.data,
                            {
                                // no   : this.state.no,
                                no   : size,
                                nama : this.state.nama,
                                umur : this.state.umur,
                                hobi : this.state.hobi
                            }
                        ]
                    },
                    this.setState({simpan : !this.state.simpan}),
                    this.setState({nama : ""}), this.setState({umur : ""}), this.setState({hobi : ""}) )
        alert("Data Berhasil Di Simpan!")
        // {this.props.addUser}
        }
    }

    componentDidUpdate(){
        if(this.state.simpan === true){
            console.log("nilai sebelum simpan - " + this.state.simpan)
            localStorage.setItem("data",JSON.stringify(this.state.data))
            console.log("Did Update Jalan simpan")
            this.setState({simpan : false})
            console.log("nilai setelah simpan - " + this.state.simpan)
        }
    }


    handleChangeK = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    // handleShow = (event) => {
    //     event.preventDefault()
    //     // =================YANG BENER
    //     this.setState({
    //         statusTable : !this.state.statusTable
    //     })
    // }

    // tabledata(){
    //     return this.state.data.map( (isi, index) =>{
    //         const {no,nama,umur,hobi} = isi
    //         // var a = index +1;
    //         return(
    //             <tr key={index}>
    //                 <td>{no}</td>
    //                 <td>{nama}</td>
    //                 <td>{umur}</td>
    //                 <td>{hobi}</td>
    //                 <td><button>Edit</button></td>
    //                 <td><button onClick={this.handleDelTD.bind(this,no )}>Delete</button></td>
    //                 {/* <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button> */}
    //             </tr>
    //         )
    //     })
    // }


    render(props){
        console.log("render tampilan")

        return(
            <Container fixed>
                
                    <div className="kotakBio">    
                        <form >
                            <h1>INPUT BIODATA</h1>
                            <div className="kotakInput">
                                <div className="kotakKiri">Masukkan Nama :</div>
                                <div className="kotakKanan"><input className="w3-input w3-animate-input" name="nama" value={this.state.nama} placeholder="Masukkan nama" onChange={this.handleChangeK} style={{width:260}}/></div>
                            </div>
                            <div className="kotakInput">
                                <div className="kotakKiri">Masukkan Umur :</div>
                                <div className="kotakKanan"><input className="w3-input w3-animate-input" name="umur" value={this.state.umur} placeholder="Masukkan umur" onChange={this.handleChangeK} style={{width:260}}/></div>
                            </div>
                            <div className="kotakInput">
                                <div className="kotakKiri">Masukkan Hobi :</div>
                                <div className="kotakKanan"><input className="w3-input w3-animate-input" name="hobi" value={this.state.hobi} placeholder="Masukkan hobi" onChange={this.handleChangeK} style={{width:260}}/></div>
                            </div>                    
                        </form>
                        <br></br>
                        <div className="center">
                            <button className="button button4" onClick={this.addNama}>Simpan</button>
                            {/* <button className="button button4" onClick={this.props.addUser}>Cek Redux</button> */}
                        </div>
                        {/* <p>jumlah Biodata saat ini : {this.props.user} </p>
                        <p>Jumlah Biodata yang pernah di buat : {this.props.created}</p> */}
                    </div>
                    <div className="kotakData">
                        {this.state.statusTable && 
                            // <table className="dataTable" border="1" width="100%" >
                            //     <tbody>
                            //         {/* <tr>{this.tableHeader()}</tr> */}
                            //         <tr width="15%" background-color="green">
                            //             <td>No</td><td>Nama</td><td>Umur</td><td>Hobi</td>
                            //         </tr>
                            //         {this.tabledata()}
                            //     </tbody>    
                            // </table>
                        // ==================================================
                        <Tabel isiData={JSON.parse(localStorage.getItem("data"))} /> 
                        }
                    </div>
                
             </Container>
        )      
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.totalUser,
        created: state.totalCreated
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addUser: () => dispatch({type: 'ADD_USER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LocalS);