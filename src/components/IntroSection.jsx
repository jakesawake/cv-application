import { useState } from "react";

export default function IntroSection() {
  const [applicant, setApplicant] = useState({
    name: "",
    objective: "",
  });

  const [isEditing, setIsEditing] = useState(true); // boolean to render editing display or read only display

  // destructures the HTML/DOM element that triggered event into {name, value}
  function handleChange(e) {
    const { name, value } = e.target;

    setApplicant((prev) => ({
      // spread the existing fields so we only change one, not replace the whole object
      ...prev,
      // e.target.name ("name" or "objective") picks which field to overwrite
      [name]: value,
    }));
  }

  // if submit button is pressed -> flip the boolean to false
  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  // using ternary if isEditing bool is true to display either the editable form element or just a read only version of the applicant's data
  return isEditing ? (
    <form onSubmit={handleSubmit}>
      <label htmlFor="applicantInput">Applicant name:</label>
      <input
        className="border border-blue-500"
        id="applicantInput"
        name="name"
        value={applicant.name}
        onChange={handleChange}
      />

      <label htmlFor="applicantObjective">Applicant objective:</label>
      <textarea
        className="border border-blue-500"
        id="applicantObjective"
        name="objective"
        value={applicant.objective}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="rounded-[5px] border border-blue-500 p-1.5 text-[12px]"
      >
        Submit
      </button>
    </form>
  ) : (
    <>
      <h1 className="text-[2rem] font-bold">{applicant.name}</h1>
      <p>{applicant.objective}</p>
      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </>
  );
}
