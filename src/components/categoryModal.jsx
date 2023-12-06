import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

function CategoryModal(props) {

 
   const {closeModal, state} = props

  const close = ()=>{
    return props.closeModal
  }

  const [formData, setFormData] = useState({
    name: "",
    entries: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlePostRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/api/createCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Success:", data);
      state(closeModal)
      // Handle the success response here (if needed)
    } catch (error) {
      console.error("Error:", error);
      // Handle errors here
    }
  };




  return (
    <div>
      <div className="modal ">
        <div className="modal-wrappper ">
          <div className="modal-container my-44 mx-auto container">
            <div className=" w-1/3 h-4/5 px-7  rounded-md bg-white shadow-slate-50 border border-white ease-out">
              <div className=" grid justify-items-stretch  ">
                <button
                  className="justify-self-end py-1 mt-1    "
                  onClick={props.closeModel}
                >
                  <MdCancel size={30} className="" />
                </button>
              </div>

              <h1 className="text-2xl font-semibold text-center">
                Create New Category
              </h1>

              <form onSubmit={handlePostRequest} className="my-8">
                <div className="flex flex-col gap-y-3 ">
                  <h1 className="font-bold text-blue-950">Name</h1>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    className="border-2 text-xl  py-2 px-3 border-blue-950 rounded-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-3 mt-3">
                  <h1 className="font-bold text-blue-950">Entries</h1>
                  <input
                    type="text"
                    name="entries"
                    required
                    value={formData.entries}
                    className="border-2 text-xl py-2 px-3 border-blue-950 rounded-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-3 mt-3 ">
                  <h1 className="font-bold text-blue-950">Description</h1>

                  <input
                    type="text"
                    name="description"
                    required
                    value={formData.description}
                    className="border-2 text-xl  py-2 px-3 border-blue-950 rounded-lg"
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                <button
                  type="submit"
                  className=" w-full mt-7 text-xl text-white font-white mb-3 bg-btnBlue py-2 rounded-md"
                >
                  Save
                </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
