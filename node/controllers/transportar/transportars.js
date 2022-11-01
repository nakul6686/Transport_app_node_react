
const { validateTransportar } = require("../../validation/transportar")
const Transporters = require("../../modals/transportar/Transportar")

const postTransportar = async (req, resp) => {

    let { error } = validateTransportar(req.body);

    if (error) return resp.status(402).json(error.details[0].message)

    let exisistingTransportar = await Transporters.findOne({ email: req.body.email });
    if (exisistingTransportar) return resp.status(402).json("Transporter already exist")
    const newUser = new Transporters({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        company_name: req.body.company_name,
        number_of_busses: req.body.number_of_busses,

    })
    try {
        const user = await newUser.save()
        resp.status(200).json(user)
    } catch (error) {
        resp.send(402).json("bad request")
    }
}

const getallTransportar = async (req, res)=>{

const allUsers = await Transporters.find({});
if(allUsers.length === 0) return res.status(200).json("No Transporters found.")
try {
    res.status(200).json(allUsers)
}catch (err){
    res.status(200).json("Bad users")
}
}





module.exports.postTransportar = postTransportar;
module.exports.getallTransportar = getallTransportar