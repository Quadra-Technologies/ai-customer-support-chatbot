const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    requirement:{
        type:String
    },

    status:{
        type:String,
        enum:["New","Contacted","Qualified","Won","Lost"],
        default:"New"
    },

    source:{
        type:String,
        default:"Website"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Lead", leadSchema);