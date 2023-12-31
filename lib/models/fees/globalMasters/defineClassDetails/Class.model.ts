// Import
import mongoose from 'mongoose';





// Class Schema
const ClassSchema = new mongoose.Schema(
    {
        class_name:{type:String, required:true, unique:true},
        wing_name:{type:String, required:true},
        school:{type:String, required:true},
        order:{type:Number, required:true},
        sections:[String]
    },
    {
        timestamps:true
    }
);





// Export
const Class = mongoose.models.Class || mongoose.model('Class', ClassSchema);
export default Class;