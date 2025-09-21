import Link from "next/link";
export default function Labs() {
 return (
   
   <div id="wd-labs">
     <h1>Labs</h1>

     <div id="wd-intro">
        <p><strong>Name:</strong> Prachita Patel</p>
        <p><strong>Course:</strong> CS5610 18616</p>
     </div>

     <ul>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
       <li>
        <Link href="/Account/Signin" id="wd-lab3-link">
           Kambaz </Link> 
       </li>
       <li>
        <Link href="https://github.com/prachitapatel2310/kanbas-next-js" id="wd-lab3-link">
           Github </Link> 
       </li>
     </ul>

   </div>

   
);}
