import React, { Component } from 'react'


////PROPS

//  const Greet =(props)=> {
//     console.log(props)
//      return (<h1>Helllo {props.name}</h1>

//      )
// }
// export default Greet



///////////////////
 
////////// state 

// class Greet extends Component{

//     constructor(){
//         super()
//         this.state ={
//             message:' Welcome Home'
//         }

//     }

//     changeMessage(){
//         this.setState({
//             message:'Thank You For Visit'
//         })
//     }


//     render(){
//         return(

//             <div>
             
//               <h1>{ this.state.message}</h1>
            
//             <button onClick={()=>this.changeMessage()}>Click</button>
//             </div>
           
//         )
//     }
// }

// export default Greet


////////////////////////
//////////destructuring


 const Greet =({name,heroName})=> {
    // console.log(props)
     return (
        <div>
     <h1>Helllo {name} a.k.a {heroName}</h1>
     </div>
     )
}
export default Greet


