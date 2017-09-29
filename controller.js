module.exports = {
  getPlanes: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    dbInstance.get_planes()
      .then(planes => res.status(200).send(planes))
      .catch(error => console.log(error))
  },

  addPlane: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { planetype, passengercount } = req.body;

    dbInstance.add_plane({ planetype, passengercount })
      .then(planes => res.status(200).send(planes))
      .catch(error => console.log(error))
  }
}
