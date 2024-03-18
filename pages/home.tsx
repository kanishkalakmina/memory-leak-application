import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
           
            try {
                const response = await fetch('https://89d7afb7090e4521997a00b34ec7743e.api.mockbin.io/');
    
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
    
                const data = await response.json();
                    setData(data);
            } catch (error: any) {
                console.error(error)
            }
        };
    
        fetchData();
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

// import React from 'react';
// import { useQuery } from 'react-query';

// const Home = () => {
//     const { data, isLoading, isError } = useQuery('homeData', async () => {
//         const response = await fetch('https://89d7afb7090e4521997a00b34ec7743e.api.mockbin.io/');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         return response.json();
//     });

//     if (isLoading) {
//         return <div>Loading Home Page...</div>;
//     }

//     if (isError) {
//         return <div>Error fetching data</div>;
//     }

//     return (
//         <div>
//             <h1>Home Page</h1>
//             <div>
//                 {data && (
//                     <div>
//                         <pre>{JSON.stringify(data, null, 2)}</pre>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;
