// app/(Kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx
export default function AssignmentEditor({
  params,
}: {
  params: { cid: string; aid: string };
}) {
  const { cid, aid } = params;

  return (
    <div id="wd-assignments-editor">
      <h2>
        Assignment {aid} for Course {cid}
      </h2>

      {/* Assignment Name */}
      <input id="wd-name" defaultValue={`Assignment ${aid}`} />
      <br />
      <br />

      {/* Description */}
      <textarea
        id="wd-description"
        defaultValue={`This is the description for assignment ${aid} in course ${cid}.We have to implement kambaz application having various pages and functionality`}
      />
      <br /><br />

      <table>
        <tbody>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>

          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="assignments">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
              </select>
            </td>
          </tr>
          

          {/* Display Grade */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-grade" defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="complete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          

          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission" defaultValue="online">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="external">External Tool</option>
              </select>
            </td>
          </tr>
          

          {/* Online Entry Options */}
          <tr>
            <td align="right" valign="top">Online Entry Options</td>
            <td>
              <label>
                <input type="checkbox" defaultChecked /> Text Entry
              </label>
              <br />
              <label>
                <input type="checkbox" /> Website URL
              </label>
              <br />
              <label>
                <input type="checkbox" /> Media Recordings
              </label>
              <br />
              <label>
                <input type="checkbox" /> File Uploads
              </label>
            </td>
          </tr>
          

          {/* Assign To */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          

          {/* Due Date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2025-05-13" />
            </td>
          </tr>
          

          {/* Available From */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2025-05-06"
              />
            </td>
          </tr>
          

          {/* Until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-until-date">Until</label>
            </td>
            <td>
              <input id="wd-until-date" type="date" defaultValue="2025-05-20" />
            </td>
          </tr>
        </tbody>
      </table>
      <button>Save</button><button>Cancel</button>
    </div>
  );
}
