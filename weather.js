const locForm = document.getElementById("location_form");
const longitude = document.getElementById("longitude_input");
const latitude = document.getElementById("latitude_input");
const dataBlock = document.getElementById("weather_data_block");

locForm.addEventListener('submit', (e) => {
    // prevent page from refreshing.
    e.preventDefault();
    Weather();
})

async function Weather()
{
    try {
        if (!longitude.value && !latitude.value)
        {
            dataBlock.innerHTML="You must enter Longitude and Latitude"
        } else {

            // User entered location, call our server with that location
            const server_url = `http://localhost:3000/weather/${longitude.value}/${latitude.value}`;
            // default is GET
            let res = await fetch(server_url);
            // try reading response body as text
            // if response body is json we'll call res.json();
            let data = await res.text();
            if (res.ok)
            {
                dataBlock.innerHTML=data;
            } else {
               throw new Error(data);
            }
        }
    } catch (err)
    {
        dataBlock.innerHTML=err.message;
        console.log(err);
    }
}