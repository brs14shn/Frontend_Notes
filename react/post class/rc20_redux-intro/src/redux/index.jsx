

//! index.js ile file açılırsa redux/index.js olarak belirtmemize gerek kalmıyor***


const initialState = {
    counter:0,
}

//* counter value state olarak tanımladık.


//? Durum makinesi mantığı
const reducer = (state=initialState,action) =>{

    switch (action.type) {
        case "INCREMENT":
        return {counter: state.counter +1}
        case "DECREMENT":
        return {counter: state.counter - 1}
        case "RESET":
        return {counter: state.counter * 0}
    
        default:
           return state;
    }

}

export default reducer
//! reducer her zaman bir state döndürmek zorundadır...