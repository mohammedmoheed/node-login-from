function apiKey(req, res, next) {
  const api_key = "12345";
  const urlkey = req.query.urlkey;

  if (api_key == urlkey) {
    next();
  } else {
    res.send("not found");
  }
}

export default apiKey;
