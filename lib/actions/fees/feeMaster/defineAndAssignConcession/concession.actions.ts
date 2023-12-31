'use server';
// Imports
import {connectToDb} from '@/lib/mongoose';
import Concession from '@/lib/models/fees/feeMaster/defineAndAssignConcession/Concession.model';





// Create Concession Props
interface CreateConcessionProps{
    name:String;
};
// Create Concession Year
export const createConcession = async ({name}:CreateConcessionProps) => {
    try {

    
        // Database connection
        connectToDb('accounts');


        // Checking if the concession name already exists
        const existingConcession = await Concession.findOne({name});
        if(existingConcession){
            throw new Error('Concession name already exists');
        };


        // Creating new concession
        const newConcession = await Concession.create({name});
        newConcession.save();


        // Return
        return newConcession;

        
    } catch (err:any) {
        console.log(`Error Creating Concession: ${err.message}`);
    }
};





// Fetch concessions
export const fetchConcessions = async (pageNumber = 1, pageSize=20) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching concessions
        const concessions = await Concession.find();
        return concessions;

    } catch (err:any) {
        throw new Error(`Error fetching concessions: ${err}`);
    }
};





// Modify Concession Props
interface ModifyConcessionProps{
    id:String;
    name:String;
}
// Modify concession with id
export const modifyConcession = async ({id, name}:ModifyConcessionProps) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Checking if the concession name already exists
        const concessions = await Concession.find();
        const existingConcession = await Concession.findById(id);
        if(existingConcession.name !== name && concessions.map(i => i.name).includes(name)){throw new Error('Concession name already exists')};


        // Update concession
        const updatedConcession = await Concession.findByIdAndUpdate(
            id,
            {
                name
            },
            {new:true}
        );


        // Return 
        return updatedConcession;

    } catch (err) {
        throw new Error(`Error updating concession: ${err}`);
    }
};





// Delete concession
export const deleteConcession = async ({id}:{id:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Deleting concession
        await Concession.findByIdAndDelete(id);
        return 'Concession Deleted';

    } catch (err) {
        throw new Error(`Error deleting concession: ${err}`);      
    }
};