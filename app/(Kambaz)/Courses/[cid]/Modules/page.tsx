export default function Modules() {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button>Collapse All</button>
        <button style={{ marginLeft: "10px" }}>View Progress</button>
        <select style={{ marginLeft: "10px" }}>
          <option>Publish All</option>
          <option>Unpublish All</option>
        </select>
        <button style={{ marginLeft: "10px" }}>+ Module</button>
      </div>

      <ul>
        {/* Week 1 */}
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML</li>
                <li className="wd-content-item">Basic tags: headings, paragraphs, lists</li>
                <li className="wd-content-item">Creating hyperlinks and images</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 3 */}
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Selectors, properties, and values</li>
                <li className="wd-content-item">Styling text, colors, and backgrounds</li>
                <li className="wd-content-item">Box model: margins, borders, padding</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
