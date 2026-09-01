export default function EducationEntry() {
  return (
    <div className="addable-entry">
      <span>
        <strong>George Brown</strong>, Toronto, ON - Social Service Worker
      </span>
      <p>
        <em>from</em>{" "}
        <time className="time-entry" dateTime="2019-09">
          September, 2019
        </time>{" "}
        <em>to</em>{" "}
        <time className="time-entry" dateTime="2021-05">
          May, 2021
        </time>
      </p>
      <ul>
        <li>
          Completed the "Social Service worker". Two-year program with honors
        </li>
      </ul>
    </div>
  );
}
