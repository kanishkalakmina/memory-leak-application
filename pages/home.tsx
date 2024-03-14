import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://89d7afb7090e4521997a00b34ec7743e.api.mockbin.io/',{signal})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if(!signal.aborted){
                    setData(data);
                    setLoading(false);
                }
            })
            .catch(error => {
                if(error.name === "AbortError"){
                console.log("canalled...!")
                }
            });

        return () => {
           controller.abort()
        };
    }, []);

    return ( 
        <div>
            <h1>Home Page</h1>
            {loading ? (
                <div>Loading Home Page...</div> 
            ) : (
                <div>
                    {data && (
                        <div>
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;