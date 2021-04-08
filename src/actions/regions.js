export const fetchRegions = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch('http://[::1]:3000/api/v1/regions')
      .then(resp => resp.json())
      .then(regions => dispatch({ type: "SET_REGIONS", regions }))
  }
}