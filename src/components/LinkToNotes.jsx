import React from "react";
import { Link } from "react-router-dom";

const LinkToNotes = () => {
  return (
    <div className="notes-link">
        <h5>
            <Link to="notes">
                Click to add notes
            </Link>
        </h5>
    </div>
  );
}

export default LinkToNotes;