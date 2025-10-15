import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function CaseStudyCard({
  id,
  title,
  description,
  imageSrc,
  link,
}: CaseStudyCardProps) {
  return (
    <div id={id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-base flex-grow mb-4">{description}</p>
        <Link href={link} className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
          View Case Study &rarr;
        </Link>
      </div>
    </div>
  );
}
