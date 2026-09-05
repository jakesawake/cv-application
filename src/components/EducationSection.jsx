import EducationEntry from "./EducationEntry";
import useEntryList from "../hooks/useEntryList";

export default function EducationSection() {
  const { entries, handleEntryChange, handleEntryDelete, handleAddEntry } =
    useEntryList(createBlankEducationSection);

  function createBlankEducationSection() {
    return {
      id: crypto.randomUUID(),
      school: "",
      city: "",
      programName: "",
      startDate: "",
      endDate: "",
      accomplished: "",
    };
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
