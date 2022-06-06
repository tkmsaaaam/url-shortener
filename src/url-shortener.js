javascript:(
  async () =>{
    try {
      var url = '';
      const locationOrigin = window.location.origin.replace('www.','');
      var locationPath = window.location.pathname;
      if (locationOrigin.startsWith('https://amazon')) {
        var path = locationPath.slice(locationPath.indexOf('/dp/') + 4);
        path = path.substr(0, path.indexOf('/'));
        locationPath = '/dp/' + path;
      };
      url = locationOrigin + locationPath;
      await navigator.clipboard.writeText(url).then( () => {
        alert('copied');
      }, (err) => {
        alert(err);
      });
      if(window.confirm('transition?')) {
        window.location.replace(url);
      }
      return;
    }catch(e){
      console.log(e);
      alert(e);
    }
  }
)();
