import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { useNavigate } from 'react-router-dom';

const CreateEmployeePage = () => {
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/createUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.success) {
                alert('Employee Created Successfully!');
                navigate('/');
            } else {
                alert('Failed to create employee: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <div className="animate-fade-in">
            <EmployeeForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreateEmployeePage;
