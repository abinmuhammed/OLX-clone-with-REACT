import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,Authcontext } from '../../Store/Context';
const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user} =useContext(Authcontext)
  const [Name,SetName]=useState('')
  const [Category,SetCategory]=useState('')
  const [Price,SetPrice]=useState('')
  const [image,SetImage]=useState('')
  const date=new Date()
  const handleSubmit=()=>{
    console.log("12");
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      console.log("12")
      ref.getDownloadURL().then((url)=>{
        console.log(url);
   
        
        // firebase.firestore().collection('products').add({
         
        //   Name,
        //   Category,
        //   Price,
        //   url,
        //   userId:user.uid,
        //   createdAt:date.toDateString()
        // })
      })
    })
  }
  return (
    
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              onChange={(e)=>{
                SetName(e.target.value)
              }}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e)=>{
                SetCategory(e.target.value)
              }}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" onChange={(e)=>{
                SetPrice(e.target.value)
              }} type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{
               SetImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
