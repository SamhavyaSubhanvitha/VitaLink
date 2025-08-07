function getLocation() {
  const status = document.getElementById('locationStatus');
  if (!navigator.geolocation) {
    status.innerText = "Geolocation not supported.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      status.innerText = `Location: Lat ${position.coords.latitude}, Lng ${position.coords.longitude}`;
    },
    () => {
      status.innerText = "Location access denied by user";
    }
  );
}
