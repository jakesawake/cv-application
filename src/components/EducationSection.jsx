import EducationEntry from "./EducationEntry";
export default function EducationSection() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-blue-500">Education</h2>
      <EducationEntry />
    </div>
  );
}
