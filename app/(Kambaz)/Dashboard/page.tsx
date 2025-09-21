import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/images.png" width={200} height={150} alt="Course thumbnail" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/images.png" width={200} height={150} alt="Course" />
            <div>
              <h5> CS2345 Program Design Paradigm </h5>
              <p className="wd-dashboard-course-title">
                Advance Java
              </p>
              <button> Go </button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/images.png" width={200} height={150} alt="Course" />
            <div>
              <h5> CS3456 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Data Structure and Algorithm
              </p>
              <button> Go </button>
            </div>
            </Link>
        </div>
      </div>
    </div>
);}
