const Invoice = require('../models/Invoice')
const pdfGenerate = require('../helper/generatePdf')


module.exports = {
    createInvoce : async (req,res)=>{
        const { status ,details ,totalPayment} = req.body
        const { id } = req.owner
        // try{
           const data = await Invoice.create({
                status,
                details,
                totalPayment,
                owner_id : id
            })
            console.log(data.totalPayment)
            await pdfGenerate(data.totalPayment)
            return res.status(200).json({status:"success",data: data})
        // }catch(e){
        //     return res.status(500).json({status : "failed" , message : "Error has occured !", error : e})
        // }
      
    }
}