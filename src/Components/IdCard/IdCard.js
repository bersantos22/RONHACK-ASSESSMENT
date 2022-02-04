import React from 'react';


export function IdCard(props){

    return(
<div style={{border:"1px solid black", margin:"20px", width:"400px",height:"170px" ,display:'flex', flexDirection:'row'}}>
            <div style={{padding:'20px'}}>
            <img src={props.picture} alt='picturePerson' />
            </div>
            
            <div style={{padding:'10px', paddingTop:'20px'}}>
                <p><b>Full Name:</b>{props.fullName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Birthday:</b> {props.birthday}</p>
            </div>
</div>
    )
}