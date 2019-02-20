let posicion = ubicacion => {
    console.log(ubicacion.coords.latitude)
    console.log(ubicacion.coords.longitude)
}

navigator.geolocation.getCurrentPosition(posicion)