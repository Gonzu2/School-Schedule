import React from "react";

function LessonInfo({ lesson, lessonIndex, onClick }) {
  const daysEnglish = ["monday", "tuesday", "wednesday", "thursday", "friday"];

  function handleLessonClick() {
    onClick(lesson);
  }

  return (
    <th
      key={lessonIndex}
      className={`${daysEnglish[lessonIndex]}-lesson lesson`}
      onClick={handleLessonClick}
    >
      <div
        className="lesson-name"
        style={{ background: `${lesson.lessonBackground}` }}
      >
        {lesson.lessonName}
      </div>
      <div className="lesson-extra-info">
        <div className="lesson-class">{lesson.lessonClass}</div>
        <div className="lesson-teacher">{lesson.lessonTeacherShort}</div>
      </div>
    </th>
  );
}

export default LessonInfo;
