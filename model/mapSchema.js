const mongoose=require('mongoose');
const mapSchema=new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        value:{type:Number,required:true}
    }
);

module.exports=mongoose.model("Map",mapSchema);