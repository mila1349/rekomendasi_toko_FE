import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Select from 'react-select'
import location from './location.json'

class HomeView extends React.Component {
    constructor() {
      super();
      this.state = {barang: [""], loc:""};
    }

    handleSelect = (selectedOption) => {
        this.setState({loc:selectedOption.value})
    };

    changeInput = (e, index) => {
        e.preventDefault()
        this.setState({
            barang: this.state.barang.map((el,i) => (index == i ? e.target.value : el))
        });
    }

    add(){
        if(this.state.barang.length<5){
            this.setState(prevState => ({
                barang: [...prevState.barang, ""]
            }))
        }
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.state.barang.length>=2){
            const stringData =  this.state.barang.join(',');
            window.location.href = `/rekomendasi?keyword=${stringData}&loc=${this.state.loc}`;
        }else{
            this.notifyError("Harap isi minimal 2 barang dan maksimal 5 barang untuk mendapatkan rekomendasi")
        }
    }

    deleteBarang(i) {
        if(this.state.barang.length>1){
            this.setState({barang: this.state.barang.filter(function(item) { 
                return item !== i 
            })});
        }
    }

    notifyError(msg){
        toast.error(msg)
    }

    async componentDidMount(){
        
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        this.fetchData(pos)
    }

    fetchData=async(loc)=>{
        await axios.get(`http://api.positionstack.com/v1/reverse?access_key=${process.env.REACT_APP_POSITION}&
        query=${loc.coords.latitude},${loc.coords.longitude}`)
        
        .then((response) => {
            this.setState({loc:response.data.data[0].county})
        })
        .catch((err)=>{
            this.notifyError("Gagal menemukan rekomendasi")
            window.location.href = '/';
            console.log(err)
        })
    }

    render() {
      return <div className="container home">
        <ToastContainer />

        <h1>Rekomendasi Toko <br/>Shopee dan Tokopedia</h1>
        <button className="btn-primary" onClick={()=>this.add()}><i class="fa-solid fa-plus mr-5p c-w"></i>Tambah Barang</button>
        <div className="flex">
            <h4>Location:</h4>
            <p>{this.state.loc}</p>
        </div>
        <form action="" className="home-form" onSubmit={(e)=>this.handleSubmit(e)}>
            {
                this.state.barang.map((item,index)=>(
                    <div className="input-container">
                        <input type="text" placeholder="Inputkan barang yang anda ingin beli" onChange={(e) => {this.changeInput(e,index)}} value={item} required/>
                        <button className="btn-secondary" type="button"><i class="fa-regular fa-trash-can fa-xl c-p" onClick={()=>this.deleteBarang(item)}></i></button>
                    </div>
                ))
            }
            <button className="btn-primary mt-1"><i class="fa-regular fa-paper-plane mr-5p" type="submit"></i>Berikan Rekomendasi</button>
        </form>
      </div>;
    }
  }

  export default HomeView;