// Imports

import moment from 'moment';
import LoadingIcon from '@/components/utils/LoadingIcon';






// Main function
const InstallmentWiseDetails = ({selectedStudent, totalNumberGenerator, installments, setIsShowInstallment, setSelectedInstallments, payments}:any) => {


    // Total amounts
    const totalActualAmount = totalNumberGenerator(selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.map((a:any) => Number(a.value)))));
    const totalPaidAmount = totalNumberGenerator(selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.map((a:any) => Number(a.last_rec_amount)))));
    const totalUnaidAmount = totalNumberGenerator(selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.map((a:any) => Number(a.value) - (Number(a.last_rec_amount) + Number(a.conc_amount))))));
    const totalConcAmount = totalNumberGenerator(selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.map((a:any) => Number(a.conc_amount)))));


    // Select handler
    const selectHandler = (i:String) => {
        setSelectedInstallments([i]);
        setIsShowInstallment(false);
    };


    return (
        <div className='w-full flex flex-col gap-6 px-4'>
            {/* Totals */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] mt-4'>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Total Actual Amt.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Total Paid Amt.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Total Unpaid Amt.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Total Assigned Con.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Total Runtime Con.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Total Advance
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Total Adjust Advance
                    </li>
                </ul>
                <ul className='flex flex-row text-[11px]'>
                    <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                        {totalActualAmount}
                    </li>
                    <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                        {totalPaidAmount}
                    </li>
                    <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                        {totalUnaidAmount}
                    </li>
                    <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                        {totalConcAmount}
                    </li>
                    <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                        0
                    </li>
                    <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                        0
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        0
                    </li>
                </ul>
            </div>





            {/* Paid History */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] rounded-[2px]'>
                <h2 className='w-full bg-[#EDF1F5] font-semibold text-start text-xs py-2 px-2 rounded-[2px] border-b-[0.5px] border-[#ccc]'>Paid History</h2>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Receipt No.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Installment
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Actual Amt.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Concession Amt.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Paid Amt.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Received Date
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Reconcile Status
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Remark
                    </li>
                </ul>
                {payments.length < 1 ? (
                    <p className='text-xs text-hash-color font-semibold'>No payments</p>
                ) : !payments[0].installment ? (
                    <LoadingIcon />
                ) : payments.map((p:any) => (
                    <ul className='flex flex-row text-[11px] border-b-[0.5px] border-[#ccc]'>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.receipt_no}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.installment}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.actual_amount}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            0
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.paid_amount}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {moment(p.received_date).format('D-MMM-yy')}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            Not verified
                        </li>
                        <li className='basis-[10%] flex items-center justify-center'>
                            {p.remark}
                        </li>
                    </ul>
                ))}
            </div>





            {/* Unpaid History */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] rounded-[2px]'>
                <h2 className='w-full bg-[#EDF1F5] font-semibold text-start text-xs py-2 px-2 rounded-[2px] border-b-[0.5px] border-[#ccc]'>Unpaid History</h2>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Installment
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Amount
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Last Paid
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Concession
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Due Amt.
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Select
                    </li>
                </ul>
                {installments.map((i:any) => (
                    <ul className='flex flex-row text-[11px] border-b-[0.5px] border-[#ccc]'>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {i}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {totalNumberGenerator(
                                selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.filter((a:any) => a.name === i).map((a:any) => Number(a.value) - (Number(a.last_rec_amount) + Number(a.conc_amount)))))
                            )}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {totalNumberGenerator(
                                selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.filter((a:any) => a.name === i).map((a:any) => Number(a.last_rec_amount))))
                            )}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {totalNumberGenerator(
                                selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.filter((a:any) => a.name === i).map((a:any) => Number(a.conc_amount))))
                            )}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {totalNumberGenerator(
                                selectedStudent.affiliated_heads.heads.map((h:any) => totalNumberGenerator(h.amounts.filter((a:any) => a.name === i).map((a:any) => Number(a.last_rec_amount))))
                            )}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center'>
                            <span
                                className='flex items-center justify-start px-[8px] h-6 text-[10px] text-white bg-gradient-to-r from-[#3D67B0] to-[#4CA7DE] transition border-[0.5px] rounded-full border-[#E2E4FF] cursor-pointer
                                hover:border-main-color hover:from-[#e7f0f7] hover:to-[#e7f0f7] hover:text-main-color sm:text-xs sm:px-4'
                                onClick={() => selectHandler(i)}
                            >
                                Select
                            </span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};





// Export
export default InstallmentWiseDetails;