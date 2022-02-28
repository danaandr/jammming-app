const clientID ="2e7a77a66f4b4a29861ba2cdff12f3db";
const queryUrl = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://brief-app.surge.sh/';
let accessToken;
const finalQ = `${queryUrl}?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=token`;

const Spotify = {
  getAccessToken(){
      if(accessToken){return accessToken}else{
    const accesto = window.location.href.match(/access_token=([^&]*)/);
    const expin = window.location.href.match(/expires_in=([^&]*)/);
    if(accesto && expin){
        accessToken = accesto[1];
        const expiresIn = Number(expin[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
return accessToken;
    }else{
    window.location = finalQ;
    };
};

},

search(term){
   let acctok = this.getAccessToken();
   return fetch('https://api.spotify.com/v1/search?type=track&q='+term, {headers: {Authorization: `Bearer ${acctok}`}}).then(
           Response => Response.json()).then(
           jsonResponse => {return jsonResponse.tracks.items.map(track =>(
        {
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
        }
        )
        );
    });
},

savePlaylist(playName,trackUri){
const accessToken= Spotify.getAccessToken();
if (!playName || !trackUri.length) {
    return;
  }
    let header = {Authorization: `Bearer ${accessToken}`};
    let userID = '';
    return fetch('https://api.spotify.com/v1/me',{headers: header}).then(
    Response => Response.json()).then(jsonResponse => {
    userID = jsonResponse.id;
    console.log(userID);
    return fetch('https://api.spotify.com/v1/users/'+userID+'/playlists',{
        headers: header,
        method:'POST',
        body: JSON.stringify({name: playName})
    }).then(postPl => postPl.json()).then(playlistres =>
        {
        let playlistID = playlistres.id;
        console.log(playlistID);
        fetch('https://api.spotify.com/v1/users/'+userID+'playlists/'+playlistID+'/tracks',{
        headers: header,
        method:'POST',
        body: JSON.stringify({uris: trackUri})
    });
})})
    
}
};



export default Spotify;