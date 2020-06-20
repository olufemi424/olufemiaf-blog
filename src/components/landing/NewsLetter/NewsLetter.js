import React, { useState } from 'react'
import axios from 'axios'
import { NewsLetterStyles } from './NewsLetterStyles'

export const NewsLetter = () => {
   const [email, setEmail] = useState("");
 
   const handleClick = async (email)=> {
      try {
         const data = {
            members: [
               {
                  email_address: email,
                  status: "subscribed",
                  merge_fields: {
                     FNAME: "Guest",
                     LNAME: "Guest"
                  }
               }
            ]
         };
         
         const postData = JSON.stringify(data);
      
         const options = {
            url: "https://us19.api.mailchimp.com/3.0/lists/80a18afb52",
            method: "POST",
            headers: {
               Authorization: `auth b90d8993e16035e335aa35efabe11de5 - us19`
            },
            body: postData
         };
   
         await axios.post(options)
      }
      catch(err){
         console.log(err)
      }
      
   }

   return (
      <NewsLetterStyles className="news-letter">
         <div className="news-letter-input__group">
            <input onChange={(e) => setEmail(e.target.value)} className="news-letter-input" type="email" name="email" placeholder="✍🏻 olufemiaf@gmail.com" />
            <label htmlFor="name" className="news-letter-input__label">Email</label>
         </div>
         <button onClick={()=> handleClick(email)}>Subscribe to learn more</button> {/* TODO Find a better name for cta here*/}
      </NewsLetterStyles>
   )
}
export default NewsLetter
