const Model = require('../model');

const { Manufacturer } = Model;

/*eslint-disable*/
const manufacturerController = {
    all (req, res) {
        // Returns all manufacturers
        Manufacturer.find({})
            .exec((err, manufacturers) => res.json(manufacturers));
    },
    create (req, res) {
        const requestBody = req.body;
        const newManufacturer = new Manufacturer(requestBody);

        newManufacturer.save((err, saved) => {
            if(err)
                console.log(err);
            else
                res.json(saved);
        });
    },
};

module.exports = manufacturerController;
