import {createSlice} from "@reduxjs/toolkit"
let initialState = JSON.parse(localStorage.getItem("cart"))||  []
let Cartslice = createSlice({
    name:"cart",
    initialState ,
    reducers:{
        add(state,action){
            let item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.push(action.payload);
            }
            localStorage.setItem("cart",JSON.stringify(state))
        },
        remove(state,action){
            let rmv = state.filter((item)=>item.id!==action.payload.id)
            localStorage.setItem("cart",JSON.stringify(rmv))
            return rmv
        },
        increment(state,action){
            let item = state.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity += 1
            }
            localStorage.setItem("cart",JSON.stringify(state))
        },
        decrement(state,action){
            let item1 = state.find((item)=>item.id===action.payload.id)
            if(item1.quantity>1){
                item1.quantity -= 1
            }
            localStorage.setItem("cart",JSON.stringify(state))
        }
    }
})
export let{add,remove,increment,decrement} = Cartslice.actions
export default Cartslice.reducer