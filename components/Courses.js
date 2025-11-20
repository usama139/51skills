import styles from "./Courses.module.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      img: "/assets/1.jpeg",
      title: "Ultimate AWS Certified Solutions Architect Associate…",
      rating: 4.7,
      students: "249,257",
      teacher: "Stephane Maarek",
      price: "$84.99",
      time: "2h 35m",
      modules: "15 modules",
      level: "Beginner",
    },
    {
      id: 2,
      img: "/assets/3.jpeg",
      title: "The Complete Python Bootcamp From Zero to Hero",
      rating: 4.8,
      students: "528,625",
      teacher: "Jose Portilla",
      price: "$74.99",
      time: "2h 35m",
      modules: "15 modules",
      level: "Beginner",
    },
    {
      id: 3,
      img: "/assets/4.jpeg",
      title: "The Complete JavaScript Bootcamp From Zero to Hero",
      rating: 4.8,
      students: "432,657",
      teacher: "Colt Steele",
      price: "$89.99",
      time: "2h 35m",
      modules: "15 modules",
      level: "Beginner",
    },
    {
      id: 4,
      img: "/assets/5.jpeg",
      title: "The Complete React Bootcamp From Zero to Hero",
      rating: 4.8,
      students: "345,678",
      teacher: "Stephen Grider",
      price: "$99.99",
      time: "2h 35m",
      modules: "15 modules",
      level: "Beginner",
    },
    {
      id: 5,
      img: "/assets/2.jpeg",
      title: "The Complete Node.js Bootcamp From Zero to Hero",
      rating: 4.7,
      students: "456,789",
      teacher: "Jonas Schmedtmann",
      price: "$79.99",
      time: "2h 35m",
      modules: "15 modules",
      level: "Beginner",
    },
    {
      id: 6,
      img: "/assets/6.jpeg",
      title: "The Complete Angular Bootcamp From Zero to Hero",
      rating: 4.8,
      students: "587,890",
      teacher: "Maximilian Schwarzmüller",
      price: "$69.99",
      time: "2h 35m",
      modules: "15 modules",
      level: "Beginner",
    },
  ];

  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading1}>All</h2><span> </span>
      <h2 className={styles.heading}>Courses</h2>

      <div className={styles.grid}>
        {courses.map((course) => (
          <div className={styles.card} key={course.id}>
            <img src={course.img} alt={course.title} className={styles.cardImg} />

            <div className={styles.cardContent}>
              <h3>{course.title}</h3>

              <div className={styles.rating}>
                ⭐⭐⭐⭐⭐ <span>{course.rating} ({course.students})</span>
              </div>

              

              <p className={styles.price}>{course.price}</p><span> </span>
                <p className={styles.teacher}> 👨 {course.teacher}</p>
              <div className={styles.features}>
                <span>⏱ {course.time}</span>
                <span>📘 {course.modules}</span>
                <span>🔰 {course.level}</span>
              </div>

              <button className={styles.learnMore}>Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
