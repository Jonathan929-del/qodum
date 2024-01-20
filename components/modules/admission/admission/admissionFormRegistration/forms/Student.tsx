'use client';
// Imports
import {format} from 'date-fns';
import {useEffect, useState} from 'react';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Switch} from '@/components/ui/switch';
import {Button} from '@/components/ui/button';
import {Calendar} from '@/components/ui/calendar';
import {CalendarIcon, ChevronDown} from 'lucide-react';
import LoadingIcon from '@/components/utils/LoadingIcon';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {fetchReligions} from '@/lib/actions/admission/globalMasters/religion.actions';
import {fetchCategories} from '@/lib/actions/admission/globalMasters/category.actions';
import {fetchBoards} from '@/lib/actions/fees/globalMasters/defineSchool/board.actions';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {fetchClasses} from '@/lib/actions/fees/globalMasters/defineClassDetails/class.actions';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';





// Main function
const Student = ({form}:any) => {


    // Date states
    const [isCalendarOpened, setIsCalendarOpened] = useState('');


    // Classes
    const [classes, setClasses] = useState([{}]);


    // Boards
    const [boards, setBoards] = useState([{}]);


    // Religions
    const [religions, setReligions] = useState([{}]);


    // Categories
    const [categories, setCategories] = useState([{}]);


    // Use effect
    useEffect(() => {
        const fetcher = async () => {
            const classesRes = await fetchClasses();
            const boardsRes = await fetchBoards();
            const religionsRes = await fetchReligions();
            const categoriesRes = await fetchCategories();
            setClasses(classesRes);
            setBoards(boardsRes);
            setReligions(religionsRes);
            setCategories(categoriesRes);
        };
        fetcher();
    }, []);


    return (
        <div className='flex flex-row'>
            <div className='basis-[30%] flex flex-col gap-2 border-r-[0.5px] border-[#ccc] pr-[4px]'>
                {/* Class */}
                <div className='w-full flex flex-col items-center sm:flex-row'>
                    <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Class</FormLabel>
                    <div className='relative w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                        <FormField
                            control={form.control}
                            name='student.class'
                            render={({ field }) => (
                                <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                <ChevronDown className="h-4 w-4 opacity-50" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {classes.length < 1 ? (
                                                    <p>No classes</p>
                                                    // @ts-ignore
                                                ) : !classes[0].class_name ? (
                                                    <LoadingIcon />
                                                ) : classes.map((item:any) => (
                                                    <SelectItem value={item.class_name} key={item._id}>{item.class_name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className='absolute left-0 top-[60%] text-[11px]'/>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>


                {/* Board */}
                <div className='w-full flex flex-col items-center sm:flex-row'>
                    <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Board</FormLabel>
                    <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                        <FormField 
                            control={form.control}
                            name='student.board'
                            render={({ field }) => (
                                <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-0 sm:mt-0'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                <ChevronDown className="h-4 w-4 opacity-50" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {boards.length < 1 ? (
                                                    <p>No boards</p>
                                                    // @ts-ignore
                                                ) : !boards[0].board ? (
                                                    <LoadingIcon />
                                                ) : boards.map((item:any) => (
                                                    <SelectItem value={item.board} key={item._id}>{item.board}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>


                {/* Reg. No. */}
                <FormField
                    control={form.control}
                    name='student.reg_no'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Reg. No.</FormLabel>
                                <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                        />
                                    </FormControl>
                                    <FormMessage className='mt-[-20px] text-[11px]' />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />


                {/* Pros. No. */}
                <FormField
                    control={form.control}
                    name='student.pros_no'
                    render={({ field }) => (
                        <FormItem className='w-full mt-2 sm:mt-0'>
                            <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Pros. No.</FormLabel>
                                <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                        />
                                    </FormControl>
                                    <FormMessage className='mt-[-20px] text-[11px]' />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />


                {/* Amount */}
                <FormField
                    control={form.control}
                    name='student.amount'
                    render={({ field }) => (
                        <FormItem className='w-full mt-2 sm:mt-0'>
                            <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Amount</FormLabel>
                                <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                        />
                                    </FormControl>
                                    <FormMessage className='mt-[-20px] text-[11px]' />
                                </div>
                            </div>
                        </FormItem>
                    )}
                />


                {/* Date */}
                <FormField
                    control={form.control}
                    name='student.date'
                    render={() => (
                        <FormItem className='relative w-full h-7 pb-[8px] flex flex-col items-start justify-center mt-2 sm:mt-0 sm:flex-row sm:items-center'>
                            <FormLabel className='basis-auto h-2 pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Date</FormLabel>
                            <Popover open={isCalendarOpened === 'date'} onOpenChange={() => isCalendarOpened === 'date' ? setIsCalendarOpened('') : setIsCalendarOpened('date')}>
                                <PopoverTrigger asChild className='h-7'>
                                    <Button
                                        variant='outline'
                                        className='flex flex-row items-center w-full h-7 text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] sm:basis-[65%]'
                                    >
                                        <CalendarIcon className='mr-2 h-4 w-4' />
                                        {
                                            form.getValues().student.date
                                                    ? <span className='text-[11px]'>{format(form.getValues().student.date, 'PPP')}</span>
                                                    : <span className='text-[11px]'>Pick a date</span>
                                        }
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0'>
                                    <Calendar
                                        mode='single'
                                        selected={form.getValues().student.date}
                                        onSelect={v => {setIsCalendarOpened(''); form.setValue('student.date', v)}}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                />


                {/* Payment Mode */}
                <div className='w-full flex flex-col items-center sm:flex-row'>
                    <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Payment Mode</FormLabel>
                    <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                        <FormField
                            control={form.control}
                            name='student.payment_mode'
                            render={({ field }) => (
                                <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            disabled={true}
                                        >
                                            <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                <ChevronDown className="h-4 w-4 opacity-50" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='item'>item</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>


                {/* Admission Account */}
                <div className='w-full flex flex-col items-center sm:flex-row'>
                    <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Admission Account</FormLabel>
                    <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                        <FormField
                            control={form.control}
                            name='student.admission_account'
                            render={({ field }) => (
                                <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            disabled={true}
                                        >
                                            <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                <ChevronDown className="h-4 w-4 opacity-50" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='item'>item</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>


                {/* Post Account */}
                <div className='w-full flex flex-col items-center sm:flex-row'>
                    <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Post Account</FormLabel>
                    <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                        <FormField
                            control={form.control}
                            name='student.post_account'
                            render={({ field }) => (
                                <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            disabled={true}
                                        >
                                            <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                <ChevronDown className="h-4 w-4 opacity-50" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='item'>item</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>


                {/* Session */}
                <div className='w-full flex flex-col items-center sm:flex-row'>
                    <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Session</FormLabel>
                    <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                        <FormField
                            control={form.control}
                            name='student.session'
                            render={({ field }) => (
                                <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            disabled={true}
                                        >
                                            <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                <ChevronDown className="h-4 w-4 opacity-50" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='item'>item</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className='basis-[30%] flex-1 flex flex-col gap-2'>





                <div className='flex flex-col gap-2 border-[0.5px] border-[#ccc] rounded-[5px] p-2 ml-2'>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name='student.name'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Name</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* Middle Name */}
                        <FormField
                            control={form.control}
                            name='student.middle_name'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Middle Name</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Last Name */}
                        <FormField
                            control={form.control}
                            name='student.last_name'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Last Name</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* DOB */}
                        <FormField
                            control={form.control}
                            name='student.dob'
                            render={() => (
                                <FormItem className='relative w-full h-7 pb-[8px] flex flex-col items-start justify-center mt-2 sm:mt-0 sm:flex-row sm:items-center'>
                                    <FormLabel className='basis-auto h-2 pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>DOB</FormLabel>
                                    <Popover open={isCalendarOpened === 'dob'} onOpenChange={() => isCalendarOpened === 'dob' ? setIsCalendarOpened('') : setIsCalendarOpened('dob')}>
                                        <PopoverTrigger asChild className='h-7'>
                                            <Button
                                                variant='outline'
                                                className='flex flex-row items-center w-full h-7 text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] sm:basis-[65%]'
                                            >
                                                <CalendarIcon className='mr-2 h-4 w-4' />
                                                {
                                                    form.getValues().student.dob
                                                            ? <span>{format(form.getValues().student.dob, 'PPP')}</span>
                                                            : <span>Pick a date</span>
                                                }
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className='w-auto p-0'>
                                            <Calendar
                                                mode='single'
                                                selected={form.getValues().student.dob}
                                                onSelect={v => {setIsCalendarOpened(''); form.setValue('student.dob', v)}}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Place Of Birth */}
                        <FormField
                            control={form.control}
                            name='student.place_of_birth'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Place Of Birth</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* Gender */}
                        <FormField
                            control={form.control}
                            name='student.gender'
                            render={() => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Gender</FormLabel>
                                        <div className='h-full w-full flex flex-col gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                            <RadioGroup
                                                value={form.getValues().student.gender}
                                                className='h-full flex flex-row'
                                            >
                                                <div className='flex items-center space-x-[2px]'>
                                                    <RadioGroupItem value='male' id='male' onClick={() => form.setValue('student.gender', 'male')}/>
                                                    <Label htmlFor='male' className='text-[11px] text-hash-color'>Male</Label>
                                                </div>
                                                <div className='flex items-center space-x-[2px]'>
                                                    <RadioGroupItem value='female' id='femal' onClick={() => form.setValue('student.gender', 'female')}/>
                                                    <Label htmlFor='male' className='text-[11px] text-hash-color'>Female</Label>
                                                </div>
                                            </RadioGroup>
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>





                <div className='flex flex-col gap-2 border-[0.5px] border-[#ccc] rounded-[5px] p-2 ml-2'>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Contact Person Name */}
                        <FormField
                            control={form.control}
                            name='student.contact_person_name'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Contact Person Name</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* Contact Person Mobile */}
                        <FormField
                            control={form.control}
                            name='student.contact_person_mobile'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Contact Person Mobile</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Contact Person Email */}
                        <FormField
                            control={form.control}
                            name='student.contact_person_email'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Contact Person Email</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* Secondary Contact No. */}
                        <FormField
                            control={form.control}
                            name='student.secondary_contact_no'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Secondary Contact No.</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>





                <div className='flex flex-col gap-2 border-[0.5px] border-[#ccc] rounded-[5px] p-2 ml-2'>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* H. No. and Streets */}
                        <FormField
                            control={form.control}
                            name='student.h_no_and_streets'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>H. No. and Streets</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* Email */}
                        <FormField
                            control={form.control}
                            name='student.email'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Email</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* City */}
                        <FormField
                            control={form.control}
                            name='student.city'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>City</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                        {/* Mobile */}
                        <FormField
                            control={form.control}
                            name='student.mobile'
                            render={({ field }) => (
                                <FormItem className='w-full mt-2 sm:mt-0'>
                                    <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                        <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Mobile</FormLabel>
                                        <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                />
                                            </FormControl>
                                            <FormMessage className='mt-[-20px] text-[11px]' />
                                        </div>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        <div className='basis-[50%] flex flex-col gap-2 lg:flex-row'>
                            {/* State */}
                            <FormField
                                control={form.control}
                                name='student.state'
                                render={({ field }) => (
                                    <FormItem className='w-full mt-2 sm:mt-0'>
                                        <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                            <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>State</FormLabel>
                                            <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                    />
                                                </FormControl>
                                                <FormMessage className='mt-[-20px] text-[11px]' />
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            {/* PIN Code */}
                            <FormField
                                control={form.control}
                                name='student.pin_code'
                                render={({ field }) => (
                                    <FormItem className='w-full mt-2 sm:mt-0'>
                                        <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                            <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>PIN Code</FormLabel>
                                            <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                    />
                                                </FormControl>
                                                <FormMessage className='mt-[-20px] text-[11px]' />
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='basis-[50%]'>
                            {/* Aadhar Card No */}
                            <FormField
                                control={form.control}
                                name='student.aadhar_card_no'
                                render={({ field }) => (
                                    <FormItem className='w-full mt-2 sm:mt-0'>
                                        <div className='w-full h-7 flex flex-col items-start justify-center sm:flex-row sm:items-center'>
                                            <FormLabel className='basis-auto pr-[4px] text-end text-[11px] text-[#726E71] sm:basis-[35%]'>Aadhar Card No</FormLabel>
                                            <div className='h-full w-full flex flex-col items-start gap-4 sm:basis-[65%]'>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className='h-full flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                    />
                                                </FormControl>
                                                <FormMessage className='mt-[-20px] text-[11px]' />
                                            </div>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>






                <div className='flex flex-col gap-2 border-[0.5px] border-[#ccc] rounded-[5px] p-2 ml-2'>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Religion */}
                        <div className='w-full flex flex-col items-center sm:flex-row'>
                            <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Religion</FormLabel>
                            <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                                <FormField
                                    control={form.control}
                                    name='student.religion'
                                    render={({ field }) => (
                                        <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                        <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {religions.length < 1 ? (
                                                            <p>No religions</p>
                                                            // @ts-ignore
                                                        ) : !religions[0].religion_name ? (
                                                            <LoadingIcon />
                                                        ) : religions.map((item:any) => (
                                                            <SelectItem value={item.religion_name} key={item._id}>{item.religion_name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        {/* Blood Group */}
                        <div className='w-full flex flex-col items-center sm:flex-row'>
                            <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Blood Group</FormLabel>
                            <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                                <FormField
                                    control={form.control}
                                    name='student.blood_group'
                                    render={({ field }) => (
                                        <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                        <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value='N.A.'>N.A.</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 lg:flex-row'>
                        {/* Caste */}
                        <div className='w-full flex flex-col items-center sm:flex-row'>
                            <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Caste</FormLabel>
                            <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                                <FormField
                                    control={form.control}
                                    name='student.caste'
                                    render={({ field }) => (
                                        <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                        <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value='N.A.'>N.A.</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        {/* Category */}
                        <div className='w-full flex flex-col items-center sm:flex-row'>
                            <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Category</FormLabel>
                            <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                                <FormField
                                    control={form.control}
                                    name='student.category'
                                    render={({ field }) => (
                                        <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    value={field.value}
                                                    onValueChange={field.onChange}
                                                >
                                                    <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                        <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {categories.length < 1 ? (
                                                            <p>No categories</p>
                                                            // @ts-ignore
                                                        ) : !categories[0].category_name ? (
                                                            <LoadingIcon />
                                                        ) : categories.map((item:any) => (
                                                            <SelectItem value={item.category_name} key={item._id}>{item.category_name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>





                <div className='flex flex-row gap-2 justify-evenly border-[0.5px] border-[#ccc] rounded-[5px] p-2 ml-2'>
                    {/* Is EWS */}
                    <FormField
                        control={form.control}
                        name='student.is_ews'
                        render={({field}) => (
                            <FormItem className='flex flex-row items-start justify-start sm:items-center sm:gap-2'>
                                    <FormControl>
                                        <div className='flex-1 flex items-center justify-end space-x-2'>
                                            <Label htmlFor='is_ews' className='text-[11px]'>
                                                Is EWS
                                            </Label>
                                            <Switch
                                                id='is_ews'
                                                {...field}
                                                value={field.value}
                                                onCheckedChange={field.onChange}
                                                checked={field.value}
                                            />
                                        </div>
                                    </FormControl>
                            </FormItem>
                        )}
                    />
                    {/* Sibling */}
                    <FormField
                        control={form.control}
                        name='student.sibling'
                        render={({field}) => (
                            <FormItem className='flex flex-row items-start justify-between sm:items-center sm:gap-2'>
                                    <FormControl>
                                        <div className='flex-1 flex items-center justify-end space-x-2'>
                                            <Label htmlFor='is_ews' className='text-[11px]'>
                                                Sibling
                                            </Label>
                                            <Switch
                                                id='is_ews'
                                                {...field}
                                                value={field.value}
                                                onCheckedChange={field.onChange}
                                                checked={field.value}
                                            />
                                        </div>
                                    </FormControl>
                            </FormItem>
                        )}
                    />
                </div>





                <div className='flex flex-col gap-2 justify-evenly border-[0.5px] border-[#ccc] rounded-[5px] p-2 ml-2 lg:flex-row'>
                    {/* Transport */}
                    <div className='w-full flex flex-col items-center sm:flex-row'>
                        <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Transport</FormLabel>
                        <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                            <FormField
                                control={form.control}
                                name='student.transport'
                                render={({ field }) => (
                                    <FormItem className='flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                        <FormControl>
                                            <Select
                                                {...field}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                    <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                        <SelectItem value='School'>School</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    {/* Nationality */}
                    <div className='w-full flex flex-col items-center sm:flex-row'>
                        <FormLabel className='w-full h-2 text-[11px] text-start pr-[4px] text-[#726E71] sm:basis-[35%] sm:text-end'>Nationality</FormLabel>
                        <div className='w-full h-full flex flex-row items-center justify-between gap-2 sm:basis-[65%]'>
                            <FormField
                                control={form.control}
                                name='student.nationality'
                                render={({ field }) => (
                                    <FormItem className='relative flex-1 flex flex-col items-start justify-center mt-2 sm:flex-row sm:items-center sm:gap-2 sm:mt-0'>
                                        <FormControl>
                                            <Select
                                                {...field}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger className='w-full h-7 flex flex-row items-center text-[11px] pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4] rounded-none'>
                                                    <SelectValue placeholder='Please Select' className='text-[11px]' />
                                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                        <SelectItem value='Indian'>Indian</SelectItem>
                                                        <SelectItem value='British'>British</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className='absolute left-0 top-[60%] text-[11px]'/>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};





// Export
export default Student;