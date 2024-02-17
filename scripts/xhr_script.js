// Indicates that the xhr_script.js file has been successfully loaded
console.log('xhr_script.js loaded');

// Define the URL for fetching photo data
let url_piks = 'https://jsonplaceholder.typicode.com/photos';

// Create a new instance of the XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Define a function that will be invoked when the status of the request changes.
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Check if the request is completed
        if (xhr.status === 200) { // Check if the request was successful
            let data = JSON.parse(xhr.responseText); // Parse the JSON response

            // Update the source and alt attributes of the first image
            document.getElementById('photo1').src = data[0].url;
            document.getElementById('photo1').alt = data[0].title;
            // Update the text content of the figcaption for the first image
            document.querySelector('#fakeImg_1 figcaption').textContent = data[0].title;

            // Check whether there are several photos accessible.
            if(data.length > 1) { 
                // Update the source and alt attributes of the second image
                document.getElementById('photo2').src = data[1].url;
                document.getElementById('photo2').alt = data[1].title;
                // Update the text content of the figcaption for the second image
                document.querySelector('#fakeImg_2 figcaption').textContent = data[1].title;
            }
        } else {
            // If the request fails, please log an error message.
            console.error('Failed to load data:', xhr.statusText);
        }
    }
};

// Configure the XMLHttpRequest to send a GET request to the supplied URL.
xhr.open('GET', url_piks, true);

// This is to send the request
xhr.send();
