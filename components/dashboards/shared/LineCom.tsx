'use client';
// Imports
import {Line} from 'react-chartjs-2';
import {Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';





// Main function
const LineCom = ({lineData}:any) => {


    // Registering
    ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


    // Options
    const options = {
        plugins:{
            legend:{display:false},
            datalabels:{display:true}
        },
        elements:{
            line:{
                tension:0.4
            }
        }
    };
  

    return (
        <div className='w-full flex flex-col justify-center bg-white rounded-[8px] p-2'>
            <div className='w-full flex flex-row items-center justify-between mb-2'>
                <div className='flex flex-row items-center justify-center text-sm'>
                    <p className='font-bold'>{lineData.title}</p>
                    <span className='ml-[2px] text-hash-color text-xs'>{lineData.subTitle}</span>
                </div>
                <div className='flex flex-row gap-2 ml-8'>
                    {lineData.categories.map((category:any) => (
                        <div className='flex flex-row items-center text-hash-color text-xs'>
                            <span className={`w-2 h-2 ${category.color}`}/>
                            <p className='pl-[2px]'>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Line
                data={lineData.data}
                options={options}
            />
        </div>
    );
};





// Export
export default LineCom;