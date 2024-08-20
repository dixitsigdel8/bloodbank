const UserModel = require("../db/models/user")
const signup = async (req,res)=>{
    try {
        const body = req.body;
        console.log(body)
         
        const newUser = await UserModel.create({
            role: body.role,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
            organizationName: body.organizationName,
            hospitalName: body.hospitalName,
            website: body.website,
            address: body.address,
            phone: body.phone
            

        })
        if(!newUser) {
            return res.status(400).json({
                status: "fail",
                message: "Failed to create the user"
            })
        }
        return res.status(200).json({
            status: "success",
            data: newUser
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error
        })
    }

}

module.exports = {signup};