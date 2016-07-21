// gps example with promises
import {Camera} from 'ionic-native';

Camera.getPicture().then(
  res => console.log("We have taken a picture!"),
  err => console.error("Error taking picture", err)
);


// Geolocation example with observables
import {Geolocation} from 'ionic-native';

Geolocation.watchPosition().subscribe(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});
