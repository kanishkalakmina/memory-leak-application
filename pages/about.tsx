import React, { useState, useEffect } from 'react';
const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://939997652e824928b7aad296d43a6d16.api.mockbin.io/');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                    setData(data);
                    setLoading(false);
      
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, []);
    

    return (
        <div>
            <h1>About Page</h1>
            {loading ? (
                <div>Loading About Page...</div> 
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

export default About;


//==================================================Abort Controller=================================================================

// import React, { useState, useEffect } from 'react';
// const About = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const controller = new AbortController();
//             const signal = controller.signal;
//         const fetchData = async () => {
            
    
//             try {
//                 const response = await fetch('https://939997652e824928b7aad296d43a6d16.api.mockbin.io/', { signal });
                
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
    
//                 const data = await response.json();
    
//                 if (!signal.aborted) {
//                     setData(data);
//                     setLoading(false);
//                 }
//             } catch (error: any) {
//                 if (error.name === "AbortError") {
//                     console.log("Cancelled...!");
//                 }
//             }
//         };
    
//         fetchData();
    
//         return () => {
//             controller.abort();
//         };
//     }, []);
    

//     return (
//         <div>
//             <h1>About Page</h1>
//             {loading ? (
//                 <div>Loading About Page...</div> 
//             ) : (
//                 <div>
//                     {data && (
//                         <div>
//                             <pre>{JSON.stringify(data, null, 2)}</pre>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default About;


//==================================================React Query=================================================================



// import React from 'react';
// import { useQuery } from 'react-query';

// const About = () => {
//     const { data, isLoading, isError } = useQuery('aboutData', async () => {
//         const response = await fetch('https://939997652e824928b7aad296d43a6d16.api.mockbin.io/');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         return response.json();
//     });

//     if (isLoading) {
//         return <div>Loading About Page...</div>;
//     }

//     if (isError) {
//         return <div>Error fetching data</div>;
//     }

//     return (
//         <div>
//             <h1>About Page</h1>
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

// export default About;
