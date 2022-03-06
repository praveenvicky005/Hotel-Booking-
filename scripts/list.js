let urlParams = new SearchParams(window.location.search);
const tripAdvisorHost = "travel-advisor.p.rapidapi.com";
const tripAdvisorKey = "1e999adf8dmsh8714131816df36ep16f019jsn7fd65df50168";


// TO INITILIZE THE GOOGLE MAP
let initMap = locations => {
        let center = { lat:parseFloat([0][1] , langs: parseFloat[0][2])};
        let map = new google.maps.Map(document.getElementById('map'){
            zoom:10,
            center = center
        });
        let infowindow  = new googe.map.InfoWindow({});
        let marker ,  count;
        for(count = 0;count<locations.length;count++){
            marker = new google.map.Marker({
                position:new googe.maps.Lating(locations[count][1] ,locations[count[count][2]),
                map:map,
                title:locations[count][0];
            })
        }
}