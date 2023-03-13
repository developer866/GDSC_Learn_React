import React from 'react'

function Learning() {
    return (
        <div>
            <GasPLanet />
            {/* <Filter /> */}
        </div>
  )
}

const GasPLanet= () => {
        
    const planets = [
        {name:'Mars',isGasPLanet:false},
        {name:'Earth',isGasPLanet:true},
        {name:'Jupiter',isGasPLanet:true},
        {name:'Venus',isGasPLanet:false},
        {name:'Neptune',isGasPLanet:true}
    ]

    return (
        <div>
            {planets.map((planet)=>{
                return<h1>
                    {planet.isGasPLanet?planet.name:""}
                </h1>
})}
        </div>
    )
}

// const Filter = ()=>{
//     const planets = [
//         {name:'Mars',isGasPLanet:false},
//         {name:'Earth',isGasPLanet:true},
//         {name:'Jupiter',isGasPLanet:true},
//         {name:'Venus',isGasPLanet:false},
//         {name:'Neptune',isGasPLanet:true}
//     ]
//     const gasTrue = () =>{
//         return(planets.isGasPLanet !== false)
//     }

//     const newPLanet = planets.Filter(gasTrue)

//     return (
//         <div>
//             {newPLanet.map((plank) =>{
//                 return <h1>{plank}</h1>
//             })}

//         </div>
//     )
// }


export default Learning