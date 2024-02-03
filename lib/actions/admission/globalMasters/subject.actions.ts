'use server';
// Imports
import {connectToDb} from '@/lib/mongoose';
import Subject from '@/lib/models/admission/globalMasters/Subject.model';





// Create subject props
interface CreateSubjectProps{
    subject_name:String;
    available_seats:Number;
    is_university:Boolean;
};
// Create subject
export const createSubject = async ({subject_name, available_seats, is_university}:CreateSubjectProps) => {
    try {

    
        // Database connection
        connectToDb('accounts');


        // Checking if the subject name already exists
        const existingSubject = await Subject.findOne({subject_name});
        if(existingSubject){
            throw new Error('Subject name already exists');
        };


        // Creating new subject
        const newSubject = await Subject.create({subject_name, available_seats, is_university});
        newSubject.save();


        // Return
        return newSubject;


    } catch (err:any) {
        console.log(`Error creating subject: ${err.message}`);
    };
};





// Fetch subjects
export const fetchSubjects = async () => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching
        const subjects = await Subject.find();
        return subjects;

    } catch (err:any) {
        throw new Error(`Error fetching subjects: ${err}`);
    };
};





// Modify subject props
interface ModifySubjectProps{
    id:String;
    subject_name:String;
    available_seats:Number;
    is_university:Boolean;
}
// Modify subject
export const modifySubject = async ({id, subject_name, available_seats, is_university}:ModifySubjectProps) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Checking if the subject name already exists
        const subjects = await Subject.find();
        const existingSubject = await Subject.findById(id);
        if(existingSubject.subject_name !== subject_name && subjects.map(s => s.subject_name).includes(subject_name)){throw new Error('Subject already exists')};

        
        // Update subject
        const updatedSubject = await Subject.findByIdAndUpdate(id, {subject_name, available_seats, is_university}, {new:true});


        // Return
        return updatedSubject;

    } catch (err) {
        throw new Error(`Error updating subject: ${err}`);
    };
};





// Delete subject
export const deleteSubject = async ({id}:{id:String}) => {
    try {

        // Db connection
        connectToDb('accounts');


        // Deleting subject
        await Subject.findByIdAndDelete(id);
        return 'Subject Deleted';

    } catch (err) {
        throw new Error(`Error deleting subject: ${err}`);      
    };
};





// Fetch is university subjects
export const fetchIsUniversitySubjects = async () => {
    try {

        // Db connection
        connectToDb('accounts');


        // Fetching
        const subjects = await Subject.find({is_university:true});
        return subjects;

    } catch (err:any) {
        throw new Error(`Error fetching subjects: ${err}`);
    };
};