'use client';

import {useStore} from "../../state/useStore"
import {useEffect, useState} from "react";
// import { useRouter } from 'next/navigation';
import {AdjustmentsHorizontalIcon, ChevronRightIcon, XMarkIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

const List = () => {
    const [sortBy, setSortBy] = useState('default');
    const [showSortOptions, setShowSortOptions] = useState(false); // New state for showing/hiding sort options

    // const router = useRouter();
    const { myths, fetchMyths } = useStore();

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const toggleSortOptions = () => {
        setShowSortOptions(!showSortOptions);
    };

    const sortedData = [...myths]; // Copy the original data array
    if (sortBy === 'asc') {
        sortedData.sort((a, b) => a.id - b.id); // Sort data in ascending order
    } else if (sortBy === 'desc') {
        sortedData.sort((a, b) => b.id - a.id); // Sort data in descending order
    }

    useEffect(() => {
        fetchMyths();
    }, [fetchMyths]);

    // const handleClick = (id) => {
    //     router.push(`/myths/${id}`);
    // };

    console.log('sorted', sortedData);

    return (
        <>
            <div className='flex h-screen'>
                <div className='flex-1 overflow-y-auto p-10 mt-[64px]'>
                    <div className='flex justify-between mb-4 text-xl'>
                        <h2>All Myths</h2>
                        <div className='flex items-center gap-2'>
                            <h2>Sort By</h2>
                            {showSortOptions && (
                                <select
                                    value={sortBy}
                                    onChange={handleSortChange}
                                    className='text-black rounded-md p-1'
                                >
                                    <option value='default' className='text-black'>
                                        Default
                                    </option>
                                    <option value='asc' className='text-black'>
                                        Newest
                                    </option>
                                    <option value='desc' className='text-black'>
                                        Oldest
                                    </option>
                                </select>
                            )}
                            <button className='w-5' onClick={toggleSortOptions}>
                                {!showSortOptions ? (<AdjustmentsHorizontalIcon className='w-5' /> ) : ( <XMarkIcon className='w-6' />)}

                            </button>
                        </div>
                    </div>
                    {sortedData.map((item, index) => (
                        <div key={index} className='py-6 border-b border-gray-300'>
                            <div className='flex items-center'>
                                <div className='w-8 h-8 bg-[#192231] rounded-full flex items-center justify-center mr-3'>
                                    <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='flex-1'>
                                    <Link className="w-10" href={`/myths/${item.id}`}>
                                        <p className='text-xl'>{item.title} </p>
                                    </Link>
                                    <p className='mt-1 text-sm text-gray-500'>
                                        {item.description}
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <button className='bg-[#192231] p-2 rounded-xl border-2 border-dashed'>
                                        {item.topic}
                                    </button>
                                    <Link className="w-10" href={`/myths/${item.id}`}>
                                        <ChevronRightIcon/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};

export default List;