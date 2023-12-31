'use server';
// Imports
import {connectToDb} from '@/lib/mongoose';
import TermMaster from '@/lib/models/admission/globalMasters/tcDetails/TermMaster.model';





// Create term master props
interface CreateTermMasterProps{
    term_name:String;
};
// Create term master
export const createTermMaster = async ({term_name}:CreateTermMasterProps) => {
    try {

    
        // Database connection
        connectToDb('accounts');


        // Checking if the term name already exists
        const existinTermMaster = await TermMaster.findOne({term_name});
        if(existinTermMaster){
            throw new Error('Term master already exists');
        };


        // Creating new term master
        const newTermMaster = await TermMaster.create({term_name});
        newTermMaster.save();


        // Return
        return newTermMaster;

        
    } catch (err:any) {
        console.log(`Error creating term master: ${err.message}`);
    };
};





// Fetch term masters
export const fetchTermMasters = async () => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching
        const termMasters = await TermMaster.find();
        return termMasters;

    } catch (err:any) {
        throw new Error(`Error fetching term masters: ${err}`);
    };
};





// Modify term master props
interface ModifyTermMasterProps{
    id:String;
    term_name:String;
}
// Modify term master
export const modifyTermMaster = async ({id, term_name}:ModifyTermMasterProps) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Checking if the term name already exists
        const termMasters = await TermMaster.find();
        const existingTermMaster = await TermMaster.findById(id);
        if(existingTermMaster.term_name !== term_name && termMasters.map(termMaster => termMaster.term_name).includes(term_name)){throw new Error('Term master already exists')};


        // Updating term master
        const updatedTermMaster = await TermMaster.findByIdAndUpdate(id, {term_name}, {new:true});


        // Return
        return updatedTermMaster;

    } catch (err) {
        throw new Error(`Error updating term master: ${err}`);
    };
};





// Delete term master
export const deleteTcTermMaster = async ({id}:{id:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Deleting term master
        await TermMaster.findByIdAndDelete(id);
        return 'Term master deleted';

    } catch (err) {
        throw new Error(`Error deleting term master: ${err}`);      
    };
};