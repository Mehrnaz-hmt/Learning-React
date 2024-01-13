const courseList = ["All", "Active", "completed", "Upcoming"];

function Header() {
  return (
    <div>
      <h1>Courses (3)</h1>
      <div className="course-status">
      {courseList.map(s => <div key={s}>{s}</div>)}
      </div>
    </div>
  );
}

export default Header;
