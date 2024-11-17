import React, { useEffect, useState } from 'react';

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const getMemos = async () => {
            console.log('Getting memos');
            const memos = await contract.getMemos();
            setMemos(memos);
            console.log(memos);
        };
        contract && getMemos();
    }, [contract]);

    // Helper function to format the timestamp
    const formatTimestamp = (timestamp) => {
        const date = new Date(Number(timestamp) * 1000); // Convert BigInt to Number
        return date.toLocaleString(); // Format as a human-readable date and time
    };
    

    return (
        <div>
            {memos.map((memo, index) => (
                <div key={index}>
                    <h3>{memo.name}</h3>
                    <p>{memo.message}</p>
                    <p>{formatTimestamp(memo.timestamp)}</p>
                    <p>{memo.from}</p>
                </div>
            ))}
        </div>
    );
};

export default Memos;
