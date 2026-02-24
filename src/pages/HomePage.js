import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEmployees = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/getUsers`);
            const result = await response.json();
            if (result.success) {
                setEmployees(result.data);
            }
        } catch (error) {
            console.error('Error fetching employees:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="min-height-screen bg-black flex flex-col items-center justify-center p-8">
            <h1 className="text-5xl font-bold mb-8 text-white">Employee Dashboard</h1>
            <Link to="/create" className="btn-primary max-w-xs text-center no-underline">
                Create New Employee
            </Link>

            <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur">
                <table className="w-full text-left">
                    <thead className="bg-gray-800/50 text-gray-400 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Department</th>
                            <th className="px-6 py-4">Role</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">Loading employees...</td>
                            </tr>
                        ) : employees.length > 0 ? (
                            employees.map((emp) => (
                                <tr key={emp._id} className="hover:bg-gray-800/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">{emp.name}</td>
                                    <td className="px-6 py-4 text-gray-400">{emp.title}</td>
                                    <td className="px-6 py-4 text-gray-400">{emp.department}</td>
                                    <td className="px-6 py-4 text-gray-400">{emp.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">No employees found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HomePage;
