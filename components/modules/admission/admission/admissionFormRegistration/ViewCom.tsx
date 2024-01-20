// Imports
import {Button} from '@/components/ui/button';
import {ChevronsUpDown, X} from 'lucide-react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from '@/components/ui/command';
import LoadingIcon from '@/components/utils/LoadingIcon';





// Main Function
const ViewCom = ({setIsViewOpened, students, setUpdateStudent}:any) => {


    // Select handler
    const selectHandler = (student:any) => {
        setUpdateStudent({
            id:student._id,
            isDeleteClicked:false,
            // Student
            student:{
                // 1
                class:student.student.class,
                board:student.student.board,
                reg_no:student.student.reg_no,
                pros_no:student.student.pros_no,
                amount:student.student.amount,
                date:student.student.date,
                payment_mode:student.student.payment_mode,
                admission_account:student.student.admission_account,
                post_account:student.student.post_account,
                session:student.student.session,
                // 2
                name:student.student.name,
                middle_name:student.student.middle_name,
                last_name:student.student.last_name,
                dob:student.student.dob,
                place_of_birth:student.student.place_of_birth,
                gender:student.student.gender,
                contact_person_name:student.student.contact_person_name,
                contact_person_mobile:student.student.contact_person_mobile,
                contact_person_email:student.student.contact_person_email,
                secondary_contact_no:student.student.secondary_contact_no,
                h_no_and_streets:student.student.h_no_and_streets,
                email:student.student.email,
                city:student.student.city,
                mobile:student.student.mobile,
                state:student.student.state,
                pin_code:student.student.pin_code,
                aadhar_card_no:student.student.aadhar_card_no,
                religion:student.student.religion,
                blood_group:student.student.blood_group,
                caste:student.student.caste,
                category:student.student.category,
                is_ews:student.student.is_ews,
                sibling:student.student.sibling,
                transport:student.student.transport,
                nationality:student.student.nationality
            },

            // Parents
            parents:{
                // Father
                father:{
                    father_name:student.parents.father.father_name,
                    middle_name:student.parents.father.middle_name,
                    last_name:student.parents.father.last_name,
                    profession:student.parents.father.profession,
                    designation:student.parents.father.designation,
                    residence_address:student.parents.father.residence_address,
                    office_address:student.parents.father.office_address,
                    email:student.parents.father.email,
                    alternate_email:student.parents.father.alternate_email,
                    dob:student.parents.father.dob,
                    mobile:student.parents.father.mobile,
                    phone:student.parents.father.phone,
                    company_name:student.parents.father.company_name,
                    business_details:student.parents.father.business_details,
                    qualification:student.parents.father.qualification,
                    service_in:student.parents.father.service_in,
                    office_phone:student.parents.father.office_phone,
                    office_mobile:student.parents.father.office_mobile,
                    office_extension:student.parents.father.office_extension,
                    office_email:student.parents.father.office_email,
                    office_website:student.parents.father.office_website,
                    annual_income:student.parents.father.annual_income,
                    parent_status:student.parents.father.parent_status
                },
                // Mother
                mother:{
                    mother_name:student.parents.mother.mother_name,
                    middle_name:student.parents.mother.middle_name,
                    last_name:student.parents.mother.last_name,
                    profession:student.parents.mother.profession,
                    designation:student.parents.mother.designation,
                    residence_address:student.parents.mother.residence_address,
                    office_address:student.parents.mother.office_address,
                    email:student.parents.mother.email,
                    alternate_email:student.parents.mother.alternate_email,
                    dob:student.parents.mother.dob,
                    mobile:student.parents.mother.mobile,
                    phone:student.parents.mother.phone,
                    company_name:student.parents.mother.company_name,
                    business_details:student.parents.mother.business_details,
                    qualification:student.parents.mother.qualification,
                    service_in:student.parents.mother.service_in,
                    office_phone:student.parents.mother.office_phone,
                    office_mobile:student.parents.mother.office_mobile,
                    office_extension:student.parents.mother.office_extension,
                    office_email:student.parents.mother.office_email,
                    office_website:student.parents.mother.office_website,
                    annual_income:student.parents.mother.annual_income,
                    anniversary_date:student.parents.mother.anniversary_date
                }
            },

            // Other details
            others:{
                // 1
                general_description:student.others.general_description,
                // 2
                emergency_contact:{
                    person_name:student.others.emergency_contact.person_name,
                    mobile_no:student.others.emergency_contact.mobile_no,
                    phone_no:student.others.emergency_contact.phone_no,
                    address:student.others.emergency_contact.address,
                    relation:student.others.emergency_contact.relation
                },
                // 3
                emergency_contact_two:{
                    person_name:student.others.emergency_contact_two.person_name,
                    mobile_no:student.others.emergency_contact_two.mobile_no,
                    phone_no:student.others.emergency_contact_two.phone_no,
                    address:student.others.emergency_contact_two.address,
                    relation:student.others.emergency_contact_two.relation,
                    is_alumni:student.others.emergency_contact_two.is_alumni
                },
                // 4
                student_other_details:{
                    stream:student.others.student_other_details.stream,
                    optional_subject:student.others.student_other_details.optional_subject,
                    medical_history:student.others.student_other_details.medical_history,
                    allergies:student.others.student_other_details.allergies,
                    other_medical_info:student.others.student_other_details.other_medical_info,
                    family_doctor_name:student.others.student_other_details.family_doctor_name,
                    family_doctor_phone:student.others.student_other_details.family_doctor_phone,
                    family_doctor_address:student.others.student_other_details.family_doctor_address,
                    distance_from_home:student.others.student_other_details.distance_from_home,
                    no_of_living_years:student.others.student_other_details.no_of_living_years,
                    only_child:student.others.student_other_details.only_child
                },
                // 5
                student_staff_relation:{
                    staff_ward:student.others.student_staff_relation.staff_ward,
                    staff_name:student.others.student_staff_relation.staff_name
                },
                // 6
                previous_school_details:{
                    school_name:student.others.previous_school_details.school_name,
                    city:student.others.previous_school_details.city,
                    class:student.others.previous_school_details.class,
                    year:student.others.previous_school_details.year,
                    board:student.others.previous_school_details.board
                }
            },

            // Guardian details
            guardian_details:{
                // 1
                guardian_name:student.guardian_details.guardian_name,
                profession:student.guardian_details.profession,
                designation:student.guardian_details.designation,
                residence_address:student.guardian_details.residence_address,
                office_address:student.guardian_details.office_address,
                email:student.guardian_details.email,
                alternate_email:student.guardian_details.alternate_email,
                dob:student.guardian_details.dob,
                mobile:student.guardian_details.mobile,
                phone:student.guardian_details.phone,
                company_name:student.guardian_details.company_name,
                business_details:student.guardian_details.business_details,
                qualification:student.guardian_details.qualification,
                service_in:student.guardian_details.service_in,
                office_phone:student.guardian_details.office_phone,
                office_mobile:student.guardian_details.office_mobile,
                office_extension:student.guardian_details.office_extension,
                office_email:student.guardian_details.office_email,
                office_website:student.guardian_details.office_website,
                income:student.guardian_details.income,
                // 2
                if_single_parent:{
                    student_lives_with:student.guardian_details.if_single_parent.student_lives_with,
                    correspondence_to:student.guardian_details.if_single_parent.correspondence_to,
                    legal_custody_of_the_child:student.guardian_details.if_single_parent.legal_custody_of_the_child,
                    check_id_applicable:student.guardian_details.if_single_parent.check_id_applicable,
                    separation_reason:student.guardian_details.if_single_parent.separation_reason
                }
            }
        });
        setIsViewOpened(false);
    };


    return (
        <Command
            className='w-[90%] max-h-[90%] flex flex-col items-center pb-2 gap-2 rounded-[8px] border-[0.5px] border-[#E8E8E8]'
        >

            {/* Header */}
            <div className='flex flex-row items-center justify-between w-full px-2 py-2 text-sm font-bold text-main-color bg-[#e7f0f7] rounded-t-[8px]'>
                <h2>Students List</h2>
                <X color='#3a3a3a' size={18} cursor={'pointer'} onClick={() => setIsViewOpened(false)}/>
            </div>
            <div className='w-[95%] h-[90%] flex flex-col items-center bg-[#F1F1F1] rounded-[8px]'>


                {/* Search input */}
                <div className='w-full flex flex-row justify-end pr-4 py-2 border-b-[0.5px] border-[#ccc]'>
                    <CommandInput
                        placeholder='Search list'
                        className='h-full text-xs text-hash-color w-[250px] bg-white'
                    />
                </div>


                {/* Account group */}
                <div className='w-full flex flex-col h-[90%] overflow-scroll custom-sidebar-scrollbar'>
                    {/* Headers */}
                    <ul className='w-full min-w-[1000px] flex flex-row text-[10px] border-b-[0.5px] border-[#ccc] text-hash-color cursor-pointer sm:text-xs md:text-md'>
                        <li className='basis-[10%] flex flex-row items-center justify-between px-2 py-[2px] border-r-[0.5px] border-[#ccc] sm:basis-[10%]'>
                            Sr. No.
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[10%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Select
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[10%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Reg. No.
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[15%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            With Prospectus
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[20%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Student Name
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[20%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Father Name
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[15%] flex flex-row items-center justify-between px-2'>
                            Paid Amount
                            <ChevronsUpDown size={12}/>
                        </li>
                    </ul>
                    {/* Values */}
                    <CommandList>
                        {
                            students.length < 1 ? (
                                <p className='w-full flex flex-row p-2 text-sm bg-[#E2E4FF] border-b-[0.5px] border-[#ccc]'>
                                    No students yet
                                </p>
                            ):
                            !students[0]?.student?.name ? (
                                <LoadingIcon />
                            ) : students.map((student:any) => (
                                <CommandItem
                                    value={`${students.indexOf(student) + 1}`}
                                    className='w-full min-w-[1000px] flex flex-row text-[10px] bg-[#E2E4FF] border-b-[0.5px] border-[#ccc] sm:text-xs md:text-md'
                                >
                                    <li className='basis-[10%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc] sm:basis-[10%]'>{students.indexOf(student) + 1}</li>
                                    <li className='basis-[10%] flex flex-row items-center justify-center px-2 border-r-[0.5px] border-[#ccc]'>
                                        <Button
                                            className='px-[8px] h-6 text-[10px] text-white bg-gradient-to-r from-[#3D67B0] to-[#4CA7DE] transition border-[0.5px] rounded-full border-[#E2E4FF]
                                            hover:border-main-color hover:from-[#e7f0f7] hover:to-[#e7f0f7] hover:text-main-color sm:text-xs sm:px-4'
                                            onClick={() => selectHandler(student)}
                                        >
                                            Select
                                        </Button>
                                    </li>
                                    <li className='basis-[10%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>{student.student.reg_no}</li>
                                    <li className='basis-[15%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>True</li>
                                    <li className='basis-[20%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>{student.student.name}</li>
                                    <li className='basis-[20%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>{student.parents.father.father_name}</li>
                                    <li className='basis-[15%] flex flex-row items-center px-2'>700</li>
                                </CommandItem>
                            ))
                        }
                    </CommandList>
                    {students.length > 0 && <CommandEmpty>No results found</CommandEmpty>}  
                </div>


                {/* Buttons */}
                <div className='w-full flex flex-row items-center justify-between py-4 px-2 border-t-[0.5px] border-[#ccc]'>
                    {/* Items per page */}
                    <div className='text-[10px] flex flex-col items-center gap-2 sm:text-sm sm:flex-row'>
                        <p className='text-hash-color'>Items per page:</p>
                        <Select>
                            <SelectTrigger className='flex flex-row items-center h-8 pl-2 text-[10px] bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] sm:text-xs'>
                                <SelectValue placeholder='1000' className='text-xs'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='10'>10</SelectItem>
                                <SelectItem value='15'>15</SelectItem>
                                <SelectItem value='50'>50</SelectItem>
                                <SelectItem value='100'>100</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Skipping */}
                    <div className='flex flex-row items-center gap-[2px] sm:gap-[4px]'>
                        <Button disabled className='h-5 text-[10px] my-[0.5px] px-2 bg-white rounded-[5px] text-hash-color hover:bg-[#F1F1F1] sm:text-xs sm:px-4 sm:h-7 xl:px-6'>First</Button>
                        <Button disabled className='h-5 text-[10px] my-[0.5px] px-2 bg-white rounded-[5px] text-hash-color hover:bg-[#F1F1F1] sm:text-xs sm:px-4 sm:h-7 xl:px-6'>Prev.</Button>
                        <Button disabled className='h-5 text-[10px] my-[0.5px] px-2 bg-white rounded-[5px] text-hash-color hover:bg-[#F1F1F1] sm:text-xs sm:px-4 sm:h-7 xl:px-6'>1</Button>
                        <Button disabled className='h-5 text-[10px] my-[0.5px] px-2 bg-white rounded-[5px] text-hash-color hover:bg-[#F1F1F1] sm:text-xs sm:px-4 sm:h-7 xl:px-6'>Next</Button>
                        <Button disabled className='h-5 text-[10px] my-[0.5px] px-2 bg-white rounded-[5px] text-hash-color hover:bg-[#F1F1F1] sm:text-xs sm:px-4 sm:h-7 xl:px-6'>Last</Button>
                    </div>
                </div>


            </div>
        </Command>
    );
};





// Export
export default ViewCom;