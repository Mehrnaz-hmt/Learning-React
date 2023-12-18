import {course} from "./CourseList"


function CourseCard() {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src="./../public/images/img1.jpg" alt="image-1" />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">React.js Course</p>
            <p className="desc">The Ultimate React And Redux Course </p>
          </div>
          <span className="rate">4</span>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            <span className="bedge badge--secondary">React.Js</span>
            <span className="bedge badge--secondary">Front end</span>
          </div>

          <div className="caption">
            <div className="date">
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </div>
            <span className="badge badge--primary">completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
