import { FiCheck, FiClock, FiTrash } from "react-icons/fi";

export default function Tasks() {
  return (
    <div className="card w-full bg-slate-100 text-slate-700 my-2 rounded-md">
      <div className="card-body py-4 px-3 md:px-4">
        <h2 className="card-title line-clamp-1">Cookies!</h2>
        <p className="line-clamp-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          odit.
        </p>
        <div className="card-actions justify-between items-center pt-4">
          <div className="">
            <span className="text-sm flex items-center gap-2">
              <FiClock /> Sat 12 Feb 2021, 12:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-success">
              <FiCheck />
            </button>
            <button className="btn btn-sm btn-error">
              <FiTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
