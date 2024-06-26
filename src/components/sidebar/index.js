import { useContext, useState } from "react";
import { NotesContext } from "../../App";

const colors = ["#ebcfad", "#b7e4c7", "#f0c6eb", "#f9e2d2", "#c2e59c"];

function Sidebar() {
  const { addNote } = useContext(NotesContext);
  const [selectedTheme, setselectedTheme] = useState(colors[0]);

  return (
    <div className="notes-app-sidebar">
      <button className="add-note-btn" onClick={addNote}>
        <i className="fa fa-plus"></i>
      </button>
      <div className="color-input-container">
        {colors.map((color) => (
          <div className="color-input">
            <input
              type="radio"
              name="color-input"
              value={color}
              id={"color-" + color}
              checked={selectedTheme === color}
              onChange={(e) => setselectedTheme(color)}
            />
            <label
              htmlFor={"color-" + color}
              style={{
                backgroundColor: color,
              }}
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
