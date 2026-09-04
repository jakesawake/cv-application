import { useState } from "react";
import EducationEntry from "./EducationEntry";

export default function EducationSection() {
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
        school: "",
        city: "",
        programName: "",
        startDate: "",
        endDate: "",
        accomplished: "",
      },
    ]);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-blue-500">Education</h2>
      {entries.map((entry) => (
        <EducationEntry
          key={entry.id}
          entry={entry}
          onChange={handleEntryChange}
          onDelete={handleEntryDelete}
        />
      ))}
      <button type="button" onClick={handleAddEntry}>
        Add Education
      </button>
    </div>
  );
}
