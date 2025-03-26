const MenuItem = require("../models/MenuItem");
const Menu = require("../models/Menu");
exports.createMenuItem = async (req, res) => {
    console.log(req.body)

    // const menuItem = new MenuItem(req.body);
    // await menuItem.save();
    // await Menu.findByIdAndUpdate(req.body.menu, { $push: { items: menuItem._id } });
    // res.status(201).json(menuItem);
};