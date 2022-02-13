import React from 'react'
import "./antd.css"
import './spec2.css'
import {Card, Avatar, Row } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setMusicList, AddToCart } from "../actions";



function Spec2() {
const musicList = useSelector((state) => state.musicList);
const inputValue = useSelector((state) => state.inputValue);
const cart = useSelector((state) => state.cart)
const dispatch = useDispatch();


     useEffect(() => {
       let mounted = true;
       if (mounted) {
         axios
           .get(
             "https://rss.applemarketingtools.com/api/v2/fr/music/most-played/25/songs.json"
           )
           .then((res) =>
             dispatch(
               setMusicList(
                 res.data.feed.results.map((object) => {
                   return { ...object, price: 120, isInCart: false };
                 })
               )
             )
           )
           .then(console.log(musicList));
       }

       return () => {
         mounted = false;
       };
     }, []);

      const filteredData = musicList.filter((el) => {
        //if no input the return the original
        if (inputValue === "") {
          return el;
        }
        //return the item which contains the user input
        else {
          return el.name.toLowerCase().includes(inputValue);
        }
      });

     

  return (
      
    <Row style={{justifyContent:"center"}}  gutter={{ xs: 8 }}>

   {filteredData.map((card)=> {
       return (
         <Card
         
           className="gutter-row "
           span={6}
           key={card.id}
           style={{ width: 300 , margin: 25}}
           cover={
             <img
               style={{ height: "200px"  }}
               alt={card.kind}
               src={card.artworkUrl100}
             />
           }
           actions={[
             <HeartOutlined  key="like" />,
             <ShoppingCartOutlined style={card.isInCart ? { fontSize: '16px', color: 'green' } :{} } onClick={(e) => {e.stopPropagation(); cart.filter((item) => item.id === card.id).length === 0
               ? dispatch(AddToCart(card))
               : alert("Song already in Cart.");}} key="addToCart" />
           ]}
         >
           <Meta
             avatar={<Avatar src={card.artworkUrl100} />}
             title={card.name}
             description={card.artistName}
           />
         </Card>
       );
   })}

    </Row>
    
  );
}

export default Spec2