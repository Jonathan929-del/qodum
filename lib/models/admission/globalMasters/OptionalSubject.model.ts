// Import
import mongoose from 'mongoose';





// Optional Subject Schema
const OptionalSubjectSchema = new mongoose.Schema(
    {
        subject_name:{type:String, required:true, unique:true}
    },
    {
        timestamps:true
    }
);





// Export
const OptionalSubject = mongoose.models.OptionalSubject || mongoose.model('OptionalSubject', OptionalSubjectSchema);
export default OptionalSubject;