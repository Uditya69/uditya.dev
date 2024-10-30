"use client";
import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import Loader from '../shared/loader';
interface pics{
    id:string;
    caption:string;
    src:string;
}
async function getpics():Promise<pics[]>{
    const snapshot= await getDocs(collection(db,"Gallery")); 
    const data:pics[]=[];
    snapshot.forEach((doc)=>{
        data.push({id:doc.id,...doc.data()} as pics);
    });
    return data;
}
function Fetch() {
    const [loading,setLoading]=React.useState(true);
    const [pics,setPics]=React.useState<pics[]>([]);
    React.useEffect(()=>{
        async function fetchdata(){
            const data= await getpics();
            
            if(data){
                setPics(data);
                setLoading(false);
            }

        }
        fetchdata();
    },[]);

    if(loading){
        return(
            <Loader/>
        )
    }
  return (
    <div className=' grid grid-cols-2 gap-2'>
        {pics.map((pic)=>(
            <div key={pic.id}>
                <div className="">
                    <img src={pic.src} alt="" className='rounded-md' />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Fetch