import React, { useState } from 'react'
import Client from '../components/Client';
import Editor from '../components/editor';


const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: 'Aditya S' },
    { socketId: 2, username: 'Ayush S' },
    { socketId: 3, username: 'XYZ S' },
  ]);

  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img
              className='logoImage'
              src='/code.png'
              alt="logo"
            />
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
            {clients.map((client) =>(
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className='btn copyBtn'>Copy ROOM ID</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrap'>
      <Editor />
      </div>
    </div>
  )
}

export default EditorPage