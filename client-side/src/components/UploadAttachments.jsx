/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { useTodoContext } from "../TodoContext/TodoContext";

const AttachmentList = ({ attachments }) => {
  return (
    <ul>
      {attachments.map((attachment, index) => (
        <li className="flex items-center justify-between mt-1" key={index}>
          <p className="px-2 bg-slate-200 rounded-l-full w-full">
            <span className="font-semibold"></span>{" "}
            {attachment.name.length > 30
              ? attachment.name.substring(0, 30) + "..."
              : attachment.name}
          </p>
          <p className="px-2 font-semibold bg-slate-300 rounded-r-full uppercase w-20">
            {attachment.name.split(".").pop()}
          </p>
        </li>
      ))}
    </ul>
  );
};

const UploadAttachments = ({ _id, category, isModal }) => {
  const [uploadedAttachments, setUploadedAttachments] = useState([]);
  const { setRefetch, setLoading } = useTodoContext();

  // get every new file and store
  const handleFileUpload = (event) => {
    const newAttachments = Array.from(event.target.files);
    setUploadedAttachments((prevAttachments) => [
      ...prevAttachments,
      ...newAttachments,
    ]);
  };

  // upload attachments in server
  const handleUploadedAttachments = () => {
    setLoading(true);
    fetch(`https://todo-dip.onrender.com/add-attachment/${category}/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadedAttachments),
    })
      .then((res) => {
        console.log(res);
        isModal(false);
        setRefetch(new Date());
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="">
      <input
        className="mb-1 bg-slate-500 w-full px-5 py-2 rounded-t-xl text-white"
        type="file"
        multiple
        onChange={handleFileUpload}
      />
      <hr />
      <div className="px-5 mt-2 mb-5">
        <AttachmentList attachments={uploadedAttachments} />
        {uploadedAttachments.length === 0 ? (
          <p className="text-red-400">You haven&apos;t added!</p>
        ) : (
          <button
            onClick={handleUploadedAttachments}
            className="bg-green-500 px-5 py-1 rounded text-white mt-5 font-semibold flex items-center gap-1"
          >
            <RiUploadCloud2Fill className="text-xl" /> Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadAttachments;
