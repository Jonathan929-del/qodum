'use server';
// Imports
import {connectToDb} from '@/lib/mongoose';
import DueLimit from '@/lib/models/fees/masterSettings/DueLimit.model';





// Create due limit props
interface CreateDueLimitProps{
    class_name:String;
    fee_type:String;
    late_fee_on_due:Boolean;
    dues_amount:Number;
    is_percent:Boolean;
    heads:String;
    fine_waive_off_setting:String;
};
// Create due limit
export const createDueLimit = async ({class_name, fee_type, late_fee_on_due, dues_amount, is_percent, heads, fine_waive_off_setting}:CreateDueLimitProps) => {
    try {

        // Database connection
        connectToDb('accounts');

    
        // Due limit
        const dueLimit = await DueLimit.create({class_name, fee_type, late_fee_on_due, dues_amount, is_percent, heads, fine_waive_off_setting});
        dueLimit.save();


        // Return
        return dueLimit;

    } catch (err:any) {
        console.log(`Error creating due limit: ${err.message}`);
    };
};





// Fetch due limits
export const fetchDueLimits = async () => {
    try {

        // Database connection
        connectToDb('accounts');

    
        // Due limits
        const dueLimits = await DueLimit.find();


        // Return
        return dueLimits;


    } catch (err:any) {
        console.log(`Error fetching due limits: ${err.message}`);
    };
};





// Modify due limit props
interface ModifyDueLimitProps{
    id:String;
    class_name:String;
    fee_type:String;
    is_percent:Boolean;
    late_fee_on_due:Boolean;
    dues_amount:Number;
    heads:String;
    fine_waive_off_setting:String;
}
// Modify due limit
export const modifyDueLimit = async ({id, class_name, fee_type, late_fee_on_due, is_percent, dues_amount, heads, fine_waive_off_setting}:ModifyDueLimitProps) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Update due limit
        const updateDueLimit = await DueLimit.findByIdAndUpdate(id, {class_name, fee_type, late_fee_on_due, is_percent, dues_amount, heads, fine_waive_off_setting}, {new:true});


        // Return 
        return updateDueLimit;

    } catch (err) {
        throw new Error(`Error updating due limit: ${err}`);
    }
};





// Delete due limit
export const deleteDueLimit = async ({id}:{id:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Deleting due limit
        await DueLimit.findByIdAndDelete(id);
        return 'Due limit deleted';

    } catch (err) {
        throw new Error(`Error deleting due limit: ${err}`);      
    }
};





// Fetch class due limit
export const fetchClassDueLimit = async ({class_name}:{class_name:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching
        const dueLimit = await DueLimit.findOne({class_name});
        return dueLimit;

    } catch (err) {
        throw new Error(`Error fetching due limit: ${err}`);      
    }
};