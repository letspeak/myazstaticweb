import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://azapi.vsesdns.com/myapi/hello",
         { mode: 'no-cors'},
         {headers:  new Headers({
          'Ocp-Apim-Subscription-Key': '620975c7ee634406a4c4214cd79b2e05',
          'content-type': 'application/json'
        })
        }
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
        }
        console.log(response)
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;