import React,{useContext} from 'react'
import gif from "../assets/QR.gif"
import {SubmitContext} from "../SubmitContext";
import {QrContext} from "../QrContext";
import { saveAs } from 'file-saver'
import { useToasts } from "react-toast-notifications";

function Result() {
  const { addToast } = useToasts();
    // eslint-disable-next-line
    const [submit,setSubmit] = useContext(SubmitContext);
    // eslint-disable-next-line
    const [text,setText] = useContext(QrContext);
    const downloadImage = () => {
      addToast("Downloading...!", { appearance: "success" });
        saveAs(`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}`, `${text}.png`) // 
    }
    if(submit===true){
        return(
            <div><section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img className="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}`}/>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={downloadImage}>Download</button>
            </div>
          </section></div>
        );
    }else{
        return (
            <div><section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img class="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={gif}/>
            </div>
          </section></div>
          )
    }
}

export default Result