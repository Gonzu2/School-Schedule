import { getCurrentClassChosen } from "./ClassButton";
import ClassButton from "./ClassButton";
import "../css/schedule.css";

import { useState } from "react";

/* eslint-disable react/prop-types */

function Schedule({ lessons }) {
  const lessonTimes = [
    "8:00 - 8:45",
    "8:55 - 9:40",
    "9:50 - 10:35",
    "10:45 - 11:30",
    "12:00 - 12:45",
    "12:55 - 13:40",
    "13:50 - 14:35",
    "14:45 - 15:30",
    "15:40 - 16:25",
    "16:35 - 17:20",
    "17:30 - 18:15",
    "18:25 - 19:10",
  ];
  const daysLithuanian = [
    "Pirmadienis",
    "Antradienis",
    "Trečiadienis",
    "Ketvirtadienis",
    "Penktadienis",
  ];
  const daysEnglish = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const daysOfWeek = [
    "lessons_monday",
    "lessons_tuesday",
    "lessons_wednesday",
    "lessons_thursday",
    "lessons_friday",
  ];

  const currentClassChosen = getCurrentClassChosen();
  const [selectedClass, setSelectedClass] = useState(currentClassChosen);

  function generateLessonSlots(dayLessons) {
    return Array.from({ length: 12 }, (_, i) => {
      const lessonNumber = i + 1;
      const matchingLesson = dayLessons.find(
        (lesson) => lesson.lessonNumber === lessonNumber
      );
      return (
        matchingLesson || {
          lessonNumber,
          lessonName: "",
          lessonTeacher: "",
          lessonTeacherShort: "",
          lessonClass: "",
          lessonBackground: "",
        }
      );
    });
  }

  for (const day of daysOfWeek) {
    lessons[selectedClass][day] = generateLessonSlots(
      lessons[selectedClass][day]
    );
    lessons[selectedClass][day].forEach((lesson) => {
      lesson.lessonTeacherShort = lesson.lessonTeacher
        .replace(/[a-ž]/g, "")
        .replace(" ", "");
    });
  }

  // for (const day of daysOfWeek) {
  //   lessons[selectedClass][day].forEach((lesson) => {
  //     lesson.lessonTeacherShort = lesson.lessonTeacher
  //       .replace(/[a-ž]/g, "")
  //       .replace(" ", "");
  //   });
  // }

  function handleClassChange(newClass) {
    setSelectedClass(newClass);
  }

  return (
    <div className="schedules-container">
      <ClassButton onClassChange={handleClassChange} />
      <table className="main-schedule-big">
        <tbody>
          <tr className="days-and-time-container">
            <th className="days-container">Dienos</th>
            {lessonTimes.length !== 0
              ? lessonTimes.map((time, index) => (
                  <th key={index} className="lesson-number-container">
                    <div className="lesson-number">{index + 1}</div>
                    <div className="lesson-time">{time}</div>
                  </th>
                ))
              : null}
          </tr>

          {daysLithuanian.length === 5 && daysEnglish.length === 5 ? (
            daysLithuanian.map((day, index) => (
              <tr key={index}>
                <th id={`${daysEnglish[index]}-lessons`} className="lessons">
                  {day}
                </th>

                {lessons.length !== 0 &&
                lessons[selectedClass][daysOfWeek[index]].length !== 0 ? (
                  lessons[selectedClass][daysOfWeek[index]].map(
                    (lesson, lessonIndex) => (
                      <th
                        key={lessonIndex}
                        className={`${daysEnglish[index]}-lesson lesson`}
                      >
                        <div
                          className="lesson-name"
                          style={{ background: `${lesson.lessonBackground}` }}
                        >
                          {lesson.lessonName}
                        </div>
                        <div className="lesson-extra-info">
                          <div className="lesson-class">
                            {lesson.lessonClass}
                          </div>
                          <div className="lesson-teacher">
                            {lesson.lessonTeacherShort}
                          </div>
                        </div>
                      </th>
                    )
                  )
                ) : (
                  <th colSpan={lessons.length === 0 ? 5 : 1}>
                    {lessons.length === 0
                      ? "Lessons not found for this class"
                      : `No lessons for ${day}`}
                  </th>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <th colSpan={5}>Unable to find days names</th>
            </tr>
          )}
        </tbody>
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
        <tbody>
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

          {lessonTimes.length !== 0
            ? lessonTimes.map((time, index) => (
                <tr key={index}>
                  <th className="lesson-number-container">
                    <div className="lesson-number">{index + 1}</div>
                    <div className="lesson-time">{time}</div>
                  </th>

                  {lessons.length !== 0 &&
                  lessons[selectedClass] &&
                  Object.keys(lessons[selectedClass]).length !== 0
                    ? Object.keys(lessons[selectedClass]).map((day) => {
                        const firstLesson =
                          lessons[selectedClass][day][index];

                        const dayWithoutPrefix = day.replace("lessons_", "");

                        const className = `${dayWithoutPrefix}-lesson lesson`;

                        return (
                          <th key={day} className={className}>
                            <div
                              className="lesson-name"
                              style={{
                                background: `${firstLesson.lessonBackground}`,
                              }}
                            >
                              {firstLesson.lessonName}
                            </div>
                            <div className="lesson-extra-info">
                              <div className="lesson-class">
                                {firstLesson.lessonClass}
                              </div>
                              <div className="lesson-teacher">
                                {firstLesson.lessonTeacherShort}
                              </div>
                            </div>
                          </th>
                        );
                      })
                    : null}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
