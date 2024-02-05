'use client';
// Imports
import {useEffect, useState} from 'react';
import FormCom from '@/components/modules/admission/admission/admission/FormCom';
import ViewCom from '@/components/modules/admission/admission/admission/ViewCom';
import {fetchAdmittedStudents} from '@/lib/actions/admission/admission/admittedStudent.actions';
import RegisteredStudentsViewCom from '@/components/modules/admission/admission/admission/RegisteredStudentsViewCom';
import { fetchManualListStudents } from '@/lib/actions/admission/admission/student.actions';





// Main function
const page = () => {


    // Is view component opened
    const [isViewOpened, setIsViewOpened] = useState('');


    // Students
    const [students, setStudents] = useState([{}]);


    // Admission Enquiries
    const [registeredStudents, setRegisteredStudents] = useState([{}]);


    // Update student
    const [updateStudent, setUpdateStudent] = useState({
        id:'',
        isDeleteClicked:false,

        // Student
        student:{
            // Admission data
            section:'',
            adm_no:'',
            pen_no:'',
            roll_no:'',
            bill_no:'',
            is_university:false,
            re_adm_no:'',
            is_minority:false,
            is_disability:false,
            dis_disc:'',
            is_new:false,
            is_active:false,
            reason:'',
            is_only_child:false,
            student_status:'',
            house:'',
            doa:new Date(),
            doj:new Date(),
            admitted_class:'',
            // 1
            image:'',
            // 2
            stream:'',
            subjects:[''],
            optional_subject:'',
            class:'',
            board:'',
            name:'',
            middle_name:'',
            last_name:'',
            dob:new Date(),
            place_of_birth:'',
            gender:'Male',
            contact_person_name:'',
            contact_person_mobile:0,
            contact_person_email:'',
            secondary_contact_no:0,
            h_no_and_streets:'',
            email:'',
            city:'',
            mobile:0,
            state:'',
            pin_code:0,
            aadhar_card_no:0,
            religion:'',
            blood_group:'',
            caste:'',
            category:'',
            is_ews:false,
            sibling:false,
            transport:'',
            nationality:''
        },

        // Parents
        parents:{
            // Father
            father:{
                father_name:'',
                middle_name:'',
                last_name:'',
                profession:'',
                designation:'',
                residence_address:'',
                office_address:'',
                email:'',
                alternate_email:'',
                dob:new Date(),
                mobile:0,
                phone:0,
                company_name:'',
                business_details:'',
                qualification:'',
                service_in:'',
                office_phone:0,
                office_mobile:0,
                office_extension:'',
                office_email:'',
                office_website:'',
                annual_income:'',
                parent_status:''
            },
            // Mother
            mother:{
                mother_name:'',
                middle_name:'',
                last_name:'',
                profession:'',
                designation:'',
                residence_address:'',
                office_address:'',
                email:'',
                alternate_email:'',
                dob:new Date(),
                mobile:0,
                phone:0,
                company_name:'',
                business_details:'',
                qualification:'',
                service_in:'',
                office_phone:0,
                office_mobile:0,
                office_extension:'',
                office_email:'',
                office_website:'',
                annual_income:'',
                anniversary_date:new Date()
            }
        },

        // Other details
        others:{
            // 1
            student_other_details:{
                medical_history:'',
                descriptions:'',
                allergies:'',
                allergies_causes:'',
                family_doctor_name:'',
                family_doctor_phone:0,
                family_doctor_address:'',
                distance_from_home:0,
                no_of_living_year:0,
                only_child:'',
                general_description:''
            },
            // 2
            student_staff_relation:{
                staff_ward:'',
                staff_name:''
            },
            // 3
            is_alumni:{
                is_alumni:false,
                academic_session:'',
                class_name:'',
                admission_number:0
            },
            // 4
            previous_school_details:[
                {
                    school_name:'',
                    board:'',
                    passing_year:'',
                    total_marks:'',
                    percentage:'',
                    result:'',
                    is_alumni:'',
                    father_name:'',
                    father_passing_year:'',
                    mother_name:'',
                    mother_passing_year:''
                },
                {
                    school_name:'',
                    board:'',
                    passing_year:'',
                    total_marks:'',
                    percentage:'',
                    result:'',
                    is_alumni:'',
                    father_name:'',
                    father_passing_year:'',
                    mother_name:'',
                    mother_passing_year:''
                },
                {
                    school_name:'',
                    board:'',
                    passing_year:'',
                    total_marks:'',
                    percentage:'',
                    result:'',
                    is_alumni:'',
                    father_name:'',
                    father_passing_year:'',
                    mother_name:'',
                    mother_passing_year:''
                }
            ]
        },

        // Guardian details
        guardian_details:{
            // 1
            guardian_name:'',
            profession:'',
            designation:'',
            company_name:'',
            business_details:'',
            qualification:'',
            // 2
            if_single_parent:{
                student_lives_with:'',
                legal_custody_of_the_child:'',
                correspondence_to:'',
                check_id_applicable:'',
                separation_reason:''
            }
        }
    });


    // Values from register
    const [valuesFromRegister, setValuesFromRegister] = useState({
        // Student
        student:{
            // 1
            image:'',
            // 2
            stream:'',
            subjects:[''],
            optional_subject:'',
            class:'',
            board:'',
            name:'',
            middle_name:'',
            last_name:'',
            dob:new Date(),
            place_of_birth:'',
            gender:'Male',
            contact_person_name:'',
            contact_person_mobile:0,
            contact_person_email:'',
            secondary_contact_no:0,
            h_no_and_streets:'',
            email:'',
            city:'',
            mobile:0,
            state:'',
            pin_code:0,
            aadhar_card_no:0,
            religion:'',
            blood_group:'',
            caste:'',
            category:'',
            is_ews:false,
            sibling:false,
            transport:'',
            nationality:''
        },

        // Parents
        parents:{
            // Father
            father:{
                father_name:'',
                middle_name:'',
                last_name:'',
                profession:'',
                designation:'',
                residence_address:'',
                office_address:'',
                email:'',
                alternate_email:'',
                dob:new Date(),
                mobile:0,
                phone:0,
                company_name:'',
                business_details:'',
                qualification:'',
                service_in:'',
                office_phone:0,
                office_mobile:0,
                office_extension:'',
                office_email:'',
                office_website:'',
                annual_income:'',
                parent_status:''
            },
            // Mother
            mother:{
                mother_name:'',
                middle_name:'',
                last_name:'',
                profession:'',
                designation:'',
                residence_address:'',
                office_address:'',
                email:'',
                alternate_email:'',
                dob:new Date(),
                mobile:0,
                phone:0,
                company_name:'',
                business_details:'',
                qualification:'',
                service_in:'',
                office_phone:0,
                office_mobile:0,
                office_extension:'',
                office_email:'',
                office_website:'',
                annual_income:'',
                anniversary_date:new Date()
            }
        },

        // Other details
        others:{
            // 1
            student_other_details:{
                medical_history:'',
                descriptions:'',
                allergies:'',
                allergies_causes:'',
                family_doctor_name:'',
                family_doctor_phone:0,
                family_doctor_address:'',
                distance_from_home:0,
                no_of_living_year:0,
                only_child:'',
                general_description:''
            },
            // 2
            student_staff_relation:{
                staff_ward:'',
                staff_name:''
            },
            // 3
            is_alumni:{
                is_alumni:false,
                academic_session:'',
                class_name:'',
                admission_number:0
            },
            // 4
            previous_school_details:[
                {
                    school_name:'',
                    board:'',
                    passing_year:'',
                    total_marks:'',
                    percentage:'',
                    result:'',
                    is_alumni:'',
                    father_name:'',
                    father_passing_year:'',
                    mother_name:'',
                    mother_passing_year:''
                },
                {
                    school_name:'',
                    board:'',
                    passing_year:'',
                    total_marks:'',
                    percentage:'',
                    result:'',
                    is_alumni:'',
                    father_name:'',
                    father_passing_year:'',
                    mother_name:'',
                    mother_passing_year:''
                },
                {
                    school_name:'',
                    board:'',
                    passing_year:'',
                    total_marks:'',
                    percentage:'',
                    result:'',
                    is_alumni:'',
                    father_name:'',
                    father_passing_year:'',
                    mother_name:'',
                    mother_passing_year:''
                }
            ]
        },

        // Guardian details
        guardian_details:{
            // 1
            guardian_name:'',
            profession:'',
            designation:'',
            company_name:'',
            business_details:'',
            qualification:'',
            // 2
            if_single_parent:{
                student_lives_with:'',
                legal_custody_of_the_child:'',
                correspondence_to:'',
                check_id_applicable:'',
                separation_reason:''
            }
        }
    });


    // Selected subjects
    const [selectedSubjects, setSelectedSubjects] = useState([]);


    // Use effect
    useEffect(() => {
        const accountGroupsFetcher = async () => {
            const studentsRes = await fetchAdmittedStudents();
            const registeredStudentsRes = await fetchManualListStudents();
            setStudents(studentsRes);
            setRegisteredStudents(registeredStudentsRes);
        };
        accountGroupsFetcher();
    }, [isViewOpened, updateStudent]);


    return (
        <div className='h-screen flex flex-col items-center justify-start pt-2 bg-white overflow-hidden'>
            {
                isViewOpened === 'admission' ? (
                    <ViewCom
                        students={students}
                        setSelectedSubjects={setSelectedSubjects}
                        setIsViewOpened={setIsViewOpened}
                        setUpdateStudent={setUpdateStudent}
                        setValuesFromRegister={setValuesFromRegister}
                    />
                ) : isViewOpened === 'register' ? (
                    <RegisteredStudentsViewCom
                        setUpdateStudent={setUpdateStudent}
                        setSelectedSubjects={setSelectedSubjects}
                        registeredStudents={registeredStudents}
                        setIsViewOpened={setIsViewOpened}
l                       setValuesFromRegister={setValuesFromRegister}
                    />
                ) : (
                    <FormCom
                        isViewOpened={isViewOpened}
                        setIsViewOpened={setIsViewOpened}
                        students={students}
                        updateStudent={updateStudent}
                        valuesFromRegister={valuesFromRegister}
                        setUpdateStudent={setUpdateStudent}
                        registeredStudents={registeredStudents}
                        setValuesFromRegister={setValuesFromRegister}
                        selectedSubjects={selectedSubjects}
                        setSelectedSubjects={setSelectedSubjects}
                    />
                )
            }
        </div>
    );
};





// Export
export default page;