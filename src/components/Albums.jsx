import React,{useEffect, useState} from 'react'
import axios from 'axios'
import AlbumItems from './AlbumItems'
import LoadMore from './LoadMore'
import Loading from './Loading'

export default function Albums() {

const [Albums, setAlbums] = useState([])
const [ShowItems, setShowItems] = useState(4)
const [loading, setloading] = useState(true)
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(res=>
                setAlbums(res.data),
                setloading(false)
            )
        .catch(err=>console.log(err))
    }, [])

    const HandleNext=()=>{
        setShowItems( ShowItems>=Albums.length?ShowItems: ShowItems+4 )
    }
 
    return (
        <div className="m-4">
                {loading?
                    <div style={{marginTop:'15vh'}}><Loading/></div>:(

                     Albums.slice(0,ShowItems).map((item)=>(
                     <div key={item.id} className="border m-2 shadow p-3 mb-5 bg-white rounded ">
                        <div className="p-2">
                            <h3>{item.title}</h3>
                            <span>id: {item.id}, </span>
                            <span>userId: {item.userId}</span>  
                        </div>
                    <hr/>
                    <div className="p-3">
                        <AlbumItems key={item.id} id={item.id}/>
                    </div>
                 </div>
                )
                ))}
                {
                <LoadMore nextClick={HandleNext}/>
                }
        </div>
    )
}
