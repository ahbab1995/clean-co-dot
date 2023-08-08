import React from "react";
import { useForm } from "react-hook-form";
import fetcher from "../api/axios";

const Services = () => {

  const { register, handleSubmit, reset } = useForm();


  const onSubmit = async(data) =>{
    const result = await fetcher.post('add-service',data)
    console.log(result)
    reset()
  }
  return (
    <div>
      <h1>This is services</h1>
      <div className=" flex justify-center items-center min-h-screen bg-base-200">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl">Add Service</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  {...register("serviceName")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Charge</span>
                </label>
                <input
                  type="text"
                  {...register("serviceCharge")}
                  className="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
