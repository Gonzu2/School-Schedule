import { allClasses, getCurrentClassChosen } from "./ClassButton";
import ClassButton from "./ClassButton";
import "../css/schedule.css";

import { useState } from "react";

function Schedule() {
    // let colors = [
    //     "#80e0ff",
    //     "#80b4c0",
    //     "#e080ce",
    //     "#c09d80",
    //     "#80e080",
    //     "#ffc080",
    // ];

    // let teachers = [
    //     "Andreikėnienė Jolanta",
    //     "Andrušaitė Deimantė",
    //     "Balickis Tomas",
    //     "Bartašė Jolanta",
    //     "Boska Vytautas",
    //     "Chmelevskienė Rasa",
    //     "Chomaniuk Jevgenij"
    // ]

    // let lessonsNames = [
    //     "Anglų kalba",
    //     "Matematika",
    //     "Lietuvių kalba",
    //     "Geografija",
    //     "Biologija",
    //     "Informacinės Technologijos",
    //     "Dailė"
    // ]

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
        "18:25 - 19:10"
    ]

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let lessons = [
        {
            "JS 22/1v": {
                lessons_monday: [
                    {
                        lessonNumber: 1,
                        lessonName: "Anglų kalba",
                        lessonTeacher: "Andreikėnienė Jolanta",
                        lessonBackground: "#80e0ff",
                        lessonClass: randomInt(1, 99)
                    },
                ],
                lessons_tuesday: [

                ],
                lessons_wednesday: [

                ],
                lessons_thursday: [

                ],
                lessons_friday: [

                ],
            },
            "GJS 23/1": {
                lessons_monday: [

                ],
                lessons_tuesday: [
                ],
                lessons_wednesday: [
                ],
                lessons_thursday: [
                ],
                lessons_friday: [
                    {
                        lessonNumber: 1,
                        lessonName: "Anglų kalba",
                        lessonTeacher: "Andreikėnienė Jolanta",
                        lessonBackground: "#80e0ff",
                        lessonClass: randomInt(1, 99)
                    },
                ],
            },
        },
    ];

    const currentClassChosen = getCurrentClassChosen();
    const [selectedClass, setSelectedClass] = useState(currentClassChosen);


    function generateLessonSlots(dayLessons) {
        return Array.from({ length: 12 }, (_, i) => {
            const lessonNumber = i + 1;
            const matchingLesson = dayLessons.find(lesson => lesson.lessonNumber === lessonNumber);
            return matchingLesson || {
                lessonNumber,
                lessonName: "",
                lessonTeacher: "",
                lessonTeacherShort: "",
                lessonClass: "",
                lessonBackground: "",
            };
        });
    }

    const daysOfWeek = ["lessons_monday", "lessons_tuesday", "lessons_wednesday", "lessons_thursday", "lessons_friday"];

    for (const day of daysOfWeek) {
        lessons[0][selectedClass][day] = generateLessonSlots(lessons[0][selectedClass][day]);
        lessons.sort((a, b) => a[selectedClass][day][0].lessonNumber - b[selectedClass][day][0].lessonNumber);
    }

    for (const day of daysOfWeek) {
        lessons[0][selectedClass][day].forEach(lesson => {
            lesson.lessonTeacherShort = lesson.lessonTeacher.replace(/[a-ž]/g, "").replace(" ", "");
        });
    }

    function handleClassChange(newClass) {
        setSelectedClass(newClass);
    }

    return (
        <div className="schedules-container">
            <ClassButton onClassChange={handleClassChange} />

            <table className="main-schedule-big">
                <tr className="days-and-time-container">
                    <th className="days-container">Dienos</th>
                    {lessonTimes.length !== 0 ?
                        lessonTimes.map((time, index) => (
                            <th key={index} className="lesson-number-container">
                                <div className="lesson-number">{index + 1}</div>
                                <div className="lesson-time">{time}</div>
                            </th>
                        ))
                        : null
                    }
                </tr>
                <tr>
                    <th id="monday-lessons" className="lessons">
                        Pirmadienis
                    </th>

                    {lessons.length !== 0 && lessons[0][selectedClass].lessons_monday.length !== 0
                        ? lessons[0][selectedClass].lessons_monday.map((lesson, index) => (
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
                        : console.log("Not found Monday lessons")}

                </tr>

                <tr>
                    <th id="tuesday-lessons" className="lessons">
                        Antradienis
                    </th>

                    {lessons.length !== 0 && lessons[0][selectedClass].lessons_tuesday.length !== 0
                        ? lessons[0][selectedClass].lessons_tuesday.map((lesson, index) => (
                            <th key={index} className="tuesday-lesson lesson">
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
                        : console.log("Not found tuesday lessons")}
                </tr>

                <tr>
                    <th id="wednesday-lessons" className="lessons">
                        Trečiadienis
                    </th>

                    {lessons.length !== 0 && lessons[0][selectedClass].lessons_wednesday.length !== 0
                        ? lessons[0][selectedClass].lessons_wednesday.map((lesson, index) => (
                            <th key={index} className="wednesday-lesson lesson">
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
                        : console.log("Not found wednesday lessons")}
                </tr>

                <tr>
                    <th id="thursday-lessons" className="lessons">
                        Ketvirtadienis
                    </th>
                    {lessons.length !== 0 && lessons[0][selectedClass].lessons_thursday.length !== 0
                        ? lessons[0][selectedClass].lessons_thursday.map((lesson, index) => (
                            <th key={index} className="thursday-lesson lesson">
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
                        : console.log("Not found thursday lessons")}
                </tr>

                <tr>
                    <th id="friday-lessons" className="lessons">
                        Penktadienis
                    </th>

                    {lessons.length !== 0 && lessons[0][selectedClass].lessons_friday.length !== 0
                        ? lessons[0][selectedClass].lessons_friday.map((lesson, index) => (
                            <th key={index} className="friday-lesson lesson">
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
                        : console.log("Not found friday lessons")}

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

                {lessonTimes.length !== 0 ?
                    lessonTimes.map((time, index) => (
                        <tr key={index}>
                            <th className="lesson-number-container">
                                <div className="lesson-number">{index + 1}</div>
                                <div className="lesson-time">{time}</div>
                            </th>

                            {lessons.length !== 0 && lessons[0][selectedClass] && Object.keys(lessons[0][selectedClass]).length !== 0 ? (
                                Object.keys(lessons[0][selectedClass]).map((day, daysIndex) => {
                                    const firstLesson = lessons[0][selectedClass][day][index]; // Get the first lesson of the day

                                    // Remove the "lessons_" prefix from day
                                    const dayWithoutPrefix = day.replace("lessons_", "");

                                    // Determine the className based on the day without the prefix
                                    const className = `${dayWithoutPrefix}-lesson lesson`;

                                    return (
                                        <th key={day} className={className}>
                                            <div
                                                className="lesson-name"
                                                style={{ background: `${firstLesson.lessonBackground}` }}
                                            >
                                                {firstLesson.lessonName}
                                            </div>
                                            <div className="lesson-extra-info">
                                                <div className="lesson-class">{firstLesson.lessonClass}</div>
                                                <div className="lesson-teacher">
                                                    {firstLesson.lessonTeacherShort}
                                                </div>
                                            </div>
                                        </th>
                                    );
                                })
                            ) : null}

                        </tr>
                    ))
                    : null
                }
            </table>
        </div>
    );
}

export default Schedule;