import React,{useContext} from 'react'
import {QrContext} from "../QrContext";
import {SubmitContext} from "../SubmitContext";
import { useToasts } from "react-toast-notifications";

function Input() {
  const { addToast } = useToasts();
    const [text,setText] = useContext(QrContext);
    // eslint-disable-next-line
    const [submit,setSubmit] = useContext(SubmitContext);
  return (
    <div>
        <div className="p-2 w-full">
          <form onSubmit={(e)=>{
              e.preventDefault();
              if(text.length<=0){
                addToast("Please Enter Your Text..!", { appearance: "warning" });
              }else{
                setSubmit(true);
              }
          }}>
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Hey There..!! Welcome to QR Code Generator Website.You can create your QR Code from here.Enter your item which you need to convert into a QR Code And press the enter in Keyboard.Have a nice day. 😊</label>
            <input type="text" id="email" name="text" value={text} autoComplete="off" onChange={ (e)=>{
                setSubmit(false);
                setText(e.target.value)
            } }className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out outline-0 bg-orange-100 border-l-4 border-orange-500"/>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Input