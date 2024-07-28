
import { createSlice } from '@reduxjs/toolkit'
const SliceForMail = createSlice({
    name: 'mailbox',
    initialState: {
      login:localStorage.getItem('email'),
      count:0,
      composeStatus:true,
      mail:{},
      inboxactive:true,
      sendactive:false,
      sendCount:0
    },
    reducers: {
      handleCount:state=>{state.count=state.count+1},
      handleCompose:state=>{state.composeStatus= !state.composeStatus},
      handleLogin: state =>{
        if (localStorage.getItem('email')) state.login = true;
        else state.login = false
      },
      mailShow:(state,action)=>{
        state.mail = action.payload
      },
      handleAddCount:(state,action)=>{
        state.count = action.payload
      },
      handleActive:(state,action)=>{
        if (action.payload==='Inbox'){
          state.inboxactive=true;
          state.sendactive=false;
        }
        else if (action.payload==='Send Items') {
          state.inboxactive=false;
          state.sendactive=true;
        }
      },
      handleSendCount:(state,action)=>{
        state.sendCount = action.payload
      }
    }
  })
  
  export const {handleCompose, handleLogin,mailShow,handleCount,handleAddCount,handleActive,handleSendCount } = SliceForMail.actions

  export default SliceForMail;