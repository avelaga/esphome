import React, { useState } from 'react';
import "./components.css"

export default function Post() {

  const [username, setUsername] = useState("sunburstbox");
  const [postBody, setPostBody] = useState("what the fuck did i just see");

  return(
    <div className="post">
      <div className="username">{username}</div>
      <div className="post-body">{postBody}</div>
    </div>  
  );
}