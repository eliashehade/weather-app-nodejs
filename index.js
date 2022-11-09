
window.addEventListener('load', (event) => {
    console.log("Hello from client js");

    const locForm = document.getElementById("location_form");
    const locInput = document.getElementById("location_input");
    const locweadataBlock = document.getElementById("index_data_block");

locForm.addEventListener('submit', (e) => {
    // prevent page from refreshing.
    e.preventDefault();
    fetchDoubleData();
})

async function fetchDoubleData()
{
    try {
        if (!locInput.value)
        {
            locweadataBlock.innerHTML="You must enter location"
        } else {
            // User entered location, call our server with that location
            const server_url = `http://localhost:3000/index/${locInput.value}`
            // default is GET
            let res = await fetch(server_url);
            // try reading response body as text
            // if response body is json we'll call res.json();
            let data = await res.text();
           
            if (res.ok)
            {
                locweadataBlock.innerHTML=data;
              

            } else {
               throw new Error(data);
            }

        }
        
    } catch (err)
    {
        locweadataBlock.innerHTML=err.message;
        console.log(err);
    }
}})