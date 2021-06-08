const bearer_token = 'BQDCjYfukMryH1Xcxy8oNZV53hPR4h8_GtLxrkcNhBHHjUsbHbu51abTM3oxAa5QIcwWPG4dJ9DGaLlYQO-qVtFor6YTRBj2IhoG7MXXrH0Mows8OvZoRlAtrM2hMvGreMievuv4eDS47KEtP9FHfAhdzhmcXttyp0t99b2k-skX7HVLSA46085EEL4r9hhBFKqZ-9A7pOkg2uOeao5dcjulDSwi7iOzc_FRpMaYLLwcOd0BxGQ8u63Jcb24z06PP1_InqZp7tzoWHYWgI8W1sZMdh5ed9uv478hVzuX'
const url = `https://api.spotify.com/v1/shows`
const bearer = 'Bearer ' + bearer_token
const header = {
    method:"GET",
    headers:{
    'Authorization': bearer,
    'Accept':'application/json',
    'Content-Type':'application/json',
    }
}
//data.shows[0].explicit
function fetch_featured(){
    
    let show_id = "2nIvarXvvZcp1cePx69x9N"
    fetch(url+"?ids="+show_id+"&market=US",header)
    .then((data) => {return data.json()})
    .then((data)=>{console.log(data)
        let res = `<div class='show_container'>
        <a href='${data.shows[0].uri}'><img src='${data.shows[0].images[1].url}'/></a>
        <div class='description'>
            <h2>${data.shows[0].name}</h2>
            <p>${data.shows[0].description}</p>
            <h3>${data.shows[0].explicit ? "Warning, content may contain language not suitable for childern." : 0}</h3>
            
        </div>
        </div>`

        document.getElementById('feature').innerHTML = res
    })
    .catch(error => {console.error(error)})
}


const first_id = '6xpiit8aJmwDHk1rKdxmri'
const second_id ='08Ft1wtrsnYYHrkTdTQM5s'
const third_id = '3V8TSvhtTRohclApkh2xIu'


const multi_fetch = () =>{
    Promise.all([
        fetch(url + '/' + `${first_id}`,header),
        fetch(url + '/' + `${second_id}`,header),
        fetch(url + '/' + `${third_id}`,header)
    ])
    .then(data =>{
        return Promise.all(data.map(data =>{ return data.json()}))
    })
    .then(data => {
    console.log(data)

    data.forEach(show =>{
            let show_html = `<div class='latest_show'>
            <div class='inner_latest_show'>
                <a href='${show.uri}'><img src='${show.images[1].url}'/></a>
                <h3>${show.name}</h3>
            </div>
            </div>`

            document.getElementById('latest_show').innerHTML += show_html
        })
    })
    .catch(error => {console.error(error)})
}


const fetch_all = () => {
    fetch_featured()
    multi_fetch()
}