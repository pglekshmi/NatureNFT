const MetaDataSet = require("../Metadata");

module.exports = async (req, res) => {
    const { id } = req.query;
    // console.log(MetaDataSet[id]);
    res.json(JSON.parse(JSON.stringify(MetaDataSet[id])))
}