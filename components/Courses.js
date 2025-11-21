import Link from "next/link";
import styles from "./Courses.module.css";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <div className={styles.wrapper} id="courses">
        <h2 className={styles.heading1}>All</h2><span> </span>
      <h2 className={styles.heading}>Courses</h2>

      <div className={styles.grid}>
        {courses.map((course) => (
          <Link href={`/courses/${course.slug}`} className={styles.card} key={course.id}>
            <img src={course.thumbnail} alt={course.title} className={styles.cardImg} />

            <div className={styles.cardContent}>
              <h3>{course.title}</h3>

              <div className={styles.rating}>
                ⭐⭐⭐⭐⭐ <span>{course.rating} ({course.ratingsCount.toLocaleString()})</span>
              </div>

              

              <p className={styles.price}>${course.price.toFixed(2)}</p><span> </span>
                <p className={styles.teacher}> 👨 {course.instructor}</p>
              <div className={styles.features}>
                <span>⏱ {course.length}</span>
                <span>📘 {course.lessons} lessons</span>
                <span>🔰 {course.level}</span>
              </div>

              <button className={styles.learnMore}>Learn More →</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
