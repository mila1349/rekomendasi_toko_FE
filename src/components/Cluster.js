import React from "react";
import './style.scss'
import CurrencyFormat from 'react-currency-format';
import { ToastContainer, toast } from 'react-toastify';

class Cluster extends React.Component {

    copyLink(e){
        e.stopPropagation();
        try {
            navigator.clipboard.writeText(this.props.item.Products[0].ShopInfo.Url);
            this.notifySuccess("Link berhasil disalin");
          } catch (e) {
            this.notifyError("Link gagal disalin");
            throw e;
          }
    }

    changeSelected(){
        this.props.change(this.props.index)
    }
    
    notifyError(msg){
        toast.error(msg)
    }
    
    notifySuccess(msg){
        toast.success(msg)
    }

    render() {
      return <div className="shop" style={this.props.selected?{background:"#3635C8", color:"#fff"}:{}} onClick={()=>this.changeSelected()}>
    <ToastContainer/>
      <span>
            {
                this.props.item.Maretplace==="Shopee"?(
                   <img src="assets/shopee.jpeg" alt="" className="marketplace"/> 
                ):(
                   <img src="assets/tokopedia.png" alt="" className="marketplace"/> 
                )
            }
          
          <h3>{this.props.item.Products[0].ShopInfo.Name!=''?this.props.item.Products[0].ShopInfo.Name:this.props.item.Shop}</h3>
      </span>
      <span>
          <div className="tag">
              <i class="fa-regular fa-money-bill-1"></i>
              <h5><CurrencyFormat value={this.props.item?.TotalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></h5>
          </div>
          <div className="tag">
                <i class="fa-solid fa-table-cells-large"></i>
              <h5>{this.props.item.Products.length}</h5>
          </div>
      </span>
      <span>
      <div className="tag">
          <i class="fa-solid fa-location-dot"></i>
          <h5>{this.props.item.Products[0].ShopInfo.City}</h5>
      </div>
      </span>
      <button onClick={(e)=>this.copyLink(e)} className="btn-tertiary" style={this.props.selected?{background:"#fff",color:"#3635C8"}:{}}><i class="fa-regular fa-clipboard"></i>Salin Link</button>
  </div>;
    }
  }

  export default Cluster;