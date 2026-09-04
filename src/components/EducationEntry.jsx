import { useState } from "react";

export default function EducationEntry({ entry, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;

    onChange({ ...entry, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col gap-0.5">
      {isEditing ? (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            School name:
            <input
              type="text"
              className="border border-blue-500"
              name="school"
              value={entry.school}
              onChange={handleChange}
            />
          </label>

          <label>
            City name:
            <input
              type="text"
              className="border border-blue-500"
              name="city"
              value={entry.city}
              onChange={handleChange}
            />
          </label>
          <label>
            Program name:{" "}
            <input
              type="text"
              className="border border-blue-500"
              name="programName"
              value={entry.programName}
              onChange={handleChange}
            />
          </label>

          <label>
            Start date:
            <input
              type="text"
              className="border border-blue-500"
              name="startDate"
              value={entry.startDate}
              onChange={handleChange}
            />
          </label>

          <label>
            End date:
            <input
              type="text"
              className="border border-blue-500"
              name="endDate"
              value={entry.endDate}
              onChange={handleChange}
            />
          </label>

          <label>
            Accomplishments:{" "}
            <input
              type="text"
              className="border border-blue-500"
              name="accomplished"
              value={entry.accomplished}
              onChange={handleChange}
            />
          </label>

          <button
            type="button"
            className="rounded-[5px] border border-blue-500 p-1.5 text-[12px]"
            onClick={() => {
              onDelete(entry.id);
            }}
          >
            Remove
          </button>

          <button
            type="submit"
            className="rounded-[5px] border border-blue-500 p-1.5 text-[12px]"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <span>
            <strong>{entry.school}</strong>, {entry.city} - {entry.programName}
          </span>
          <span>
            <time dateTime={entry.startDate} className="italic">
              {entry.startDate}
            </time>{" "}
            to{" "}
            <time dateTime={entry.endDate} className="italic">
              {entry.endDate}
            </time>
          </span>
          <ul>
            <li>{entry.accomplished}</li>
          </ul>
          <button
            className="rounded-[5px] p-1.5 text-[12px]"
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="rounded-[5px] p-1.5 text-[12px]"
            type="button"
            onClick={() => onDelete(entry.id)}
          >
            Remove Entry
          </button>
        </>
      )}
    </div>
  );
}
