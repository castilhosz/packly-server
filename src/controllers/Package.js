const { rastro } = require('rastrojs');

module.exports = {
  async track(req, res) {
    const { code } = req.body;

    const api = await rastro.track(code);
    const data = api[0].tracks;

    return res.json(data);
  }
}