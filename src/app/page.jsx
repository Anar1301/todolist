// // import { Box2 } from "@/components";
// // import { Text } from "@/components";
// // function Home() {
// //   return (
// //     <div>
// //       <div className="flex flex-wrap">
// //         <Box2 image="LeBron21.avif"></Box2>
// //         <Box2 image="KD18+SE.avif"></Box2>
// //         <Box2 image="GIANNIS+FREAK+7+SE.avif"></Box2>
// //       </div>
// //       <div className="flex gap-10">
// //         <Text></Text>
// //         <Text></Text>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Home;

// // src/App.jsx
// import React from "react";

// const posts = [
//   {
//     date: "January 15, 2025",
//     title: "Getting Started with Modern Web Development",
//     excerpt:
//       "Learn the fundamentals of modern web development including React, Next.js, and TypeScript. This comprehensive guide will help you build your first...",
//     image: "develop.jpeg",
//   },
//   {
//     date: "January 12, 2025",
//     title: "The Art of Clean Code",
//     excerpt:
//       "Discover best practices for writing maintainable, readable code that your future self and teammates will thank you for. Clean code is not just about syntax.",
//     image: "art.jpeg",
//   },
//   {
//     date: "January 10, 2025",
//     title: "Building Responsive Designs",
//     excerpt:
//       "Master the techniques for creating websites that look great on all devices. From mobile-first design to advanced CSS Grid layouts.",
//     image: "buildibg.jpeg",
//   },
//   {
//     date: "January 13, 2025",
//     title: "LeBron 21",
//     excerpt:
//       "Deion's legendary swagger inspired a young LeBron to strive for his own greatness. So as the King celebrates his 21st season, it’s only right the legends link up in this Prime Time design. Inspired by the Nike Air Diamond Turf ’93, this LeBron 21 combines the iconic midfoot strap that Deion wore during his heyday with court-ready Air Zoom cushioning. And, of course, the colors nod to Deion's gridiron glory in the Bay.",
//     image: "LeBron21.avif",
//   },
//   {
//     date: "January 15, 2025",
//     title: "Get started with Tailwind CSS",
//     excerpt:
//       "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.It's fast, flexible, and reliable — with zero-runtime.",
//     image: "tailwind.jpeg",
//   },
//   {
//     date: "January 22, 2025",
//     title: "Mclaren 720S720",
//     excerpt:
//       "The McLaren 720S is born of the McLaren design philosophy: everything for a reason. The powerful simplicity and integrity of this ethos shapes stunning cars. Through an intense, evolutionary process. The radical shape of the 720S is inspired by the teardrop. Nature's perfect aerodynamic form. It takes this shape because it helps to deliver superlative performance. And aerodynamic efficiency. Every design detail is the same. Created to improve performance. Sharpen handling. Intensify engagement. Enhance comfort. Beautifully.",
//     image: "mclaren.png",
//   },
// ];

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
//         <h1 className="text-lg font-bold">Simple Blog</h1>
//         <nav className="space-x-6">
//           <a href="#" className="hover:text-blue-500">
//             Home
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             About
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             Contact
//           </a>
//         </nav>
//       </header>

//       {/* Hero */}
//       <section className="text-center py-16">
//         <h2 className="text-4xl font-bold">Welcome to Simple Blog</h2>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           Discover insightful articles about web development, programming, and
//           technology. Clean design meets quality content.
//         </p>
//       </section>

//       {/* Latest Posts */}
//       <section className="px-8 pb-16">
//         <h3 className="text-2xl font-bold text-center mb-8">Latest Posts</h3>
//         <div className="grid md:grid-cols-3 gap-8">
//           {posts.map((post, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
//             >
//               {/* Post image */}
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />

//               <div className="p-6">
//                 <p className="text-sm text-gray-500">{post.date}</p>
//                 <h4 className="font-semibold text-lg mt-2">{post.title}</h4>
//                 <p className="text-gray-600 mt-2 line-clamp-3">
//                   {post.excerpt}
//                 </p>

//                 <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { Web } from "../components/web";
import { Check } from "../components/checkbox";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Site() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };
  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
    setInputValue("");
  };

  const handleOnChangeChecked = (event, index) => {
    const newTodos = todos.map((el, i) => {
      if (index === i) el.isDone = event.target.checked;
      return el;
    });

    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Active") return !todo.isDone;
    return todo.isDone;
  });

  const task = {
    TasckName: "Hello dear   ",
    isCompleted: true,
  };

  const check = {
    isChecked: true,
  };
  const deleteOnChange = (index) => {
    console.log(index, "index");
    const newTodos = todos.filter((el, i) => i !== index);

    setTodos(newTodos);
  };
  return (
    <div className="flex justify-center rounded-md pt-[60px] w-screen h-screen bg-[#F3F4F6]">
      <div className=" h-fit bg-white flex flex-col justify-center items-center rounded-md p-[16px] inset-shadow-sm inset-shadow-gray-500 ">
        <h1 className="text-black text-center font-semibold">To-Do list</h1>
        <div className="flex gap-1.5">
          <input
            placeholder={"Add a new task..."}
            className="border-[#E4E4E7] border rounded-md text-black"
            onChange={handleOnchange}
          ></input>
          <button
            onClick={handleOnClick}
            className="bg-[#3C82F6] h-[ 40px] w-[59px] items-center rounded-[6px]"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 mt-[20px]">
          <Web
            button="All"
            onClick={() => handleFilterStatus("All")}
            className={
              "items-center bg-gray-500 pl-2 pr-2 h-[32px] rounded-[4px] " +
              `${filterStatus === "All" ? "!bg-blue-500" : ""}`
            }
          >
            All
          </Web>
          <Web
            button="Active"
            onClick={() => handleFilterStatus("Active")}
            className={
              "items-center bg-gray-500 pl-2 pr-2 h-[32px] rounded-[6px] " +
              `${filterStatus === "Active" ? "!bg-blue-500" : ""}`
            }
          ></Web>
          <Web
            button="Completed"
            onClick={() => handleFilterStatus("Completed")}
            className={
              "items-center bg-gray-500 pl-2 pr-2 h-[32px] rounded-[6px] " +
              `${filterStatus === "Completed" ? "!bg-blue-500" : ""}`
            }
          ></Web>
        </div>

        {/* <h6 className="font-normal text-center text-[#6B7280] text-sm mt-[32px]">
          No tasks yet. Add one above!
        </h6> */}
        <div>
          {filteredTodos.map((todo, index) => {
            return (
              <Check
                key={todo.id}
                handleOnChange={(event) => handleOnChangeChecked(event, index)}
                TasckName={todo.title}
                isDone={todo.isDone}
                checked={todo.isDone}
                deleteOnChange={() => deleteOnChange(index)}
              ></Check>
            );
          })}
        </div>

        <div className="flex mt-[40px]">
          <h6 className="text-[#6B7280] text-xs font-normal flex justify-center ">
            Powered by
          </h6>
          <h6 className="text-[#3B73ED] font-normal text-xs flex justify-center">
            Pinecone academy
          </h6>
        </div>
      </div>
    </div>
  );
}
