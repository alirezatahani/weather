function success(pos) {
  console.log(pos, 'success');

  var crd = pos.coords;
  return {
    lat: crd.latitude,
    lang: crd.longitude,
  };
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(success, error);
  } else {
    return null;
  }
}
