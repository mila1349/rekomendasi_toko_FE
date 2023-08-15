import React from "react";
import './style.scss'
import Navbar from "../components/Navbar";
import Cluster from "../components/Cluster";
import Product from "../components/Product";
import axios from 'axios';
import Loading from "../components/Loading";
import { ToastContainer, toast } from 'react-toastify';

class RekomendasiView extends React.Component {
    constructor() {
      super();

      this.state = {
            selected:0,
            recc:null,
            data:null
        }

        this.changeSelected = this.changeSelected.bind(this)
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search)
        const term = queryParams.get("keyword")
        const loc = queryParams.get("loc")
        const data = term.split(",")
        this.setState({data:data})
      
        // call the function
        this.fetchData(loc,data)
    }

    fetchData=async(loc,data)=>{
        let link ='https://rekomendasi-fc4b9e88eb4a.herokuapp.com/rekomendasi'

        await axios.post(link,JSON.stringify({
            'barang':data,
            'location':loc
        }))
            .then((response) => {
                console.log(response.data.Toko)
                this.setState({recc : response.data.Toko})})
            .catch((err)=>{
                this.notifyError("Gagal menemukan rekomendasi")
                window.location.href = '/';
                console.log(err)
        })

        // this.setState({recc : [
        //         {
        //             "Shop": "rizkaaabeauty",
        //             "Products": [
        //                 {
        //                     "Id": 13199571331,
        //                     "Name": "[SIAP KIRIM] Glad2Glow Light Sunscreen Gel UV SPF50 PA+++ 30g | Oil-Control Facial Sunscreen Sunblock UVA UVB Sun Protection Face Sunscreen 5X Ceramide Serum Skin Barrier Protect",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qul5-lid1oq0wzh7x6e",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 15999,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "19430836",
        //                         "Name": "",
        //                         "Url": "https://shopee.co.id/beliacosmetic",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 18711366158,
        //                     "Name": "[SIAP KIRIM] Vaseline Gluta Hya Body Serum Dewy Flawless Radiant Burst UV Lotion 200ml vaseline overnight vaseline biru pink gold",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-22120-99k529tw10kva6",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 19999,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "19430836",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [],
        //             "TotalPrice": 35998,
        //             "Maretplace": "Shopee",
        //             "Score": 6.2816825
        //         },
        //         {
        //             "Shop": "viccibeautyhouse",
        //             "Products": [
        //                 {
        //                     "Id": 22,
        //                     "Name": "⭐ VIP ⭐ Skin Aqua Daily Sunscreen",
        //                     "Url": "https://www.tokopedia.com/viccibeautyhouse/vip-skin-aqua-daily-sunscreen-skinaqua-spf-30?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/product-1/2020/2/19/36906817/36906817_d51dbf70-fabd-4f83-8985-df09ba108dd0_700_700",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 40400,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "viccibeautyhouse",
        //                         "Url": "https://www.tokopedia.com/viccibeautyhouse",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 54,
        //                     "Name": "VIP | NIVEA Extra White Body Lotion 100ml | 200ml",
        //                     "Url": "https://www.tokopedia.com/viccibeautyhouse/vip-nivea-extra-white-body-lotion-100ml-200ml-radiant-pink-nbl-100ml-kecil?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/26/49411fae-76e9-4597-9bae-ec29b14f158c.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 17100,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "viccibeautyhouse",
        //                         "Url": "https://www.tokopedia.com/viccibeautyhouse",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 43,
        //                     "Name": "💜 VIP 💜 | Hanasui Collagen Water Sunscreen SPF 30 - SPF 50 ORI",
        //                     "Url": "https://www.tokopedia.com/viccibeautyhouse/vip-hanasui-collagen-water-sunscreen-spf-30-spf-50-ori-spf-30-putih-19f2a?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/26/fbb1c187-c173-4432-adc4-af509f4e1b04.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 18700,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "viccibeautyhouse",
        //                         "Url": "https://www.tokopedia.com/viccibeautyhouse",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 57500,
        //             "Maretplace": "Tokopedia",
        //             "Score": 6.1763477
        //         },
        //         {
        //             "Shop": "TnT Beauty Shop",
        //             "Products": [
        //                 {
        //                     "Id": 23245107474,
        //                     "Name": "AZARINE Cicamide Barrier Sunscreen Moisturizer Calm My Acne SPF 35 PA+++ | Cicamide Barrier Sunscreen Moisturiser SPF35 PA+++ |  Azarine Calm My Acne Sunscreen Moisturiser SPF 35 Pa+++ | TnT Beauty Shop",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-7qvfx-lhx6lzj6yl7147",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 31500,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "744873",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 18628243100,
        //                     "Name": "Vaseline Healthy Bright​ Gluta Hyaluron Niacinamide Serum Lotion Dewy Radiance - Flawless Bright 200ML - Body Lotion",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-23010-c29pnlhu3ylv6f",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 50900,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "744873",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 19980437647,
        //                     "Name": "AZARINE Hydrasoothe Sunscreen Gel SPF45 PA++++ | Azarine Sunscreen 50ml - Azarine Sunscreen 30ml |TnT Beauty Shop",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-7qvft-lhiptz8qqtdj21",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 35000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "744873",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 82400,
        //             "Maretplace": "Shopee",
        //             "Score": 6.1230583
        //         },
        //         {
        //             "Shop": "Belia Cosmetic",
        //             "Products": [
        //                 {
        //                     "Id": 2409033719,
        //                     "Name": "❤ BELIA ❤ SKIN AQUA Tone Up UV Essence | UV Moisture Milk SPF 50+ PA+++ 40g Moist Gel SPF 30 sunscreen sun block screen | Skin Aqua UV Mist Light & Moisture | Sunplay Protection Sunscreen Lotion SPF 50+ PA++++ | Sunplay Baby Mild SPF 39 PA++",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qul8-lgohdz0qplf43c",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 39900,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 20890159910,
        //                     "Name": "❤ BELIA ❤ SCARLETT Whitening Body Lotion Tube Series 180mL | Fragrance Brightening | Jolly | Charming | Freshy | Romansa",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7quky-lifly4xhg1ow73",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 45000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 8216475333,
        //                     "Name": "❤ BELIA ❤ YOU Tone Up UV Elixir SPF 50+ PA++++ 40ml | Triple UV Elixir SPF 50+ PA++++ 30ml / Sachet 10ml | Sunscreen Y.O.U Makeups (✔️BPOM)",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-22110-wrvnejvhu7jve4",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 22000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 4959171117,
        //                     "Name": "❤ BELIA ❤ Nivea Sunscreen Sun Protect Series (✔BPOM) Daily Protection Face Instant Aura Oil Control Protect Serum SPF 50+ | SPF 30 | SPF 33",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/854b27829037f46033b899a58a5fc92f",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 51000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 22604402430,
        //                     "Name": "❤ BELIA ❤ SCARLETT Whitening Body Lotion Series 300ml | Pelembap Tubuh | Lotion Anti Kulit Kering | BPOM",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qul6-lf29gmrgin4w5a",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 53000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 4484873758,
        //                     "Name": "❤ BELIA ❤ MuTouch Goat's Milk Lotion Badan 400ml | Whitening Serum badan Spray 95ml  | MuTouch Triple Care Hand Cream 60gr | BPOM",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qul6-ljrxysoeq3hm69",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 29500,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 18359547359,
        //                     "Name": "❤ BELIA ❤ NIVEA Body Lotion | Body Care Extra White | Repair & Protect | Instant Glow | Night Nourish 200ml | BPOM",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-22110-1wfwigcbhejv15",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 27900,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "48382819",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 84900,
        //             "Maretplace": "Shopee",
        //             "Score": 6.119435
        //         },
        //         {
        //             "Shop": "quinn.korean",
        //             "Products": [
        //                 {
        //                     "Id": 22772585151,
        //                     "Name": "Glad2glow light sunscreen Gel SPF50 PA+++ 30g sunblock UVA UVB sun protection for oily skin",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qul6-lirfope0ok2e8b",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 38999,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "11114165",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 20120285533,
        //                     "Name": "VASELINE HB GLUTA HYA SERUM BURST UV LOTION  200ML",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-22110-am8fspshe9jv5b",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 47999,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "11114165",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [],
        //             "TotalPrice": 86998,
        //             "Maretplace": "Shopee",
        //             "Score": 6.1165543
        //         },
        //         {
        //             "Shop": "aeonofficialshop",
        //             "Products": [
        //                 {
        //                     "Id": 9,
        //                     "Name": "HANASUI SUNSCREEN SPF 50 WITH COLAGEN",
        //                     "Url": "https://www.tokopedia.com/aeonofficialshop/hanasui-sunscreen-spf-50-with-colagen?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2022/1/29/ada0c7a4-bb21-43b5-a806-45f80125bfd6.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 28350,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "aeonofficialshop",
        //                         "Url": "https://www.tokopedia.com/aeonofficialshop",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 0,
        //                     "Name": "VASELINE HBS LOTION GLUTA HYA FLAWLESS BRGT 200ML",
        //                     "Url": "https://www.tokopedia.com/aeonofficialshop/vaseline-hbs-lotion-gluta-hya-flawless-brgt-200ml-200-ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/1/20/61ca0123-186f-4164-a851-ecf007dd92de.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 60000,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "aeonofficialshop",
        //                         "Url": "https://www.tokopedia.com/aeonofficialshop",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 37,
        //                     "Name": "VASELINE HBS LOTION GLUTA HYA DEWY RADIANCE 200ML",
        //                     "Url": "https://www.tokopedia.com/aeonofficialshop/vaseline-hbs-lotion-gluta-hya-dewy-radiance-200ml-200-ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/1/20/5c9f6632-a8d3-4339-8e57-5306ad87e463.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 60000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "aeonofficialshop",
        //                         "Url": "https://www.tokopedia.com/aeonofficialshop",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 88350,
        //             "Maretplace": "Tokopedia",
        //             "Score": 6.114771
        //         },
        //         {
        //             "Shop": "radysacosmetic",
        //             "Products": [
        //                 {
        //                     "Id": 20480999424,
        //                     "Name": "RADYSA - Glad2Glow Light Sunscreen Gel UV SPF50 PA+++ 30g | Oil-Control Facial Sunscreen Sunblock UVA UVB Sun Protection Face Sunscreen",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-7qve5-li5i56y9xmr327",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 39000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "220337824",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 4034120764,
        //                     "Name": "𝐑𝐀𝐃𝐘𝐒𝐀 - Scarlett Whitening Body Lotion 5 Varian - 300ml",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/1602912894d3103ddf9d840dc5eeeac0",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 53500,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "220337824",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 16398223910,
        //                     "Name": "𝐑𝐀𝐃𝐘𝐒𝐀 - BIOAQUA 7X Ceramide Serum Sunscreen SPF 50 PA ++++ Sunscreen Gel Sunblock Wajah",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-7qvdg-ljfd4qn3t60xf9",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 49800,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "220337824",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 12599455191,
        //                     "Name": "𝐑𝐀𝐃𝐘𝐒𝐀 - Whitelab UV Shield Tank Sunscreen Gel SPF 50++ PA++++ Sunblock",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-7qvcz-lgj0y5b1u8ee98",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 71200,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "220337824",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 22346401099,
        //                     "Name": "𝐑𝐀𝐃𝐘𝐒𝐀 - Scarlett Whitening Body Lotion Tube 180ml",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qukx-liv8qoij3jkue6",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 45000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "220337824",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 14390344632,
        //                     "Name": "𝐑𝐀𝐃𝐘𝐒𝐀 - Inesia Whitening Body Lotion 330ml",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/id-11134207-7qul9-lf0n9n31ysgwbd",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 17500,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "220337824",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 92500,
        //             "Maretplace": "Shopee",
        //             "Score": 6.1096215
        //         },
        //         {
        //             "Shop": "gayatricosmetics",
        //             "Products": [
        //                 {
        //                     "Id": 32,
        //                     "Name": "SUNPLAY Sun Play Ultra Protection Sunscreen Lotion 30ml",
        //                     "Url": "https://www.tokopedia.com/gayatricosmetics/sunplay-sun-play-ultra-protection-sunscreen-lotion-30ml-ultra-protec?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/12/15/507f449c-e05a-40f6-96db-dcdae9af0f61.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 46692,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "gayatricosmetics",
        //                         "Url": "https://www.tokopedia.com/gayatricosmetics",
        //                         "City": "Bekasi"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 14,
        //                     "Name": "SUNPLAY Sun Play Ultra Protection Sunscreen Lotion 30ml",
        //                     "Url": "https://www.tokopedia.com/gayatricosmetics/sunplay-sun-play-ultra-protection-sunscreen-lotion-30ml-ultra-protec?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/12/15/507f449c-e05a-40f6-96db-dcdae9af0f61.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 46692,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "gayatricosmetics",
        //                         "Url": "https://www.tokopedia.com/gayatricosmetics",
        //                         "City": "Bekasi"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 46,
        //                     "Name": "Bfree Kids Lotion 100ml/Hand Body anak 100ml",
        //                     "Url": "https://www.tokopedia.com/gayatricosmetics/bfree-kids-lotion-100ml-hand-body-anak-100ml-mild-gentle?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/9/7/f50cea0c-4d88-46e0-ae9f-ee3768a4c03d.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 18000,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "gayatricosmetics",
        //                         "Url": "https://www.tokopedia.com/gayatricosmetics",
        //                         "City": "Bekasi"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 93384,
        //             "Maretplace": "Tokopedia",
        //             "Score": 6.108584
        //         },
        //         {
        //             "Shop": "Azarine Cosmetic Official Shop",
        //             "Products": [
        //                 {
        //                     "Id": 4669860687,
        //                     "Name": "[GEL] Azarine Hydrasoothe Sunscreen Gel SPF45 PA++++ 50ml BEST SELLER sunscreen kulit berminyak berjerawat",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/3821668152308ddc1f55b14b67bf4d72",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 64400,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "80036545",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 22607510757,
        //                     "Name": "Azarine Body Lotion Ageless Glow 100ml Lotion Penuaan Dini",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-23010-ddjc3m9qnymv2c",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 29900,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "80036545",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 19271064579,
        //                     "Name": "Azarine Cicamide Barrier Sunscreen Moisturiser SPF35 PA+++ Sunscreen Gel Untuk Skin Barrier Protection Sunscreen Kulit Kering Berjerawat Sensitif 40ml",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-23010-kiina2fqqomv59",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 37050,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "80036545",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 17992088195,
        //                     "Name": "Azarine Calm My Acne Sunscreen Moisturiser SPF35 PA+++ Sunscreen Gel Untuk Kulit Berminyak Berjerawat Sensitif 40ml",
        //                     "Url": "",
        //                     "Img": "https://cf.shopee.co.id/file/sg-11134201-23010-x9wv24raqomv93",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 37050,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "80036545",
        //                         "Name": "",
        //                         "Url": "",
        //                         "City": ""
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Shopee",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 94300,
        //             "Maretplace": "Shopee",
        //             "Score": 6.107529
        //         },
        //         {
        //             "Shop": "dkmall",
        //             "Products": [
        //                 {
        //                     "Id": 1,
        //                     "Name": "Azarine Hydrasoothe Sunscreen Gel SPF 45 Sunblock Gel Sun Protection",
        //                     "Url": "https://www.tokopedia.com/dkmall/azarine-hydrasoothe-sunscreen-gel-spf-45-sunblock-gel-sun-protection-30ml?extParam=ivf%3Dtrue%26src%3Dsearch%26whid%3D14937698",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/9/27/b872b0c7-aeca-4de7-bd78-701b674b7a8c.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 39000,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "dkmall",
        //                         "Url": "https://www.tokopedia.com/dkmall",
        //                         "City": "Medan"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 9,
        //                     "Name": "Scarlett Whitening Body Lotion Pemutih Badan Hand Body Scarlet",
        //                     "Url": "https://www.tokopedia.com/dkmall/scarlett-whitening-body-lotion-pemutih-badan-hand-body-scarlet-charming?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D14937698",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/6/4/4815ed77-6259-4e40-873a-a8033e4d12ec.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 59000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "dkmall",
        //                         "Url": "https://www.tokopedia.com/dkmall",
        //                         "City": "Medan"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 14,
        //                     "Name": "Azarine Hydrasoothe Sunscreen Mist SPF50 PA++++ Sun Screen Face Spray",
        //                     "Url": "https://www.tokopedia.com/dkmall/azarine-hydrasoothe-sunscreen-mist-spf50-pa-sun-screen-face-spray?extParam=ivf%3Dtrue%26src%3Dsearch%26whid%3D14937698",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/4/29/b730439c-ba73-498c-85e1-af5fa80a4be1.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 59000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "dkmall",
        //                         "Url": "https://www.tokopedia.com/dkmall",
        //                         "City": "Medan"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 17,
        //                     "Name": "Nuface Cover Me Sun Shield Sunscreen Wajah SPF 30 / SPF 50 Sunblock",
        //                     "Url": "https://www.tokopedia.com/dkmall/nuface-cover-me-sun-shield-sunscreen-wajah-spf-30-spf-50-sunblock-spf-30-biru?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2022/11/1/db904a28-b9ef-44b0-9b3e-b0ddd12724ac.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 32300,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "dkmall",
        //                         "Url": "https://www.tokopedia.com/dkmall",
        //                         "City": "Medan"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 38,
        //                     "Name": "Azarine Cicamide Barrier Sunscreen Moisturiser SPF35 PA+++",
        //                     "Url": "https://www.tokopedia.com/dkmall/azarine-cicamide-barrier-sunscreen-moisturiser-spf35-pa?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/11/2ca2c7bc-5576-4be2-9f27-8050383f6f65.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 35000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "dkmall",
        //                         "Url": "https://www.tokopedia.com/dkmall",
        //                         "City": "Medan"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 58,
        //                     "Name": "Vaseline Gluta-Hya Serum Burst Lotion Body Serum Body Lotion",
        //                     "Url": "https://www.tokopedia.com/dkmall/vaseline-gluta-hya-serum-burst-lotion-body-serum-body-lotion-dewy-radiance?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/7/11/afee4a0b-c09f-4ec3-945b-0971e3be546e.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 57000,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "dkmall",
        //                         "Url": "https://www.tokopedia.com/dkmall",
        //                         "City": "Medan"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 98000,
        //             "Maretplace": "Tokopedia",
        //             "Score": 6.1034694
        //         },
        //         {
        //             "Shop": "unilevermall",
        //             "Products": [
        //                 {
        //                     "Id": 0,
        //                     "Name": "Vaseline SPF 50 Daily Sunscreen Serum UV 170ml + Fresh Glow 180Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-spf-50-daily-sunscreen-serum-uv-170ml-fresh-glow-180ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/6/15/795f06f5-c026-413b-a162-339101896057.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 109900,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 1,
        //                     "Name": "Vaseline Gluta Hya Serum Lotion Dewy Radiance + Gluta Overnight 200Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-gluta-hya-serum-lotion-dewy-radiance-gluta-overnight-200ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D13355454",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/11/1/f342c3aa-f17e-4c2d-83a1-d3bcdf3f000d.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 90990,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 3,
        //                     "Name": "Vaseline SPF 50 Refreshing Daily Sunscreen Serum UV - 170ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-spf-50-refreshing-daily-sunscreen-serum-uv-170ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/5/22/9a425e05-68af-403f-bec2-02e7338b745c.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 95900,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 41,
        //                     "Name": "Vaseline Lotion Healthy Sunblock Spf30 - 100Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-lotion-healthy-sunblock-spf30-100ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/7/16/021202a9-ff85-4e26-8335-f708ccbec6f5.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 53190,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 47,
        //                     "Name": "Ponds UV Protect Sun Screen Serum SPF 35 - 30g",
        //                     "Url": "https://www.tokopedia.com/unilevermall/ponds-uv-protect-sun-screen-serum-spf-35-30g?extParam=cmp%3D1%26ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/4/5/9315dc01-e6d1-4535-9d08-64e134fbafbf.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 21736,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Jakarta Timur"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 4,
        //                     "Name": "Vaseline Healthy Bright Hand Body Lotion Uv Extra Brightening - 400Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-healthy-bright-hand-body-lotion-uv-extra-brightening-400ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/3/10/8f45dd87-d25e-4807-afa7-09e7722444c8.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 56900,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 7,
        //                     "Name": "BUY 1 GET 1 Zwitsal Hair Lotion Sweet Almond Oil &amp; Vit E 100ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/buy-1-get-1-zwitsal-hair-lotion-sweet-almond-oil-vit-e-100ml?extParam=cmp%3D1%26ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/15/d37aef13-54d0-48de-993d-8ae56c972252.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 23850,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 24,
        //                     "Name": "Vaseline Lotion Intensive Care Cocoa Radiant 400Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-lotion-intensive-care-cocoa-radiant-400ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/5/4/5f1a6b8d-706b-40ef-8b28-53a8868fad47.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 73300,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 25,
        //                     "Name": "Zwitsal Baby Skin Protector Lotion Citronella &amp; Chamomile Tube 100 ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/zwitsal-baby-skin-protector-lotion-citronella-chamomile-tube-100-ml?extParam=cmp%3D1%26ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/4/7/58c5be17-ab54-4e2e-b00b-6bdcff35a600.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 24640,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 28,
        //                     "Name": "Zwitsal Baby Twin Pack Hair Lotion - Perawatan Rambut Baby - 100ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/zwitsal-baby-twin-pack-hair-lotion-perawatan-rambut-baby-100ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/3/28/b9be3791-423b-41e7-9015-c1bded7bb33b.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 25900,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 31,
        //                     "Name": "Vaseline Lotion Healthy Sunblock Spf30 - 100Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-lotion-healthy-sunblock-spf30-100ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/7/16/021202a9-ff85-4e26-8335-f708ccbec6f5.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 53190,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 40,
        //                     "Name": "Vaseline Healthy Bright Hand Body Lotion Perfect 10 400Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-healthy-bright-hand-body-lotion-perfect-10-400ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/3/10/8d4c1c44-3a2b-44b8-9f4e-46ba86a42e26.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 73300,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 41,
        //                     "Name": "Zwitsal Kids Hair Lotion Natural And Nourisihing Care - 100ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/zwitsal-kids-hair-lotion-natural-and-nourisihing-care-100ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/3/16/8fecc836-4adb-460e-9610-f8a4dcfa2c23.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 20500,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 45,
        //                     "Name": "Vaseline Lotion Intensive Care Advanced Strength - 100ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-lotion-intensive-care-advanced-strength-100ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/6/19/9d95c968-7836-4fff-8058-bfb11f25167e.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 24400,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 },
        //                 {
        //                     "Id": 49,
        //                     "Name": "Vaseline Lotion Healthy Bright Uv Extra Brigthening - 100Ml",
        //                     "Url": "https://www.tokopedia.com/unilevermall/vaseline-lotion-healthy-bright-uv-extra-brigthening-100ml?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D7377294",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/4/13/56775791-7b42-474a-a401-1bb49aef103e.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 16100,
        //                     "Rating": 0,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "unilevermall",
        //                         "Url": "https://www.tokopedia.com/unilevermall",
        //                         "City": "Surabaya"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 200890,
        //             "Maretplace": "Tokopedia",
        //             "Score": 6.0504756
        //         },
        //         {
        //             "Shop": "nihonmart",
        //             "Products": [
        //                 {
        //                     "Id": 4,
        //                     "Name": "Banana Boat Sunscreen Sport SPF 50 90ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/banana-boat-sunscreen-sport-spf-50-90ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/9/e19cf7ac-a59d-48ab-af23-d68c46a93b20.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 173700,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 8,
        //                     "Name": "Banana Boat Kids Sensitive Sunscreen Lotion SPF 50+ 90ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/banana-boat-kids-sensitive-sunscreen-lotion-spf-50-90ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/10/5/af8c1039-a40e-47a4-a768-78ab17eadd22.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 193500,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "AltProducts": [
        //                 {
        //                     "Id": 6,
        //                     "Name": "Azarine Hydrashoothe Sunscreen Gel SPF45 30ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/azarine-hydrashoothe-sunscreen-gel-spf45-30ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/21/1faa1693-fe97-439f-80d7-a8a1e4ea57b1.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 39000,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 18,
        //                     "Name": "Banana Boat Kids Sensitive Sunscreen Lotion SPF 50+ 90ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/banana-boat-kids-sensitive-sunscreen-lotion-spf-50-90ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/10/5/af8c1039-a40e-47a4-a768-78ab17eadd22.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 193500,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 40,
        //                     "Name": "Anessa Pefect UV Sunscreen Milk 20ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/anessa-pefect-uv-sunscreen-milk-20ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/16/8b4ad3c4-d939-4a81-9959-0746309d2c7d.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 180900,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 49,
        //                     "Name": "Azarine Calm My Acne Sunscreen Moisturiser (SPF35) 40ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/azarine-calm-my-acne-sunscreen-moisturiser-spf35-40ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/10/d07bfe1f-2413-4de7-9422-6d11faf1be1e.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 33150,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 56,
        //                     "Name": "Banana Boat Sunscreen Sport Ultra SPF 50+ 90ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/banana-boat-sunscreen-sport-ultra-spf-50-90ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/9/14/ae4dd8d4-b143-4b46-b221-5a0bd8b2198d.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 215900,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 58,
        //                     "Name": "Dermacept RX Moisturizing Sunscreen 50g",
        //                     "Url": "https://www.tokopedia.com/nihonmart/dermacept-rx-moisturizing-sunscreen-50g-spf-30?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/2/25/3f929823-f724-4a18-b21d-1e6b4a2bf825.jpg",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 93500,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "sunscreen",
        //                         "Barang": "sunscreen"
        //                     }
        //                 },
        //                 {
        //                     "Id": 59,
        //                     "Name": "Banana Boat Sunscreen Ultra Protect Faces Lotion SPF 50 60ml",
        //                     "Url": "https://www.tokopedia.com/nihonmart/banana-boat-sunscreen-ultra-protect-faces-lotion-spf-50-60ml?extParam=ivf%3Dfalse%26src%3Dsearch",
        //                     "Img": "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/4/27/e1a69395-ebe8-46a3-8dea-aa59535545b4.png",
        //                     "DiscountPercentage": 0,
        //                     "OriginalPrice": 0,
        //                     "Price": 135900,
        //                     "Rating": 5,
        //                     "ShopInfo": {
        //                         "Id": "",
        //                         "Name": "nihonmart",
        //                         "Url": "https://www.tokopedia.com/nihonmart",
        //                         "City": "Jakarta Utara"
        //                     },
        //                     "Key": {
        //                         "Marketplace": "Tokopedia",
        //                         "Keyword": "lotion",
        //                         "Barang": "lotion"
        //                     }
        //                 }
        //             ],
        //             "TotalPrice": 367200,
        //             "Maretplace": "Tokopedia",
        //             "Score": 6.0276146
        //         }
        //     ]
        // })
    }

    changeSelected(s){
        this.setState({selected:s})
    }

    notifyError(msg){
        toast.error(msg)
    }


    render() {
      return <div className="container rekomendasi">
        <Navbar/>
        <ToastContainer />
        {
            this.state.recc===null?<Loading/>:
            <>
                <div className="cluster">
                    <h2>Daftar Toko</h2>
                    <div className="shops">
                        {
                            this.state.recc?.map((item,index)=>(
                                <Cluster selected={index==this.state.selected} item={item} change={this.changeSelected} index={index}/>
                            ))
                        }
                    </div>
                
                </div>
                <div className="line">
                    <div className="kajdf"></div>
                </div>
                <div className="products">
                    <section>
                        <h2>Produk dari toko {this.state.recc[this.state.selected].Products[0].ShopInfo.Name}</h2>
                        <div className="products-container">
                            {
                                this.state.recc[this.state.selected]?.Products.map(item=>(
                                    <Product item={item}/>
                                ))
                            }
                        </div>
                    </section>
                    <section>
                        {
                            this.state.recc[this.state.selected]?.AltProducts.length>0&&
                            <>
                            <h2>Alternatif produk dari toko {this.state.recc[this.state.selected].Products[0].ShopInfo.Name}</h2>
                            <div className="products-container">
                                {
                                    this.state.recc[this.state.selected]?.AltProducts.map(item=>(
                                        <Product item={item}/>
                                    ))
                                }
                            </div>
                            </>
                        }
                    </section>
                </div>
            </>
        }
      </div>;
    }
  }

  export default RekomendasiView;