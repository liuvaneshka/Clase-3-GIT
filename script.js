let posicion = ubicacion => {
    let lat = ubicacion.coords.latitude
    let lon = ubicacion.coords.longitude
    let p = document.createElement("p")
    p.innerText = `Mi ubicacion es ${lat} y ${lon}`
    document.body.appendChild(p)
}

navigator.geolocation.getCurrentPosition(posicion)