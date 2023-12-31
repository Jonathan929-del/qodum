'use client';
// Imports
import * as z from 'zod';
import Buttons from './Buttons';
import {deepEqual} from '@/lib/utils';
import {useForm} from 'react-hook-form';
import {Input} from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import {useToast} from '@/components/ui/use-toast';
import {zodResolver} from '@hookform/resolvers/zod';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {SchoolGlobalValidation} from '@/lib/validations/fees/globalMasters/defineSchool/schoolGlobalDetails';
import {createGlobalSchoolDetails, modifyGlobalSchoolDetails, deleteGlobalSchoolDetails} from '@/lib/actions/fees/globalMasters/defineSchool/schoolGlobalDetails.actions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';
import LoadingIcon from '@/components/utils/LoadingIcon';





// Main function
const FormCom = ({setIsViewOpened, schoolsDetails, updateSchoolDetails, setUpdateSchoolDetails, boards}:any) => {


    // Toast
    const {toast} = useToast();


    // Comparison object
    const comparisonObject = {
        school_main:updateSchoolDetails.school_main,
        school_subheads:updateSchoolDetails.school_subheads,
        school_name:updateSchoolDetails.school_name,
        school_address:updateSchoolDetails.school_address,
        school_address_2:updateSchoolDetails.school_address_2,
        school_short_name:updateSchoolDetails.school_short_name,
        contact_no:updateSchoolDetails.contact_no,
        mobile:updateSchoolDetails.mobile,
        email:updateSchoolDetails.email,
        support_email_id:updateSchoolDetails.support_email_id,
        website:updateSchoolDetails.website,
        prefix:updateSchoolDetails.prefix,
        iso_details:updateSchoolDetails.iso_details,
        school_no:updateSchoolDetails.school_no,
        affiliation_to:updateSchoolDetails.affiliation_to,
        affiliation_no:updateSchoolDetails.affiliation_no,
        udise_code:updateSchoolDetails.udise_code,
        pen:updateSchoolDetails.pen,
        associates:updateSchoolDetails.associates,
        renew_up_to:updateSchoolDetails.renew_up_to,
        school_status:updateSchoolDetails.school_status,
        working_days:updateSchoolDetails.working_days,
        recess:updateSchoolDetails.recess,
        total_period:updateSchoolDetails.total_period,
        academic_year:'',
        financial_year:'',
    };


    // Form
    const form:any = useForm({
        resolver:zodResolver(SchoolGlobalValidation),
        defaultValues:{
            school_main:updateSchoolDetails.id === '' ? false : updateSchoolDetails.school_main,
            school_subheads:updateSchoolDetails.id === '' ? false : updateSchoolDetails.school_subheads,
            school_name:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.school_name,
            school_address:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.school_address,
            school_address_2:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.school_address_2,
            school_short_name:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.school_short_name,
            contact_no:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.contact_no,
            mobile:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.mobile,
            email:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.email,
            support_email_id:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.support_email_id,
            website:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.website,
            prefix:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.prefix,
            iso_details:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.iso_details,
            school_no:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.school_no,
            affiliation_to:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.affiliation_to,
            affiliation_no:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.affiliation_no,
            udise_code:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.udise_code,
            pen:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.pen,
            associates:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.associates,
            renew_up_to:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.renew_up_to,
            school_status:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.school_status,
            working_days:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.working_days,
            recess:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.recess,
            total_period:updateSchoolDetails.id === '' ? '' : updateSchoolDetails.total_period,
            academic_year:'',
            financial_year:'',
        }
    });


    // Submit handler
    const onSubmit = async (values:z.infer<typeof SchoolGlobalValidation>) => {
        // Create school details
        if(updateSchoolDetails.id === ''){
            await createGlobalSchoolDetails({
                school_main:values.school_main,
                school_subheads:values.school_subheads,
                school_name:values.school_name,
                school_address:values.school_address,
                school_address_2:values.school_address_2,
                school_short_name:values.school_short_name,
                contact_no:values.contact_no,
                mobile:values.mobile,
                email:values.email,
                support_email_id:values.support_email_id,
                website:values.website,
                prefix:values.prefix,
                iso_details:values.iso_details,
                school_no:values.school_no,
                affiliation_to:values.affiliation_to,
                affiliation_no:values.affiliation_no,
                udise_code:values.udise_code,
                pen:values.pen,
                associates:values.associates,
                renew_up_to:values.renew_up_to,
                school_status:values.school_status,
                working_days:values.working_days,
                recess:values.recess,
                total_period:values.total_period,
                academic_year:'',
                financial_year:'',
            });
            toast({title:'Added Successfully!'});
        }
        // Modify school details
        else if(!deepEqual(comparisonObject, values)){
            await modifyGlobalSchoolDetails({
                id:updateSchoolDetails.id,
                school_main:values.school_main,
                school_subheads:values.school_subheads,
                school_name:values.school_name,
                school_address:values.school_address,
                school_address_2:values.school_address_2,
                school_short_name:values.school_short_name,
                contact_no:values.contact_no,
                mobile:values.mobile,
                email:values.email,
                support_email_id:values.support_email_id,
                website:values.website,
                prefix:values.prefix,
                iso_details:values.iso_details,
                school_no:values.school_no,
                affiliation_to:values.affiliation_to,
                affiliation_no:values.affiliation_no,
                udise_code:values.udise_code,
                pen:values.pen,
                associates:values.associates,
                renew_up_to:values.renew_up_to,
                school_status:values.school_status,
                working_days:values.working_days,
                recess:values.recess,
                total_period:values.total_period,
                academic_year:'',
                financial_year:'',
            });
            toast({title:'Updated Successfully!'});
        }
        // Delete school details
        else if(updateSchoolDetails.isDeleteClicked){
            await deleteGlobalSchoolDetails({id:updateSchoolDetails.id});
            toast({title:'Deleted Successfully!'});
        };


        // Reseting update entity
        setUpdateSchoolDetails({
            id:'',
            school_main:false,
            school_subheads:false,
            school_name:'',
            school_address:'',
            school_address_2:'',
            school_short_name:'',
            contact_no:'',
            mobile:'',
            email:'',
            support_email_id:'',
            website:'',
            prefix:'',
            iso_details:'',
            school_no:'',
            affiliation_to:'',
            affiliation_no:'',
            udise_code:'',
            pen:'',
            associates:'',
            renew_up_to:'',
            school_status:'',
            working_days:'',
            recess:'',
            total_period:'',
            academic_year:'',
            financial_year:'',
            isDeleteClicked:false
        });
        // Reseting form
        form.reset({
            school_main:Boolean,
            school_subheads:Boolean,
            school_name:'',
            school_address:'',
            school_address_2:'',
            school_short_name:'',
            contact_no:'',
            mobile:'',
            email:'',
            support_email_id:'',
            website:'',
            prefix:'',
            iso_details:'',
            school_no:'',
            affiliation_to:'',
            affiliation_no:'',
            udise_code:'',
            pen:'',
            associates:'',
            renew_up_to:'',
            school_status:'',
            working_days:'',
            recess:'',
            total_period:'',
            academic_year:'',
            financial_year:'',
        });
    };


    return (
        <div className='w-[90%] max-w-[900px] flex flex-col mt-[-30px] items-center rounded-[8px] border-[0.5px] border-[#E8E8E8] sm:w-[80%]'>
            <h2 className='w-full text-center py-2 text-sm rounded-t-[8px] font-bold bg-[#e7f0f7] text-main-color'>School Details</h2>
            <Form
                {...form}
            >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='w-full max-h-[450px] flex flex-col overflow-y-scroll px-2 sm:px-4 custom-sidebar-scrollbar'
                >

                    <div className='w-full flex flex-col mt-2 sm:flex-row sm:gap-20'>

                        <div className='flex-1 flex flex-col'>


                            {/* Radios */}
                            <div className='flex flex-row items-center justify-between sm:justify-end'>
                                {/* School Main */}
                                <RadioGroup className='flex justify-end gap-[2px]' defaultValue='option-one'>
                                    <RadioGroupItem value='option-one' id='option-one' disabled/>
                                    <Label htmlFor='option-one' className='text-[10px] sm:text-xs'>School Main</Label>
                                </RadioGroup>
                                {/* School Subheads */}
                                <RadioGroup className='flex justify-end gap-[2px] sm:hidden'>
                                    <RadioGroupItem value='option-one' id='option-one' disabled/>
                                    <Label htmlFor='option-one' className='text-[10px] sm:text-xs'>School Subheads</Label>
                                </RadioGroup>
                            </div>



                            {/* School Name */}
                            <FormField
                                control={form.control}
                                name='school_name'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>School Name</FormLabel>
                                            <div className='relative basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                                <div className='absolute top-0 sm:left-[100%] sm:w-[130px] text-[10px]'>
                                                    <FormMessage />
                                                </div>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* School Address */}
                            <FormField
                                control={form.control}
                                name='school_address'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>School Address</FormLabel>
                                            <div className='relative basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                                <div className='absolute top-0 sm:left-[100%] sm:w-[130px] text-[10px]'>
                                                    <FormMessage />
                                                </div>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* School Address 2 */}
                            <FormField
                                control={form.control}
                                name='school_address_2'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>School Address 2</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* School Short Name*/}
                            <FormField
                                control={form.control}
                                name='school_short_name'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>School Short Name</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Contact No.*/}
                            <FormField
                                control={form.control}
                                name='contact_no'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Contact No.</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Mobile */}
                            <FormField
                                control={form.control}
                                name='mobile'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Mobile</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name='email'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Email</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Support Email Id */}
                            <FormField
                                control={form.control}
                                name='support_email_id'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Support Email Id</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Website */}
                            <FormField
                                control={form.control}
                                name='website'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Website</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Prefix */}
                            <FormField
                                control={form.control}
                                name='prefix'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Prefix</FormLabel>
                                            <div className='relative basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                                <div className='absolute top-0 sm:left-[100%] sm:w-[130px] text-[10px]'>
                                                    <FormMessage />
                                                </div>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* ISO Details */}
                            <FormField
                                control={form.control}
                                name='iso_details'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>ISO Details</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        
                        <div className='flex-1 flex flex-col'>

                            {/* School Subheads */}
                            <RadioGroup className='hidden justify-end gap-[2px] sm:flex'>
                                <RadioGroupItem value='option-one' id='option-one' disabled/>
                                <Label htmlFor='option-one' className='text-[10px] sm:text-xs'>School Subheads</Label>
                            </RadioGroup>

                            {/* School No. */}
                            <FormField
                                control={form.control}
                                name='school_no'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>School No.</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Affiliation To */}
                            <FormField
                                control={form.control}
                                name='affiliation_to'
                                render={({field}) => (
                                    <FormItem className='w-full mt-[4px]'>
                                    <div className='w-full h-6 gap-2 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Affiliation To</FormLabel>
                                        <div className='w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className='h-6 w-full flex flex-row items-center text-xs pl-2 rounded-none bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'>
                                                        <SelectValue placeholder='Select'/>
                                                        <ChevronDown className='h-4 w-4 opacity-50'/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {boards.length < 1 ? (
                                                            <p>No boards</p>
                                                        ) : !boards[0].board ? (
                                                            <LoadingIcon />
                                                        ) : boards.map((board:any) => (
                                                            <SelectItem value={board.board} key={board._id}>{board.board}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-xs'/>
                                        </div>
                                    </div>
                                </FormItem>
                                )}
                            />

                            {/* Affiliation No. */}
                            <FormField
                                control={form.control}
                                name='affiliation_no'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Affiliation No.</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* UDISE Code */}
                            <FormField
                                control={form.control}
                                name='udise_code'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>UDISE Code</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* PEN */}
                            <FormField
                                control={form.control}
                                name='pen'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>PEN</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Associates */}
                            <FormField
                                control={form.control}
                                name='associates'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Associates</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Renew Up To */}
                            <FormField
                                control={form.control}
                                name='renew_up_to'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Renew Up To</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* School Status */}
                            <FormField
                                control={form.control}
                                name='school_status'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>School Status</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Working Days */}
                            <FormField
                                control={form.control}
                                name='working_days'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Working Days</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Recess */}
                            <FormField
                                control={form.control}
                                name='recess'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Recess</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Total Period */}
                            <FormField
                                control={form.control}
                                name='total_period'
                                render={({field}) => (
                                    <FormItem>
                                        <div className='h-6 flex flex-row mt-[4px] sm:flex-row sm:items-center sm:gap-2'>
                                            <FormLabel className='basis-[30%] h-full flex justify-start items-center text-[10px] text-[#726E71] lg:text-xs sm:justify-end sm:basis-[35%]'>Total Period</FormLabel>
                                            <div className='basis-[70%] h-full sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='flex flex-row items-center h-full text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] resize-none'
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />

                        </div>

                    </div>


                    {/* Buttons */}
                    <Buttons setIsViewOpened={setIsViewOpened} schoolsDetails={schoolsDetails} updateSchoolDetails={updateSchoolDetails} setUpdateSchoolDetails={setUpdateSchoolDetails} onSubmit={onSubmit} form={form}/>

                    
                </form>
            </Form>
        </div>
    );
};





// Export
export default FormCom;