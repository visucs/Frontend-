import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        department: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="split-layout">
            <div className="left-panel">
                <div className="left-panel-overlay"></div>
                <div className="left-panel-content">
                    <h1 className="text-4xl font-bold leading-tight max-w-md">
                        Empower your business with our employee creation!
                    </h1>
                </div>
            </div>
            <div className="right-panel">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-2">Create a Employee</h2>
                    <Link to="/" className="text-secondary flex items-center gap-2 mb-8 text-indigo-500 font-medium">
                        <span>«</span> Back to all Employee List
                    </Link>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-sm font-semibold text-gray-400">Employee Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter You Full Name"
                                className="form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-400">Employee Email Id</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                className="form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-400">Employee Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter Your Employee Title"
                                className="form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-400">Employee Department</label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Enter Your Employee Department"
                                className="form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-400">Employee Role</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Enter Your Employee Role"
                                className="form-input"
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary mt-4">
                            Create Employee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
