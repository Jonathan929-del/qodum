// Import
import mongoose from 'mongoose';





// ConcessionType Schema
const ConcessionTypeSchema = new mongoose.Schema(
    {
        type:{type:String, required:true, unique:true}
    },
    {
        timestamps:true
    }
);





// Export
const ConcessionType = mongoose.models.ConcessionType || mongoose.model('ConcessionType', ConcessionTypeSchema);
export default ConcessionType;