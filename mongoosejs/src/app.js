const mongoose = require("mongoose");
const validator = require("validator");
// connection creation and creating a new db
mongoose.connect("mongodb://localhost:27017/nfc_collection");

// schema
// A Mongoose schema defines the structure of the document,
// default values, validators, etc.,

const nfcFabricSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 2,
        maxlength: 20
    },
    ftype : {
       type: String,
       lowercase: true,
        enum: ["net", "georgette", "readymade"]
    },
    color: String,
    material: String,
    active: Boolean,
    price: {
        type: Number,
        validate: {
            validator: function(v){
                return v < 1000
            },
            message: "price must not be more than 1000"
        }
    },
    date: {
        type: Date,
        default: Date.now,
        validate(value){
            if(!validator.isDate(value)){
                throw new Error("Date is Invalid");            }
        }
    }
})

//A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
// default values, validators, etc., whereas a Mongoose model 
// provides an interface to the database for creating,
// quering, updating, deleting records, etc.

// collection creation
// new mongoose.model("collection_name", schema_instance)
const Fabriclist = new mongoose.model("Fabriclist", nfcFabricSchema);

//create document or insert
const createDocument = async() => {
   try{
    //     const nfcGeorgettelist = new Fabriclist({
    //     name: "Georgette",
    //     ftype: "soft",
    //     color: "Red",
    //     material: "netlike",
    //     price: 400,
    //     active: true
    // }) 
    // const nfcNetlist = new Fabriclist({
    //     name: "Net",
    //     ftype: "soft",
    //     color: "Black",
    //     material: "Net",
    //     price: 300,
    //     active: true
    // })
    // const nfcPashminalist = new Fabriclist({
    //     name: "Pashmina",
    //     ftype: "soft",
    //     color: "Red",
    //     material: "Woolen",
    //     price: 890,
    //     active: true
    // }) 
    const nfcReadymadelist = new Fabriclist({
        name: "Kurtis",
        ftype: "net",
        color: "Red",
        material: "Cotton",
        price: 140,
        active: true,
        date: "2020-3-9"
    })
const result = await Fabriclist.insertMany([nfcReadymadelist]);
console.log(result);
}catch(err) {
    console.log(err);
}
}
createDocument(); 

const getDocument = async () => {
    const result = await Fabriclist
    //.find($and : [{color:"Red", price: {$gt: 500}}])
    .find({$or : [{color:"Red"}, 
    {price: {$gt: 500}}]})
    .select({name:1})
    .sort({name: -1});
   // .select({name: 1})
    // .limit(1);
    console.log(result);
}

 // getDocument();
const updateDocument = async(_id) => {
    try{
      // const result = await Fabriclist.updateOne({_id},{
       const result = await Fabriclist.findByIdAndUpdate({_id},{
            $set: {
                ftype: "Soft"
            }},
            {new: true}
        );
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// updateDocument("62675136a8ce8557f9b87617");

const deleteDocument = async() => {
    try{
    //    const result = await Fabriclist.deleteOne({name: 'Georgette'});
        const result = await Fabriclist.findByIdAndDelete();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// deleteDocument();