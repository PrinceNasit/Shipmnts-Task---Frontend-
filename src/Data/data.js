import axios from 'axios';

const API_URL="https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c";


export const giveData=async ()=>{
    try{
        const res=await axios.get(API_URL);
        let data=res.data.substring(16,)
        // data = data.replace(/'/g, '"')
        data=data.replace(";","");
        data=JSON.parse(data);
        console.log(data);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}
