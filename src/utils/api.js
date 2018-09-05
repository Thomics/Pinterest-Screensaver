const getToken = (code) => {

  return $http.post(`https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}`);

}

export default { getToken };