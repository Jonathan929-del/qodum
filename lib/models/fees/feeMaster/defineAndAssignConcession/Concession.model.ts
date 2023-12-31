// Import
import mongoose from 'mongoose';





// Concession Schema
const ConcessionSchema = new mongoose.Schema(
    {
        name:{type:String, required:true, unique:true}
    },
    {
        timestamps:true
    }
);





// Export
const Concession = mongoose.models.Concession || mongoose.model('Concession', ConcessionSchema);
export default Concession;