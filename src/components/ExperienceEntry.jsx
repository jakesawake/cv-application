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
    <div className="addable-entry">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Company name:
            <input
              type="text"
              name="company"
              value={entry.company}
              onChange={handleChange}
            />
          </label>

          <label>
            City name:
            <input
              type="text"
              name="city"
              value={entry.city}
              onChange={handleChange}
            />
          </label>

          <label>
            Title name:
            <input
              type="text"
              name="title"
              value={entry.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Start date:
            <input
              type="text"
              name="dateFrom"
              value={entry.dateFrom}
              onChange={handleChange}
            />
          </label>

          <label>
            End date:
            <input
              type="text"
              name="dateTo"
              value={entry.dateTo}
              onChange={handleChange}
            />
          </label>

          <label>
            Duties:
            <input
              type="text"
              name="duties"
              value={entry.duties}
              onChange={handleChange}
            />
          </label>

          <button type="button" onClick={onDelete(entry.id)}>
            Remove
          </button>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <>
          <span>
            <strong>{entry.company}</strong>, {entry.city} - {entry.title}
          </span>
          <time className="time-entry" dateTime={entry.dateFrom}>
            {entry.dateFrom}
          </time>{" "}
          to
          <time className="time-entry" dateTime={entry.dateTo}>
            {entry.dateTo}
          </time>
          <ul>
            <li>{entry.duties}</li>
          </ul>
        </>
      )}
    </div>
  );
}
