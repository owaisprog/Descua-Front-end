import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SideSection from "../components/sideSection";
import CategoryModal from "../components/categoryModal";
import CategoryEditModal from "../components/categoryEditModal";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function category() {
  const notify = () => toast("Category deleted");

  const [CategoriesData, setCategoryData] = useState([]);
  const [records, setRecords] = useState([]);

  const [getData, setGetData] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editID, setEditID] = useState(null);

  const modalHandleChange = () => {
    setShowModal(!showModal);
  };

  const closeModel = () => {
    setShowModal(false);
  };

  const openEdit = (id) => {
    setEditModal(!editModal);
    setEditID(id);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const editModalHandleChange = () => {
    setShowEditModal(!showEditModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:7000/api/getCategoriesList"
        );
        const data = await response.json();
        setCategoryData(data);
        setGetData(!getData);
      } catch (error) {
        // console.log(`error occured :${error}`);
      }
    };

    fetchData();
  }, [getData]);

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/deleteCategory/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      if (response.ok) {
        setCategoryData((prevRecords) =>
          prevRecords.filter((record) => record.id !== itemId)
        );
        notify()

        // console.log("Record deleted successfully");
      } else {
        // console.error("Failed to delete record");
      }
    } catch (error) {
      // console.error("Error during delete operation:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:7000/api/getCategoriesList"
        );
        const data = await response.json();
        setRecords(data);
        // console.log(`MY data :!!!!!!!!!!!!!!!!!!!! ${data}`);
      } catch (error) {
        // console.log(`An fetching error occured: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer />

      <div className="bg-bg-color  ">
        <div className="  max-w-screen-xl mx-auto py-7  px-4 xl:px-0">
          <div className="flex gap-10">
            <SideSection />

            <div>
              <div className="w-full">
                <div className="px-4 bg-white py-2  flex justify-between">
                  <h1 className="text-2xl font-bold my-3">Categories</h1>
                  <div>
                    <button
                      onClick={modalHandleChange}
                      className="bg-btnBlue rounded-lg flex text-white px-6 font-medium py-4"
                    >
                      <MdOutlineAddCircle className="my-1" size={20} />
                      <div className="my-0 mx-2">
                        <button>Create New</button>
                      </div>
                    </button>
                  </div>
                </div>
                <table className="w-full ">
                  <thead>
                    <tr className="bg-white border  ">
                      <th className=" w-[300px] py-6">Name</th>
                      <th className="  w-[300px] py-6">Entries</th>
                      <th className=" w-[300px] py-6">Description</th>
                      <th className="w-[300px]  py-6">Action</th>
                    </tr>
                  </thead>
                  {CategoriesData &&
                    CategoriesData.map((item) => (
                      <tbody key={item.id}>
                        <tr className="bg-white border">
                          <td className="text-center w-[300px] py-6">
                            {item.name}
                          </td>
                          <td className="text-center w-[300px] py-6">
                            {item.entries}
                          </td>
                          <td className="text-center w-[300px] py-6">
                            {item.description}
                          </td>
                          <td className="text-center w-[300px] py-6">
                            <div className="flex gap-4 justify-center ">
                              <MdOutlineRemoveRedEye
                                className="cursor-pointer hover:text-btnBlue"
                                size={28}
                              />
                              <AiTwotoneEdit
                                className="cursor-pointer hover:text-green-600"
                                size={28}
                                onClick={() => openEdit(item.id)}
                              />
                              <div >
                              <RiDeleteBinLine
                                className="cursor-pointer hover:text-red-600"
                                size={28}
                                onClick={() =>  handleDelete(item.id)}
                              />

                              </div>

                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>

            {showModal && (
              <CategoryModal
                closeModel={closeModel}
                state={setShowModal}
                one={"Name"}
                two={"Entries"}
                three={"Description"}
              />
            )}

            {editModal && editID && (
              <CategoryEditModal
                ID={editID}
                CloseEditModal={closeEditModal}
                EditState={setShowEditModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default category;
