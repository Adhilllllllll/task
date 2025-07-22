import React, { Component } from "react";

class Class extends Component{

//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//     }

//     increment(){
//         // this.state.count =  this.state.count +1
//     //     this.setState({
//     //         count: this.state.count +1
           
//     //     },
//     // ()=>{
//     //     console.log('callback value', this.state.count)
        
//     // })

//     this.setState((prevState)=>({
//         count:prevState.count +1
//     }))
//          console.log(this.state.count)
        
//     }     
   

//     incrementFive(){
//         this.increment()
//          this.increment()
//           this.increment()
//            this.increment()
//             this.increment()
//     }

//     render(){
//         return (
//             <div>
//                <div> Count - {this.state.count}</div>
//                 <button onClick={()=>this.incrementFive()}>increment</button>
//             </div>
//         )
//     }
// }
// export default Counter

////////////////////


render(){
    const {name,heroName}= this.props
    // const {state1,state2}=this.state
    return(
        <h1>
            Welcome {name} a.k.a {heroName}
        </h1>
    )
}
}

export default Class