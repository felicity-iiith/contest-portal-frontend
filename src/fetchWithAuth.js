window.fetchWithAuth = (url, options = {}) => {
  url = url.startsWith('/') ? url : '/' + url;
  var body = options.body;
  if (body && typeof body.getAll !== 'function') { // is not formdata
    body = new FormData();
    for ( var key in options.body ) {
        body.append(key, options.body[key]);
    }
  }
  return fetch(url, {
    ...options,
    body,
    headers: {
      ...options.headers,
      email: window.email
    }
  })
}
