"use client";
import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Akash Pawar",
    role: "Managing Director & Co-Founder",
    company: "VRBS",
    img: "/team1.png", // replace with your actual image path
  },
  {
    name: "Kirti Pawar",
    role: "Founder",
    company: "VRBS",
    img: "/team2.png",
  },
  {
    name: "Amol Sasane",
    role: "COO",
    company: "VRBS",
    img: "/team3.png",
  },
  
];

export default function TeamSection() {
  return (
    <section className="scroll-mt-24 py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-30">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mt-2">
              VRBS, Team
            </h2>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0 max-w-md text-base leading-relaxed">
          Our strength lies in our dedicated specialists, 
          each committed to delivering exceptional services tailored to your unique business needs.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">
                {member.role},{" "}
                <span className="text-yellow-600 font-medium">
                  {member.company}
                </span>
              </p>

             
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
