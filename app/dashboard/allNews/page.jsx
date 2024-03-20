import Link from 'next/link';
import React from 'react';

const AllNews = () => {
    const tableItems = [
        {
            name: "Liam James",
            email: "liamjames@example.com",
            position: "Software engineer",
            salary: "$100K"
        },
        {
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            position: "Product designer",
            salary: "$90K"
        },
        {
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            position: "Front-end developer",
            salary: "$80K"
        },
        {
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            position: "Laravel engineer",
            salary: "$120K"
        },
        {
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            position: "Open source manager",
            salary: "$75K"
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-300 text-xl">
                        All News
                    </h3>
                </div>
                <div className="mt-3 md:mt-0">
                    <Link
                        href="/dashboard/addNews"
                        className="inline-block px-3 py-2 text-gray-200 duration-150 font-medium bg-orange-600 rounded-lg hover:bg-orange-500 active:bg-orange-700 md:text-sm"
                    >
                        Add News
                    </Link>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Username</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Salary</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-300 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllNews;