const locationButton = document.querySelector('.getLocation');

function gotLocation(position){
console.log(position);
}
function failedFunction(){
    console.log('There was some issue');
}


locationButton.addEventListener('click', async () => {
const result = navigator.geolocation.getCurrentPosition( gotLocation,failedFunction);
})
