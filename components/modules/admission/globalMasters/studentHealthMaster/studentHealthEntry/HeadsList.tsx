// Imports
import {useEffect, useState} from 'react';
import {Checkbox} from '@/components/ui/checkbox';
import {ChevronDown, ChevronsUpDown} from 'lucide-react';
import LoadingIcon from '@/components/utils/LoadingIcon';
import {Command, CommandItem, CommandList} from '@/components/ui/command';
import {FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form';
import {fetchBankLedgers} from '@/lib/actions/accounts/accounts/bankLedger.actions';
import {fetchGeneralLedgers} from '@/lib/actions/accounts/accounts/generalLedger.actions';
import {fetchInstallments} from '@/lib/actions/fees/feeMaster/feeMaster/installment.actions';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import { Input } from '@/components/ui/input';





// Main Function
const HeadsList = ({students, form}:any) => {


    // Installments
    const [installments, setInstallments] = useState([{}]);


    // Account ledgers
    const [accountLedgers, setAccountLedgers]  = useState([{}]);


    // Bank ledgers
    const [bankLedgers, setBankLedgers]  = useState([{}]);


    // Check change
    const checkChange = (head:any) => {
        // if(form.getValues().affiliated_heads.map((item:any) => item.head_name).includes(head.name)){
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.type_name`, '');
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.head_name`, '');
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.schedule_type`, '');
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.installment`, '');
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.account`, '');
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.post_account`, '');
        // }else{
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.type_name`, head.affiliated_fee_type);
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.head_name`, head.name);
        //     form.setValue(`affiliated_heads.${heads.indexOf(head)}.schedule_type`, head.pay_schedule);
        // }
    };


    // Use effect
    useEffect(() => {
        const fetcher = async () => {
            const installmentsRes = await fetchInstallments();
            const accountLedgersRes = await fetchGeneralLedgers();
            const bankLedgersRes = await fetchBankLedgers();
            setInstallments(installmentsRes);
            setAccountLedgers(accountLedgersRes)
            setBankLedgers(bankLedgersRes);
        };
        fetcher();
    }, []);
    useEffect(() => {
    }, [form.watch('affiliated_heads')]);



    return (
        <Command
            className='w-[90%] flex flex-col items-center pb-2 gap-2 rounded-[8px] border-[0.5px] border-[#E8E8E8] '
        >
            
            {/* Header */}
            <div className='flex flex-row items-center justify-between w-full px-2 py-2 text-sm font-bold text-main-color bg-[#e7f0f7] rounded-t-[8px]'>
                <h2>Group Head Relation</h2>
            </div>
            <div className='w-full h-full flex flex-col items-center bg-[#F1F1F1]'>

                {/* Heads */}
                <div className='w-full flex flex-col overflow-scroll custom-sidebar-scrollbar'>
                    {/* Headers */}
                    <ul className='w-full min-w-[700px] flex flex-row text-[10px] border-b-[0.5px] border-[#ccc] text-hash-color cursor-pointer sm:text-xs md:text-md'>
                        <li className='basis-[20%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Adm No.
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[20%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Select
                            {students[0]?.student?.name && (
                                <Checkbox
                                    className='rounded-[2px] text-hash-color'
                                    onCheckedChange={() => {
                                        if(form.getValues().students.filter((student:any) => student.adm_no === '').length === students.length || form.getValues().students.filter((student:any) => student.adm_no === '').length !== 0){
                                            students.map((student:any) => {
                                                form.setValue(`students.${students.indexOf(student)}.adm_no`, student.student.adm_no);
                                                form.setValue(`students.${students.indexOf(student)}.height`, student.health_details.height);
                                                form.setValue(`students.${students.indexOf(student)}.weight`, student.health_details.weight);
                                            });
                                        }else{
                                            students.map((student:any) => {
                                                form.setValue(`students.${students.indexOf(student)}.adm_no`, '');
                                                form.setValue(`students.${students.indexOf(student)}.height`, 0);
                                                form.setValue(`students.${students.indexOf(student)}.weight`, 0);
                                            });
                                        };
                                    }}
                                />
                            )}
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[30%] flex flex-row items-center justify-between px-2 border-r-[0.5px] border-[#ccc]'>
                            Height
                            <ChevronsUpDown size={12}/>
                        </li>
                        <li className='basis-[30%] flex flex-row items-center justify-between px-2'>
                            Weight
                            <ChevronsUpDown size={12}/>
                        </li>
                    </ul>

                    {/* Values */}
                    <CommandList>
                        {
                            students[0]?.student?.name === undefined ? (
                                <p className='w-full min-w-[700px] flex flex-row p-2 text-sm bg-[#E2E4FF] border-b[0.5px] border-[#ccc]'>
                                    No students yet
                                </p>
                            ) : !students[0]?.student?.name ? (
                                    <LoadingIcon />
                                ) : students.map((student:any) => (
                                    <CommandItem key={student._id} className='w-full min-w-[700px] flex flex-row text-[10px] bg-[#E2E4FF] border-b-[0.5px] border-[#ccc] sm:text-xs md:text-md'>
                                        <li className='basis-[20%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>{student?.student?.adm_no}</li>
                                        <li className='basis-[20%] flex flex-row items-center justify-center px-2 border-r-[0.5px] border-[#ccc]'>
                                            <Checkbox
                                                checked={form.getValues().students.map((item:any) => item.adm_no).includes(student.student.adm_no)}
                                                onCheckedChange={() => checkChange(student)}
                                                className='rounded-[2px] text-hash-color'
                                            />
                                        </li>

                                        {/* Height */}
                                        <li className='basis-[30%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>
                                            <FormField
                                                control={form.control}
                                                name={`students.${students.indexOf(student)}.height`}
                                                render={({field}) => (
                                                    <FormItem className='w-full'>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                className='flex flex-row h-6 items-center text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                            />
                                                        </FormControl>
                                                        <FormMessage className='text-xs'/>
                                                </FormItem>
                                                )}
                                            />
                                        </li>

                                        {/* Weight */}
                                        <li className='basis-[30%] flex flex-row items-center px-2 border-r-[0.5px] border-[#ccc]'>
                                            <FormField
                                                control={form.control}
                                                name={`students.${students.indexOf(student)}.weight`}
                                                render={({field}) => (
                                                    <FormItem className='w-full'>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                className='flex flex-row h-6 items-center text-xs pl-2 bg-[#FAFAFA] border-[0.5px] border-[#E4E4E4]'
                                                            />
                                                        </FormControl>
                                                        <FormMessage className='text-xs'/>
                                                </FormItem>
                                                )}
                                            />
                                        </li>

                                    </CommandItem>
                                ))
                        }
                    </CommandList>
                </div>
            </div>
        </Command>
    );
};





// Export
export default HeadsList;