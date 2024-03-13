const mongoose =require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    username: String,
    uname: String,
    uemail: String,

    //trophyPoints: Int,
},{
    collection: "userDetail",
})

mongoose.model("userDetail", userDetailsSchema);