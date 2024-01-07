import {course} from "./CourseList"


function CourseCard(props) {
  console.log(props.course)
  return (
    <div className="course-item">
      <div className="course-item__img">
        {/* {course.imageUrl} */}  
         <img src={props.course.imageUrl}/>
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{props.course.title}</p>
            <p className="desc">{props.course.description}</p>
          </div>
          <span className="rate">{props.course.rate}</span>
        </div>
        <div className="course-item__footer">
          <div className="tags">
           {props.course.tags.map(tag => {
             <span key={tag} className="bedge badge--secondary">{tag}</span>
           })}
            
          </div>

          <div className="caption">
            <div className="date">
              {new Date(props.course.start).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </div>
            <span className="badge badge--primary">{props.course.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
