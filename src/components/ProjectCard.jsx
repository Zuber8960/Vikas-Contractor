// import React from 'react';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
//       <div
//         className="h-48 bg-cover bg-center"
//         style={{ backgroundImage: `url(${project.image})` }}
//       ></div>
//       <div className="p-4 flex flex-col flex-1">
//         <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
//         <div className="text-sm text-neutral-500 mt-1">{project.location} • {project.duration}</div>
//         <p className="mt-2 text-neutral-600 flex-1">{project.summary}</p>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {project.tags.map((tag, i) => (
//             <span key={i} className="text-xs px-2 py-1 bg-neutral-200 rounded">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "../styles/projects.css";

export default function ProjectCard({ title, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
