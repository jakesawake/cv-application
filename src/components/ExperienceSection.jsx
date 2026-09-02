import { useState } from "react";
import ExperienceEntry from "./ExperienceEntry";

export default function ExperienceSection() {
  const [entries, setEntries] = useState([]);

  function handleEntryChange(updated) {
    setEntries((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  }

  function handleEntryDelete(id) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function handleAddEntry() {
    setEntries((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        company: "",
        city: "",
        title: "",
        dateFrom: "",
        dateTo: "",
        duties: "",
      },
    ]);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-blue-500">Experience</h2>
      {entries.map((entry) => (
        <ExperienceEntry
          key={entry.id}
          entry={entry}
          onChange={handleEntryChange}
          onDelete={handleEntryDelete}
        />
      ))}
      <button type="button" onClick={handleAddEntry}>
        Add Experience
      </button>
    </div>
  );
}
