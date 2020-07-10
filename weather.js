const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccesss(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };

  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("cant error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccesss, handleGeoError); // 나의 위치
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    // undefined
    askForCoords();
  } else {
  }
}

function init() {
  loadCoords();
}
init();
