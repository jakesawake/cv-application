import { useState } from "react";

export default function ExperienceEntry({ entry, onChange, onDelete }) {
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
        <form className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
          <label>
            Company name:
            <input
              className="border border-blue-500"
              type="text"
              name="company"
              value={entry.company}
              onChange={handleChange}
            />
          </label>

          <label>
            City name:
            <input
              className="border border-blue-500"
              type="text"
              name="city"
              value={entry.city}
              onChange={handleChange}
            />
          </label>

          <label>
            Title name:
            <input
              className="border border-blue-500"
              type="text"
              name="title"
              value={entry.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Start date:
            <input
              className="border border-blue-500"
              type="text"
              name="dateFrom"
              value={entry.dateFrom}
              onChange={handleChange}
            />
          </label>

          <label>
            End date:
            <input
              className="border border-blue-500"
              type="text"
              name="dateTo"
              value={entry.dateTo}
              onChange={handleChange}
            />
          </label>

          <label>
            Duties:
            <input
              className="border border-blue-500"
              type="text"
              name="duties"
              value={entry.duties}
              onChange={handleChange}
            />
          </label>

          <button
            className="rounded-[5px] border border-blue-500 p-1.5 text-[12px]"
            type="button"
            onClick={() => onDelete(entry.id)}
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
            <strong>{entry.company}</strong>, {entry.city} - {entry.title}
          </span>
          <span>
            <time className="italic" dateTime={entry.dateFrom}>
              {entry.dateFrom}
            </time>{" "}
            to{" "}
            <time className="italic" dateTime={entry.dateTo}>
              {entry.dateTo}
            </time>
          </span>
          <ul>
            <li>{entry.duties}</li>
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
