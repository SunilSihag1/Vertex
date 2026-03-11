import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    plan_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Plan"
    },

    status:{
        type:String,
        enum:["active","cancelled","expired"],
        default:"active"
    },

    billing_cycle:{
        type:String,
        enum:["monthly","yearly"]
    },

    start_date:Date,

    end_date:Date

},{timestamps:true})

export default mongoose.model("Subscription",subscriptionSchema)