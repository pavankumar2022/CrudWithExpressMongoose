import User from "../model/schema.js";
class studentController {

             //create document

    static createDoc = async(req,res)=>{
       try {
           const{name,age,fees} = req.body;
            const document = new User({
                name:name,
                age:age,
                fees:fees
            });
             const result = await document.save();
               // console.log(result);
             res.redirect("/students");
           } catch (error) {
            console.log("Error in data submited to mongodb is "+error);
        }
   }

              //Retriev data from database

    static getAllDoc = async(req,res) =>{
        try {
            const result = await User.find();
           // console.log(result);
            res.render("index",{data:result});
        } catch (error) {
            console.log("Error in getting data from mongodb is "+error);
        }
      }

                //edit document

    static editDocById = async(req,res)=>{
        try {
            //console.log(req.params.id);
            const result = await User.findById(req.params.id);
            //console.log(result); 
            res.render("edit",{data:result});
        } catch (error) {
            console.log("Error in editing..."+error);
        }
       
    }

              //update document

    static updateDocById = async(req,res) => {
        try {
            //console.log(req.params.id);
           // const {name,age,fees} = req.body;
           // const document = {name,age,fees};
            //await User.findByIdAndUpdate(req.params.id,document); 
            await User.findByIdAndUpdate(req.params.id,req.body);        
            res.redirect("/students");   
        } catch (error) {
            console.log("Error in update "+error);
        }
    }

                   //delete document

    static deleteDocById = async(req,res) =>{
        //console.log(req.params.id);
        const id = req.params.id;
        try {
            await User.findByIdAndDelete(id);
            res.redirect("/students");
            
        } catch (error) {
            console.log("Error in deleting document is "+error);
        }
    }

}

export default studentController;