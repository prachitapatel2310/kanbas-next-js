export default function Destructing() {
 const person = { name: "John", age: 25 };
 const { name, age } = person;
 // const name = person.name
 // const age = person.age
 const numbers = ["one", "two", "three"];
 const [ first, second, third ] = numbers;
 return (
<div id="wd-destructing">
<h2>Destructuring</h2>
<h3>Object Destructuring</h3>
     const &#123; name, age &#125; =
           &#123; name: John&quot;, age: 25 &#125;<br /><br />
     name = {name}<br />
     age = {age}
<h3>Array Destructuring</h3>
     const [first, second, third] = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;]<br/><br/>
     first = {first}<br />
     second = {second}<br />
     third = {third}<hr />
   </div>
);}
