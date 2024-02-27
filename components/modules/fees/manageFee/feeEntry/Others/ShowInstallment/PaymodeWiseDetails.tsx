// Imports
import moment from 'moment';
import React from 'react';





// Main function
const PaymodeWiseDetails = ({payments}:any) => {


    // Payments
    const cashPayments = payments.filter((p:any) => p.paymode === 'Cash');
    const chequePayments = payments.filter((p:any) => p.paymode === 'Cheque');
    const ddPayments = payments.filter((p:any) => p.paymode === 'DD');
    const neftPayments = payments.filter((p:any) => p.paymode === 'NEFT');


    return (
        <div className='w-full flex flex-col gap-6 px-4'>
            {/* Cash Details */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] rounded-[2px]'>
                <h2 className='w-full bg-[#EDF1F5] font-semibold text-start text-xs py-2 px-2 rounded-[2px] border-b-[0.5px] border-[#ccc]'>Cash Details</h2>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Receipt No.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Installment
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Paymode
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Amount
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Status
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Received Date
                    </li>
                </ul>
                {cashPayments?.length > 0 ? cashPayments.map((p:any) => (
                    <ul className='flex flex-row text-[11px]'>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.receipt_no}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.installment}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            Cash
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.paid_amount}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            Cleared
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {moment(p.received_date).format('D-MMM-yy')}
                        </li>
                    </ul>
                )) : (
                    <p className='text-sm text-hash-color font-semibold'>No payments</p>
                )}
            </div>





            {/* Cheque Wise Details */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] rounded-[2px]'>
                <h2 className='w-full bg-[#EDF1F5] font-semibold text-start text-xs py-2 px-2 rounded-[2px] border-b-[0.5px] border-[#ccc]'>Cheque Wise Details</h2>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Receipt No.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Installment
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Cheque No.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Cheque Date
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Cheque Amount
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Fee Bank Name
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Cheque Status
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Received Date
                    </li>
                </ul>
                {chequePayments?.length > 0 ? chequePayments.map((p:any) => (
                    <ul className='flex flex-row text-[11px]'>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.receipt_no}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.installment}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p?.paymode_details?.cheque_no}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {moment(p?.paymode_details?.cheque_date).format('D-MMM-yy')}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.paid_amount}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p?.paymode_details?.cheque_bank}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            Cleared
                        </li>
                        <li className='basis-[10%] flex items-center justify-center'>
                            {moment(p.received_date).format('D-MMM-yy')}
                        </li>
                    </ul>
                )) : (
                    <p className='text-sm text-hash-color font-semibold'>No payments</p>
                )}
            </div>





            {/* DD Wise Details */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] rounded-[2px]'>
                <h2 className='w-full bg-[#EDF1F5] font-semibold text-start text-xs py-2 px-2 rounded-[2px] border-b-[0.5px] border-[#ccc]'>DD Wise Details</h2>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[15%] flex items-center justify-center'>
                        Receipt No
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Installment
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        DD No.
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        DD Date
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        DD Amount
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Fee Bank Name
                    </li>
                    <li className='basis-[15%] flex items-center justify-center'>
                        DD Status
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Received Date
                    </li>
                </ul>
                {ddPayments?.length > 0 ? ddPayments.map((p:any) => (
                    <ul className='flex flex-row text-[11px]'>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.receipt_no}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.installment}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p?.paymode_details?.cheque_no}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {moment(p?.paymode_details?.dd_date).format('D-MMM-yy')}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.paid_amount}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p?.paymode_details?.dd_bank}
                        </li>
                        <li className='basis-[15%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            Cleared
                        </li>
                        <li className='basis-[10%] flex items-center justify-center'>
                            {moment(p.received_date).format('D-MMM-yy')}
                        </li>
                    </ul>
                )) : (
                    <p className='text-sm text-hash-color font-semibold'>No payments</p>
                )}
            </div>





            {/* NEFT Details */}
            <div className='flex flex-col border-[0.5px] border-[#ccc] rounded-[2px]'>
                <h2 className='w-full bg-[#EDF1F5] font-semibold text-start text-xs py-2 px-2 rounded-[2px] border-b-[0.5px] border-[#ccc]'>NEFT Details</h2>
                <ul className='flex flex-row text-[11px] font-semibold bg-[#EDF1F5]'>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Receipt No.
                    </li>
                    <li className='basis-[10%] flex items-center justify-center'>
                        Installment
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        NEFT
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Amount
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Status
                    </li>
                    <li className='basis-[20%] flex items-center justify-center'>
                        Received Date
                    </li>
                </ul>
                {neftPayments?.length > 0 ? neftPayments.map((p:any) => (
                    <ul className='flex flex-row text-[11px]'>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.receipt_no}
                        </li>
                        <li className='basis-[10%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.installment}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p?.paymode_details?.neft_name}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {p.paid_amount}
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            Cleared
                        </li>
                        <li className='basis-[20%] flex items-center justify-center border-r-[0.5px] border-[#ccc]'>
                            {moment(p.received_date).format('D-MMM-yy')}
                        </li>
                    </ul>
                )) : (
                    <p className='text-sm text-hash-color font-semibold'>No payments</p>
                )}
            </div>
        </div>
    );
};





// Export
export default PaymodeWiseDetails;