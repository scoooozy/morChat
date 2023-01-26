import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import {auth,db} from '../firebase'
const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl fixed bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  btn: `w-[20%] bg-green-500`,
};

const SendMessage = ({scroll    }) => {
  const [input, setInput] = useState("");
    const sendMessage = async (e)=>{
        e.preventDefault()
        if(input===''){
            alert('Invalid message')
            return
        }
        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: input,
          name: displayName,
          uid,
          timestamp: serverTimestamp(),
        });
        setInput("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <form className={style.form} onSubmit={sendMessage}>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className={style.input}
        type="text"
        placeholder="Message.."
      />
      <button className={style.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
