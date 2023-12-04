
function init() {
    let myMap = new ymaps.Map("map", {
            center: [53.98003, 27.662807],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        })

    myMap.geoObjects
        .add(new ymaps.Placemark([53.98003, 27.662807], {
            balloonContent: '<strong>СТО</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
}


ymaps.ready(init);