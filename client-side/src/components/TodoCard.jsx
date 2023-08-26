import {
  FaRegCalendarAlt,
  FaClipboardList,
  FaLayerGroup,
} from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import UploadAttachments from "./UploadAttachments";
const TodoCard = ({ todo, category }) => {
  const [isMsgModal, setIsMsgModal] = useState(false);
  const [isAttachmentModal, setIsAttachmentModal] = useState(false);
  const {
    _id,
    client,
    assignedTo,
    task,
    participants,
    message,
    attachment,
    dueDate,
  } = todo;
  return (
    <>
      <div className="max-w-[350px] text-gray-800 bg-white   w-96 rounded mr-1 relative">
        {/* Message Modal */}
        {isMsgModal && (
          <div className="w-full h-full absolute bg-white/20 backdrop-blur-md p-3 rounded flex gap-1 flex-col justify-between overflow-y-auto">
            <div className="">
              <h5 className="font-semibold text-sm">Write Message</h5>
              <textarea
                className="w-full rounded px-1 outline-green-200"
                name="attachment"
                id="attachment"
                placeholder="Type your message.."
              ></textarea>
            </div>

            <div className="flex gap-5 font-semibold">
              <button
                className="px-3 bg-red-500 text-white rounded"
                onClick={() => setIsMsgModal(!isMsgModal)}
              >
                Close
              </button>
              <button
                className="px-3 bg-green-500 text-white rounded"
                onClick={() => setIsMsgModal(!isMsgModal)}
              >
                Send
              </button>
            </div>
          </div>
        )}
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                className="h-8 w-8 object-cover rounded-full"
                src={client?.profileImageUrl}
                alt=""
              />{" "}
              <h4 className="font-semibold">{client?.name}</h4>
            </div>
            <div className="flex items-center gap-1">
              <img
                className="h-8 w-8 object-cover rounded-full"
                src={client?.profileImageUrl}
                alt=""
              />{" "}
              <h4 className="font-semibold">{assignedTo?.name}</h4>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 my-3">
            <div className="flex items-center gap-1">
              <FaLayerGroup /> <p>{task?.description}</p>
            </div>
            <button className="font-semibold flex items-center gap-1 px-1 bg-slate-200 rounded">
              <FaClipboardList /> <p>1/2</p>
            </button>
          </div>
          <div className="flex items-center gap-2 justify-between font-semibold">
            <div>
              <img
                className="w-8 h-8 object-cover rounded-full"
                src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0="
                alt=""
              />
            </div>
            <div>
              <img
                className="w-8 h-8 object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv0N6yjBICeonyVWKAlFXiUQ_saGhEYIyXvTLo-ORckROMeexqQT9ihVQv5XCyXN1v4o&usqp=CAU"
                alt=""
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
              <span>{participants.length - 1}+</span>
            </div>
            <button
              onClick={() => setIsMsgModal(!isMsgModal)}
              className="flex items-center"
            >
              <RiWechatLine className="text-lg" /> <span>{message.length}</span>
            </button>
            <button
              onClick={() => setIsAttachmentModal(!isAttachmentModal)}
              className="flex items-center"
            >
              <AiOutlinePaperClip className="text-lg" />{" "}
              <span>{attachment.length}</span>
            </button>
            <div className="flex items-center">
              <FaRegCalendarAlt /> <span>{dueDate}</span>
            </div>
          </div>
        </div>
      </div>
      {isAttachmentModal && (
        <div className="fixed -top-5 left-0 grid justify-center items-center bg-black/60 backdrop-blur w-full h-full z-20">
          <div className="bg-white rounded-xl relative">
            <UploadAttachments
              _id={_id}
              category={category}
              isModal={setIsAttachmentModal}
            />
            <button
              className="absolute top-2 right-2 p-1 bg-red-200 rounded-full"
              onClick={() => setIsAttachmentModal(!isAttachmentModal)}
            >
              <MdClose className="text-xl text-red-500" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCard;
