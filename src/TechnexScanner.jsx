import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

export default function TechnexScanner() {
  const { event_name } = useParams();
  const [scanResult, setScanResult] = useState({name:"",username:""});
  const [status, setStatus] = useState("idle");

  const handleScan = async (result) => {
    setStatus("scanning...");

    const res=await fetch(`${BACKEND_URL}/api/user/verify-qr`,
        {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                "qr_token":result[0].rawValue,
                "event_name":event_name
            })
        }
    )
    if(res.status==200){
        const resJSON=await res.json()
        console.log(resJSON)
        setStatus("verified");
        setScanResult(resJSON)
    }else if(res.status==401){
        setStatus("user not registered for this event")
        setScanResult({name:"",username:""})
    }else{
        setStatus("invalid")
        setScanResult({name:"",username:""})
    }
    
  };

  return (
    <div className="max-w-[740px] mx-auto w-full h-screen">
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center w-[80%]">
          <Scanner
            formats={["qr_code"]}
            onScan={handleScan}
            styles={{ container: { width: "full", height: "full" } }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center bg-gray-100 w-[80%]">
          <div className="w-full flex">
            <h2 className="text-xl font-bold">Status:</h2>
            <p className="ml-2 text-lg">{status}</p>
          </div>
          <div className="w-full flex">
            <h2 className="text-xl font-bold">Name:</h2>
            <p className="ml-2 text-lg">
              {scanResult.name}
            </p>
          </div>
          <div className="w-full flex">
            <h2 className="text-xl font-bold">Username:</h2>
            <p className="ml-2 text-lg">
              {scanResult.username}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
