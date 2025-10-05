import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span
      className="d-inline-block position-relative"
      style={{ width: "1.1em", height: "1.1em" }}
    >
      {/* White base circle */}
      <FaCircle
        className="position-absolute text-white"
        style={{ top: 0, left: 0, fontSize: "1.1em" }}
      />
      {/* Green checkmark on top */}
      <FaCheckCircle
        className="position-absolute text-success"
        style={{ top: 0, left: 0, fontSize: "1em" }}
      />
    </span>
  );
}