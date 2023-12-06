'use client';
// Imports
import {Button} from '../../ui/button';
import {ExcelFile, ExcelSheet} from 'react-xlsx-wrapper';





// Main Function
const AccountsGlobalMasterButtons = ({setIsViewOpened, narrations}:any) => {


    // Excel downloader
    const narrationsDataArray = narrations.map((narration:any) => {
        return([
            {value:narrations.indexOf(narration)},
            {value:narration.narration},
            {value:narration.voucher_type}
        ]);
    });


    // Data
    const multiDataSet:any = [
        {
            columns: [
                {title:'Id', width:{wpx:40}}, 
                {title:'Narrations', width:{wpx:100}},
                {title:'Voucher Type', width:{wpx:80}}
            ],
            data:narrationsDataArray
        }
    ];


    return (
        <div className='flex flex-row items-center justify-between pb-4 pt-8 gap-2'>
            <Button type='submit' className='px-4 h-8 text-white bg-gradient-to-r from-[#3D67B0] to-[#4CA7DE] rounded-full transition border-[1px] border-white
                          hover:border-main-color hover:from-[#e7f0f7] hover:to-[#e7f0f7] hover:text-main-color'>
                Save
            </Button>
            <span
                onClick={() => setIsViewOpened(true)}
                className='flex items-center px-4 h-8 text-white bg-gradient-to-r from-[#51B272] to-[#94E7B1] rounded-full transition border-[1px] border-white cursor-pointer
                         hover:border-[#51B272] hover:from-[#5cbb7d21] hover:to-[#5cbb7d21] hover:text-[#51B272]'
            >
                View
            </span>
                <ExcelFile element={
                    <span
                        className='flex items-center px-4 h-8 text-black bg-gradient-to-r from-[#FFC73A] to-[#FFF3AB] rounded-full transition border-[1px] border-white cursor-pointer
                         hover:border-[#FFC73A] hover:from-[#ffc73a1f] hover:to-[#ffc73a1f] hover:text-[#FFC73A]'
                    >
                        Print
                    </span>}>
                    <ExcelSheet dataSet={multiDataSet} name="Organization"/>
                </ExcelFile>
            <span
                className='flex items-center px-4 h-8 text-black bg-gradient-to-r from-[#C7C8CA] to-[#EAEDF0] rounded-full transition border-[1px] border-white cursor-pointer
                         hover:border-[#a3a3a3] hover:from-[#c8c9cb26] hover:to-[#c8c9cb26] hover:text-hash-color'
            >
                Cancel
            </span>
        </div>
    );
};





// Export
export default AccountsGlobalMasterButtons;