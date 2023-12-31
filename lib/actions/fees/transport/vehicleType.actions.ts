'use server';
// Imports
import {connectToDb} from '@/lib/mongoose';
import VehicleType from '@/lib/models/fees/transport/VehicleType.model';





// Create vehicle type props
interface CreateVehicleTypeProps{
    vehicle_name:String;
};
// Create vehicle type
export const createVehicleType = async ({vehicle_name}:CreateVehicleTypeProps) => {
    try {

    
        // Database connection
        connectToDb('accounts');


        // Checking if the vehicle type already exists
        const existingVehicleType = await VehicleType.findOne({vehicle_name});
        if(existingVehicleType){
            throw new Error('Vehicle type already exists');
        };


        // Creating new vehicle type
        const newVehicleType = await VehicleType.create({vehicle_name});
        newVehicleType.save();


        // Return
        return newVehicleType;


    } catch (err:any) {
        console.log(`Error Creating Vehicle Type: ${err.message}`);
    }
};





// Fetch vehicle types
export const fetchVehicleTypes = async (pageNumber = 1, pageSize=20) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching vehicle types
        const vehicleTypes = await VehicleType.find();
        return vehicleTypes;

    } catch (err:any) {
        throw new Error(`Error fetching vehicle types: ${err}`);
    }
};





// Modify vehecle types props
interface ModifyVehicleTypesProps{
    id:String;
    vehicle_name:String;
}
// Modify vehicle type
export const modifyVehicleType = async ({id, vehicle_name}:ModifyVehicleTypesProps) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Checking if the vehicle name exists
        const vehicleTypes = await VehicleType.find();
        const existingVehicleType = await VehicleType.findById(id);
        if(existingVehicleType.vehicle_name !== vehicle_name && vehicleTypes.map(i => i.vehicle_name).includes(vehicle_name)){throw new Error('Vehicle name already exists')};


        // Update vehicle type
        const updatedVehicleType = await VehicleType.findByIdAndUpdate(id, {vehicle_name}, {new:true});


        // Return 
        return updatedVehicleType;

    } catch (err) {
        throw new Error(`Error updating vehicle name: ${err}`);
    }
};





// Delete vehicle type
export const deleteVehicleType = async ({id}:{id:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Deleting vehicle type
        await VehicleType.findByIdAndDelete(id);
        return 'Vehicle type deleted';

    } catch (err) {
        throw new Error(`Error deleting vehicle type: ${err}`);      
    }
};