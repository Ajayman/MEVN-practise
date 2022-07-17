const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
})

employeeSchema.pre("save", async function (next) {
    // const passwordHash = await bcrypt.hash(password, 10);
    console.log(`the current password is ${this.password}`);
    next();
})

//we need to create a collections

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;