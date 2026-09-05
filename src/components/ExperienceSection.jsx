import ExperienceEntry from "./ExperienceEntry";
import useEntryList from "../hooks/useEntryList";

export default function ExperienceSection() {
  const { entries, handleEntryChange, handleEntryDelete, handleAddEntry } =
    useEntryList(createBlankExperienceSection);

  function createBlankExperienceSection() {
    return {
      id: crypto.randomUUID(),
      company: "",
      city: "",
      title: "",
      dateFrom: "",
      dateTo: "",
      duties: "",
    };
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
