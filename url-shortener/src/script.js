(() => {
  try {
    const locationOrigin = window.location.origin.replace("www.", "");
    const locationPath = window.location.pathname;
    const path = locationPath.slice(locationPath.indexOf("/dp/") + 4);
    const id = path.substring(0, path.indexOf("/"));
    if (id) {
      const url = locationOrigin + "/dp/" + id;
      window.location.replace(url);
    }
  } catch (e) {
    console.log(e);
    alert(e);
  }
})();
