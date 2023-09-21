import ClassButton from "./ClassButton";
import "../css/schedule.css";

function Schedule() {
  let colors = [
    "#80e0ff",
    "#80b4c0",
    "#e080ce",
    "#c09d80",
    "#80e080",
    "#ffc080",
  ];

  let lessons = [
    {
      lessonDay: 1,
      lessonNumber: 1,
      lessonName: "Anglų",
      lessonTeacher: "Vaiva Kažkas",
      lessonTeacherShort: "",
      lessonClass: 44,
      lessonBackground: colors[0],
    },
    {
      lessonDay: 1,
      lessonNumber: 3,
      lessonName: "Anglų",
      lessonTeacher: "Vaiva Kažkas",
      lessonTeacherShort: "",
      lessonClass: 44,
      lessonBackground: colors[0],
    },
    {
      lessonDay: 1,
      lessonNumber: 4,
      lessonName: "Matkė",
      lessonTeacher: "Vaiva Kažkas",
      lessonTeacherShort: "",
      lessonClass: 44,
      lessonBackground: colors[0],
    },
  ];

  lessons.forEach((lesson) => {
    let teacherName = lesson.lessonTeacher
      .replace(/[a-ž]/g, "")
      .replace(" ", "");
    lesson.lessonTeacherShort = teacherName;
  });



  // if (!foundLesson) {
  //   lessons[i] = {
  //     lessonDay: 1,
  //     lessonNumber: i + 1,
  //     lessonName: "",
  //     lessonTeacher: "",
  //     lessonTeacherShort: "",
  //     lessonClass: "",
  //     lessonBackground: "white",
  //   };
  // } else if (foundLesson && lessons[i].lessonNumber !== i + 1) {
  //   lessons[lessons[i].lessonNumber - 1] = {
  //     lessonDay: lessons[i].lessonDay,
  //     lessonNumber: lessons[i].lessonNumber,
  //     lessonName: lessons[i].lessonName,
  //     lessonTeacher: lessons[i].lessonTeacher,
  //     lessonTeacherShort: lessons[i].lessonTeacherShort,
  //     lessonClass: lessons[i].lessonClass,
  //     lessonBackground: lessons[i].lessonBackground,
  //   };
  //   lessons[i] = {
  //     lessonDay: 1,
  //     lessonNumber: i + 1,
  //     lessonName: "",
  //     lessonTeacher: "",
  //     lessonTeacherShort: "",
  //     lessonClass: "",
  //     lessonBackground: "white",
  //   };
  // }

  lessons.sort((a, b) => {
    return a.lessonNumber - b.lessonNumber;
  });
  console.log(lessons);

  let lessons_monday = lessons.filter((lesson) => lesson.lessonDay === 1);

  return (
    <div className="schedules-container">
      <ClassButton />
      <table className="main-schedule-big">
        <tr className="days-and-time-container">
          <th className="days-container">Dienos</th>
          <th className="lesson-number-container">
            <div className="lesson-number">1</div>
            <div className="lesson-time">8:00 - 8:45</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">2</div>
            <div className="lesson-time">8:55 - 9:40</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">3</div>
            <div className="lesson-time">9:50 - 10:35</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">4</div>
            <div className="lesson-time">10:45 - 11:30</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">5</div>
            <div className="lesson-time">12:00 - 12:45</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">6</div>
            <div className="lesson-time">12:55 - 13:40</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">7</div>
            <div className="lesson-time">13:50 - 14:35</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">8</div>
            <div className="lesson-time">14:45 - 15:30</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">9</div>
            <div className="lesson-time">15:40 - 16:25</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">10</div>
            <div className="lesson-time">16:35 - 17:20</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">11</div>
            <div className="lesson-time">17:30 - 18:15</div>
          </th>
          <th className="lesson-number-container">
            <div className="lesson-number">12</div>
            <div className="lesson-time">18:25 - 19:10</div>
          </th>
        </tr>
        <tr>
          <th id="monday-lessons" className="lessons">
            Pirmadienis
          </th>

          {lessons_monday.length !== 0
            ? lessons_monday.map((lesson, index) => (
                <th key={index} className="monday-lesson lesson">
                  <div
                    className="lesson-name"
                    style={{ background: `${lesson.lessonBackground}` }}
                  >
                    {lesson.lessonName}
                  </div>
                  <div className="lesson-extra-info">
                    <div className="lesson-class">{lesson.lessonClass}</div>
                    <div className="lesson-teacher">
                      {lesson.lessonTeacherShort}
                    </div>
                  </div>
                </th>
              ))
            : console.log("Not found monday lessons")}
        </tr>

        <tr>
          <th id="monday-lessons" className="lessons">
            Antradienis
          </th>
        </tr>

        <tr>
          <th id="monday-lessons" className="lessons">
            Trečiadienis
          </th>
        </tr>

        <tr>
          <th id="monday-lessons" className="lessons">
            Ketvirtadienis
          </th>
        </tr>

        <tr>
          <th id="monday-lessons" className="lessons">
            Penktadienis
          </th>
        </tr>
      </table>

      {/* 
            
            <th className="monday-lesson lesson">
                <div className="lesson-name" style={{ background: "rgb(26, 180, 26)" }}>Anglų</div>
                <div className="lesson-extra-info">
                    <div className="lesson-class">28</div>
                    <div className="lesson-teacher">DV</div>
                </div>
            </th>

            */}
      <table className="main-schedule-small">
        <tr className="days-and-time-container">
          <th className="days-container">Dienos</th>
          <th id="monday-lessons" className="lessons">
            Pirma&shy;dienis
          </th>
          <th id="tuesday-lessons" className="lessons">
            Antra&shy;dienis
          </th>
          <th id="wednesday-lessons" className="lessons">
            Trečia&shy;dienis
          </th>
          <th id="thursday-lessons" className="lessons">
            Ketvirta&shy;dienis
          </th>
          <th id="friday-lessons" className="lessons">
            Penkta&shy;dienis
          </th>
        </tr>

        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">1</div>
            <div className="lesson-time">8:00 - 8:45</div>
          </th>
          <th className="monday-lesson lesson">
            <div
              className="lesson-name"
              style={{ background: "rgb(26, 180, 26)" }}
            >
              Anglų
            </div>
            <div className="lesson-extra-info">
              <div className="lesson-class">28</div>
              <div className="lesson-teacher">DV</div>
            </div>
          </th>
          <th className="tuesday-lesson lesson">
            <div
              className="lesson-name"
              style={{ background: "rgb(26, 180, 26)" }}
            >
              Anglų
            </div>
            <div className="lesson-extra-info">
              <div className="lesson-class">28</div>
              <div className="lesson-teacher">DV</div>
            </div>
          </th>
          <th className="wednesday-lesson lesson">
            <div
              className="lesson-name"
              style={{ background: "rgb(26, 180, 26)" }}
            >
              Anglų
            </div>
            <div className="lesson-extra-info">
              <div className="lesson-class">28</div>
              <div className="lesson-teacher">DV</div>
            </div>
          </th>
          <th className="thursday-lesson lesson">
            <div
              className="lesson-name"
              style={{ background: "rgb(26, 180, 26)" }}
            >
              Anglų
            </div>
            <div className="lesson-extra-info">
              <div className="lesson-class">28</div>
              <div className="lesson-teacher">DV</div>
            </div>
          </th>
          <th className="friday-lesson lesson">
            <div
              className="lesson-name"
              style={{ background: "rgb(26, 180, 26)" }}
            >
              Anglų
            </div>
            <div className="lesson-extra-info">
              <div className="lesson-class">28</div>
              <div className="lesson-teacher">DV</div>
            </div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">2</div>
            <div className="lesson-time">8:55 - 9:40</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">3</div>
            <div className="lesson-time">9:50 - 10:35</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">3</div>
            <div className="lesson-time">9:50 - 10:35</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">4</div>
            <div className="lesson-time">10:45 - 11:30</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">5</div>
            <div className="lesson-time">12:00 - 12:45</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">6</div>
            <div className="lesson-time">12:55 - 13:40</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">7</div>
            <div className="lesson-time">13:50 - 14:35</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">8</div>
            <div className="lesson-time">14:45 - 15:30</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">9</div>
            <div className="lesson-time">15:40 - 16:25</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">10</div>
            <div className="lesson-time">16:35 - 17:20</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">11</div>
            <div className="lesson-time">17:30 - 18:15</div>
          </th>
        </tr>
        <tr>
          <th className="lesson-number-container">
            <div className="lesson-number">12</div>
            <div className="lesson-time">18:25 - 19:10</div>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default Schedule;