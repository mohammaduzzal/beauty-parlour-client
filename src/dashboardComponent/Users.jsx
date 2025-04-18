import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users')
            return data
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then((res) => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/admin/${user._id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name} is removed now`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // console.log(users);
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users : </h2>
                <h2 className="text-3xl">Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => (
                              
                                    <tr key={user._id}>
                                        <th>{idx + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 'admin' ? 'admin' : <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn bg-orange-300"><FaUser className="text-white"></FaUser></button>
                                            }
                                        </td>

                                        <td><button
                                        onClick={()=>handleDelete(user)}
                                            className="btn btn-ghost btn-lg "><FaTrashAlt className="text-red-600"></FaTrashAlt></button></td>
                                    </tr>

                               
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;