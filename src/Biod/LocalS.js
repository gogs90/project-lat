import React,{Component} from 'react';
// import '.Biodata/LocalS.css';
import './LocalS.css';
// import MaterialTable from "material-table";
import Tabel from './Tabel'
// import Toolbar from '../Component/Toolbar/Toolbar';
// import toolbar from '../Component/Toolbar/Toolbar';

class LocalS extends Component{
    constructor(props){
        super(props)
        this.handleShow = this.handleShow.bind(this)
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
                    },this.setState({simpan : !this.state.simpan}),
                    //  this.lokal,
                     this.setState({nama : ""}), this.setState({umur : ""}), this.setState({hobi : ""}) )
        alert("Data Berhasil Di Simpan!")
    }

    // lokal = () => {
    //     localStorage.setItem("data", JSON.stringify(this.state.data))
    // }

    // pertama = () => {
    //     localStorage.setItem("data", JSON.stringify(this.state.dataAwal))
    // }

    componentDidUpdate(prevProps, prevState){
        // if(prevState.dataAwal !== this.state.data){
        if(this.state.simpan === true){
            console.log("nilai sebelum simpan - " + this.state.simpan)
            localStorage.setItem("data",JSON.stringify(this.state.data))
            console.log("Did Update Jalan simpan")
            this.setState({simpan : false})
            console.log("nilai setelah simpan - " + this.state.simpan)
        }
        // else 
        // if(prevState.hapus !== this.state.hapus){
        //     localStorage.clear()
        //     console.log("Did Update jalan hapus")
        // }
    }


    handleChangeK = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleShow = (event) => {
        event.preventDefault()
        // =================YANG BENER
        this.setState({
            statusTable : !this.state.statusTable
        })
    }

    handleDelete = (e) => {
        // e.preventDefault()
        window.localStorage.clear()
        // this.setState({
        //     hapus : !this.state.hapus
        // })
        alert("Data berhasil di hapus")
        this.setState({
            data : []
        })
    }

    // handleDelTD = () => {
    //     let no = arguments[0]
    //     this.setState({
    //         data : this.state.data.filter(item => {
    //             if(item.no !== no){
    //                 return item;
    //             }
    //         })
    //     })
    // }

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
                    <td><button onClick={this.handleDelTD.bind(this,no )}>Delete</button></td>
                    {/* <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button> */}
                </tr>
            )
        })
    }

    render(){
        console.log("render tampilan")
        return(
        <div>
            {/* <Toolbar/> */}
            <div className="kotakBio">    
                <form>
                {/* <h1>Warna favoritku adalah {this.state.warnafavorit}</h1> */}
                <h1>INPUT BIODATA</h1>
                <div className="grid-container">
                    <div className="grid-item">Masukkan Nama :</div>
                    <div className="grid-item"><input className="w3-round-large" name="nama" value={this.state.nama} placeholder="Masukkan nama" onChange={this.handleChangeK}/></div>
                    <div className="grid-item"></div>
                    <div className="grid-item">Masukkan Umur :</div>
                    <div className="grid-item"><input className="w3-round-large" name="umur" value={this.state.umur} placeholder="Masukkan umur" onChange={this.handleChangeK}/></div>
                    <div className="grid-item"></div>
                    <div className="grid-item">Masukkan Hobi :</div>
                    <div className="grid-item"><input className="w3-round-large" name="hobi" value={this.state.hobi} placeholder="Masukkan hobi" onChange={this.handleChangeK}/></div>
                </div>
                </form>
                <br></br>
                <div className="center">
                    <button className="button button4" onClick={this.addNama}>Simpan</button>
                    {/* <button className="button button4" onClick={this.handleShow}>Tampil / Tutup</button>
                    <button className="button button4" onClick={this.handleDelete}>Hapus</button><br></br> */}
                    <input readOnly hidden/><br></br>
                    <br></br><input readOnly hidden/>
                </div>
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
        </div>
        )      
    }
}

export default LocalS;