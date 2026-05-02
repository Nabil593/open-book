"use client"
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdatePage = () => {

    const { data: session } = authClient.useSession();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const handleUpdate = async (data) => {

        const { data: res, error } = await authClient.updateUser({
            image: data.photo.trim() || session?.image,
            name: data.name.trim() || session?.name,
        })

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Profile Update successful!");
            reset()
        }
    }

    return (
        <div className='flex items-center justify-center flex-col space-y-4 my-20'>
            <h2 className='text-3xl font-bold'>Update Profile</h2>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Change Name</label>
                    <input
                        type="text"
                        className={`input ${errors.name ? 'input-error' : ''}`}
                        {...register("name")}
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}

                    <label className="label mt-2">Change Photo URL</label>
                    <input
                        type="text"
                        className="input"
                        {...register("photo", {
                            pattern: {
                                value: /^(https?:\/\/)/i,
                                message: "Must start with http:// or https://"
                            }
                        })}
                        placeholder="Photo URL"
                    />
                    {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>}

                    <button className="btn btn-neutral mt-4">{isSubmitting ? <span className="loading loading-spinner loading-sm"></span> : "Update Information"}</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdatePage;