import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

function CategoryEditModal(props) {
  const { CloseEditModal, EditState, ID } = props;
  const [name, setName] = useState('')
  const [entries, setEnries] = useState('')
  const [description, setDescription] = useState('')


  // useEffect(()=>{
  //   if(EditState){

  //   }
  // },[EditState, ID])
  

  useEffect(()=>{
     const fetchData =async ()=>{
      try{
        const response = await fetch(`http://localhost:7000/api/getOneCategory/${ID}`)
        const data = await response.json()
        const { name, entries, description } = data;

        setName(name);
        setEnries(entries); // Fix the typo in your variable name (setEnries to setEntries)
        setDescription(description);
      }catch(error){
      // console.log(`error in fetching data: ${error}`)
      }
     }
     fetchData()

  },[])



  const handleEditSubmit =async (e)=>{
   
    e.preventDefault()

    try{
       const response =await fetch(`http://localhost:7000/api/updateCategories/${ID}`,{
        method: 'PUT',
        headers:{
          'content-Type': 'application/json',
        },
        body:JSON.stringify({
          name,
          entries,
          description
        })

      })
      if(response.ok){
        // console.log("Category data updated")
        CloseEditModal(EditState)
      }
    }catch(error){
   console.log(`data not updated successfully : ${error}`)
    }
  }

   
 
  return (
    <div>
      <div className="modal ">
        <div className="modal-wrappper ">
          <div className="modal-container my-44 mx-auto container">
            <div className=" w-1/3 h-4/5 px-7  rounded-md bg-white shadow-slate-50 border border-white ease-out">
              <div className=" grid justify-items-stretch  ">
                <button
                  className="justify-self-end py-1 mt-1    "
                  onClick={props.CloseEditModal}
                >
                  <MdCancel size={30} className="" />
                </button>
              </div>

              <h1 className="text-2xl font-semibold text-center">
                Edit Category
              </h1>
              <form onSubmit={handleEditSubmit} className="my-8">
                <div className="flex flex-col gap-y-3 ">
                  <h1 className="font-bold text-blue-950">Name</h1>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={(e)=>setName(e.target.value)}
                 

                    className="border-2 text-xl  py-2 px-3 border-blue-950 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-y-3 mt-3">
                  <label className="font-bold text-blue-950">Entries</label>
                  <input
                    type="text"
                    name="entries"
                    value={entries}
                    required
                    onChange={(e)=>setEnries(e.target.value)}

                  
                    className="border-2 text-xl py-2 px-3 border-blue-950 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-y-3 mt-3 ">
                  <label className="font-bold text-blue-950">Description</label>

                  <input
                    type="text"
                    name="description"
                    value={description}
                    required
                    onChange={(e)=>setDescription(e.target.value)}
                    className="border-2 text-xl  py-2 px-3 border-blue-950 rounded-lg"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className=" w-full mt-7 text-xl text-white font-white mb-3 bg-btnBlue py-2 rounded-md"
                    onClick={()=>{}}
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

export default CategoryEditModal;
