const MetadataSet = require("../Metadata");
module.exports=async(req,res)=>{
    const {id}= await req.query;
    await res.JSON(JSON.parse(JSON.stringify(MetadataSet[id])));
}