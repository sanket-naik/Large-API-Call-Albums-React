import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import '../Css/AlbumItems.css'

export default function AlbumItems({id}) {

    const [Album, setAlbum] = useState([])

    var settings = {
        dots: false,
        infinite: true,
        rewind: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: false,
        
      };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
         .then(res=>
                setAlbum(res.data)
              )
         .catch(err=>console.log(err))
     }, [])

     

    return (
        <div>
               <Slider {...settings}>
                   {
                    Album.map((item)=>(
                            <div key={item.id} className="text-center">
                                <img className="center" src={item.thumbnailUrl} alt={item.id}/>
                                <label>{
                                    item.title.length>15?
                                    item.title.substring(0,15):
                                    item.title
                                    }...</label>
                                <h6>Id:{item.id}</h6>
                            </div>
                             ))
                   }
                </Slider>
                </div>
          )
}
