import {
  FaRegCalendarAlt,
  FaClipboardList,
  FaLayerGroup,
} from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { AiOutlinePaperClip } from "react-icons/ai";
import { useState } from "react";
const TodoCard = () => {
  const [isMsgModal, setIsMsgModal] = useState(false);
  return (
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
              src="https://uploads-ssl.webflow.com/61de06d4abe5f704a2b83cc6/62702bd164ffe48304364225_Circle%20profile%20400x400%20(1).jpeg"
              alt=""
            />{" "}
            <h4 className="font-semibold">Client Name</h4>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="h-8 w-8 object-cover rounded-full"
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
              alt=""
            />{" "}
            <h4 className="font-semibold">Sadik Istiak</h4>
          </div>
        </div>
        <div className="flex items-center justify-between gap-1 my-3">
          <div className="flex items-center gap-1">
            <FaLayerGroup /> <p>Lorem ipsum, dolor sit amet...</p>
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
            <span>12+</span>
          </div>
          <button
            onClick={() => setIsMsgModal(!isMsgModal)}
            className="flex items-center"
          >
            <RiWechatLine className="text-lg" /> <span>15</span>
          </button>
          <button className="flex items-center">
            <AiOutlinePaperClip className="text-lg" /> <span>25</span>
          </button>
          <div className="flex items-center">
            <FaRegCalendarAlt /> <span>10-12-2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
