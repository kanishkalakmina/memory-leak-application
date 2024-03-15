import React, { useState, useEffect } from 'react';

const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://939997652e824928b7aad296d43a6d16.api.mockbin.io/',{signal})
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
