import React from 'react'
import { ethers } from 'ethers'
const Buy = ({ state }) => {
    const buyGift = async (e) => {
        e.preventDefault()
        const { contract } = state;
        try {
            const name=document.getElementById('name').value;
            const message=document.getElementById('message').value;
            console.log(name,message);
            const amount={value:ethers.parseEther('0.001')};
            const tx=await contract.buygift(name,message,amount);
            await tx.wait();
            console.log('Gift bought');

        } catch (error) {
            console.log('Error buying gift',error);
        }
    }
    return (
        <div>
            <form onSubmit={buyGift}>
                <input type="text" id="name"></input>
                <input type="text" id="message"></input>
                <button>PAY</button>
            </form>
        </div>
    )
}

export default Buy
