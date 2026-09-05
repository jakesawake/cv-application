import { useState } from "react";

export default function useEntryList(blankEntry) {
  const [entries, setEntries] = useState([]);

  function handleEntryChange(updated) {
    setEntries((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  }

  function handleEntryDelete(id) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function handleAddEntry() {
    setEntries((prev) => [...prev, blankEntry()]);
  }
  return {
    entries,
    handleEntryChange,
    handleEntryDelete,
    handleAddEntry,
  };
}
