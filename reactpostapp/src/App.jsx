import { useState } from "react";
import "./App.css";

function Quote() {
  const [clapCount, setClapCount] = useState(5);

  function clap() {
    setClapCount(clapCount + 1);
    console.log("clap tıklandı", clapCount);
  }
  return ( 
    <div className="flex flex-col items-center justify-center my-auto h-screen">
    <div >
      <p>
        "Yalnız tek bir şeye ihtiyacımız vardır, çalışkan olmak..."
      </p>
      </div>
      <div className="flex" >
        <div className="rounded-full bg-black h-[60px] w-[60px] text-white flex items-center justify-center" >{clapCount}</div>
        <button className="bg-[#ffe449]" onClick={clap}>
          Alkışla
        </button>
      </div>
      </div>
    
  );
}

export default Quote;
