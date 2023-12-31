'use server';
// Imports
import {connectToDb} from '@/lib/mongoose';
import GeneralLedger from '@/lib/models/accounts/accounts/GeneralLedger.model';





// Create General ledger props
interface CreateGeneralLedgerProps{
    account_name:String;
    group:String;
    account_type:String;
    opening_balance:Number;
    opening_balance_type:String;
    assign_date:Date;
    is_cash_book:Boolean;
    is_fixed_asset:Boolean;
    depreciation:Number;
};
// Create General ledger
export const createGeneralLedger = async ({account_name, group, account_type, opening_balance, opening_balance_type, assign_date, is_cash_book, is_fixed_asset, depreciation}:CreateGeneralLedgerProps) => {
    try {

    
        // Database connection
        connectToDb('accounts');


        // Checking if general ledger already exists
        const existingGeneralLedger = await GeneralLedger.findOne({account_name});
        if(existingGeneralLedger){
            throw new Error('General ledger already exists');
        };


        // Creating new general ledger
        const newGeneralLedger = await GeneralLedger.create({
            account_name,
            group,
            account_type,
            opening_balance,
            opening_balance_type,
            assign_date,
            is_cash_book,
            is_fixed_asset,
            depreciation
        });
        newGeneralLedger.save();
        return newGeneralLedger;

        
    } catch (err:any) {
        console.log(`Error Creating General Ledger: ${err.message}`);
    }
};





// Fetch General Ledgers
export const fetchGeneralLedgers = async () => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching
        const generalLedgers = await GeneralLedger.find();
        return generalLedgers;

        
    } catch (err:any) {
        throw new Error(`Error fetching general ledgers: ${err}`);
    }
};




// Modify General Ledger Props
interface ModifyGeneralLedgerProps{
    id:String;
    account_name:String;
    group:String;
    account_type:String;
    opening_balance:Number;
    opening_balance_type:String;
    assign_date:Date;
    is_cash_book:Boolean;
    is_fixed_asset:Boolean;
    depreciation:Number;
}
// Modify General Ledger
export const modifyGeneralLedger = async ({id, account_name, group, account_type, opening_balance, opening_balance_type, assign_date, is_cash_book, is_fixed_asset, depreciation}:ModifyGeneralLedgerProps) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Checking if the general ledger already exists
        const generalLedgers = await GeneralLedger.find();
        const existingGeneralLedger = await GeneralLedger.findById(id);
        if(existingGeneralLedger.account_name !== account_name && generalLedgers.map(ledger => ledger.account_name).includes(account_name)){throw new Error('General ledger already exists')};


        // Update General Ledger
        const updatedGeneralLedger = await GeneralLedger.findByIdAndUpdate(id, {account_name, group, account_type, opening_balance, opening_balance_type, assign_date, is_cash_book, is_fixed_asset, depreciation}, {new:true});
        return updatedGeneralLedger;


    } catch (err) {
        throw new Error(`Error updating general ledger: ${err}`);
    }
};




// Delete General Ledger
export const deleteGeneralLedger = async ({id}:{id:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Deleting General Ledger
        await GeneralLedger.findByIdAndDelete(id);
        return 'General Ledger Deleted';

    } catch (err) {
        throw new Error(`Error deleting general ledger: ${err}`);      
    }
};