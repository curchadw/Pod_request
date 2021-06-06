let bearer_token = 'BQDcF0pMD6p-41Y0PyN1RJWXjqaX4WEFfzOI4PZNZLSjhh0HKkcMHfcmJ7iaCjm2tqCModIy2fqOJi9E6CpFmCIhYOzsaLk7udRH7ViN2lY5BqTZo-uvJ8dX9PQot-VvuImF6BHJ7IlVjknKdifu04gIHXMeuEPg2InXlglX0-hdZ242toScJEisdFvSVwJMXowiEEKwFUqRmAjY5JZuB8c4z77hsKjyTJAZe1Aifgq8M6R_dkwtiZH5DPnUW7P-zC7qOKzTv1B1AG2l6GfG275b8BmzsDWpCFRNsxCI'
let url = `https://api.spotify.com/v1/shows`

let bearer = 'Bearer ' + bearer_token


const fetch_featured = ()=>{
    let show_id = "2nIvarXvvZcp1cePx69x9N"
    fetch(url+"?ids="+show_id+"&market=US",{
        method:"GET",
        header:{
            'Authorization':bearer,
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((data) => {return data.json()})
    .then((data)=>{console.log(data)})
    .catch(error => {console.error(error)})
}