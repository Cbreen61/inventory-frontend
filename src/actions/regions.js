export function fetchRegions() {
    fetch('http://[::1]:3000/api/v1/regions', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => console.log(data))



}