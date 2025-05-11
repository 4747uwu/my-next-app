// src/components/TestimonialCard.js
import React from 'react';
import { VerifiedIcon, XIcon } from './icons/AudienceIcons'; // Adjust path
import StarRating from './StarRating'; // Adjust path

const TestimonialCard = ({ testimonial, outerCardClassName = '' }) => { // Added outerCardClassName prop
  const {
    avatarUrl,
    avatarBgClass = 'bg-gray-100',
    isAvatarDark,
    name,
    isVerified,
    role,
    twitterHandle,
    ratingValue,
    testimonialText,
    highlightTerm,
  } = testimonial;

  const renderTestimonialText = (text) => {
    if (typeof text === 'string') {
      if (!highlightTerm) return text;
      const parts = text.split(new RegExp(`(${highlightTerm})`, 'gi'));
      return parts.map((part, index) =>
        part.toLowerCase() === highlightTerm.toLowerCase() ? (
          <span key={index} className="text-blue-600 font-medium">
            {part}
          </span>
        ) : (
          part
        )
      );
    } else if (Array.isArray(text)) {
      return text.map((line, lineIndex) => (
        <p key={lineIndex} className={line.trim() === "" ? "h-2" : ""}>
          {renderTestimonialText(line)}
        </p>
      ));
    }
    return text;
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl flex flex-col relative pt-12 mb-14 md:mb-6`}>
      {/* Avatar Section - Positioned to overlap */}
      <div className="absolute top-0 left-5 -translate-y-1/2 flex justify-start">
        <div className="relative">
          <div className={`w-24 h-24 rounded-full ${avatarBgClass} flex items-center justify-center`}>
            <img
              src={avatarUrl}
              alt={name}
              className={`w-20 h-20 rounded-full object-cover ${isAvatarDark ? 'border-2 border-gray-300' : 'border-2 border-white'}`}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex-grow flex flex-col"> {/* `flex-grow` on content is important */}
        <div className="flex justify-between items-start mb-1">
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
              {isVerified && <VerifiedIcon className="w-5 h-5 text-blue-500 ml-1.5 shrink-0" />}
            </div>
            {role && <p className="text-xs text-slate-500 mt-0.5 leading-tight">{role}</p>}
          </div>
          <div className="shrink-0 ml-2">
            <StarRating ratingValue={ratingValue} />
          </div>
        </div>

        {twitterHandle && (
          <a
            href={`https://twitter.com/${twitterHandle.substring(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xs text-slate-400 hover:text-blue-500 transition-colors mt-1 mb-3 group"
          >
            <XIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 mr-1" />
            <span>{twitterHandle}</span>
          </a>
        )}

        <div className="text-sm text-slate-600 leading-relaxed space-y-2 mt-2 flex-grow"> 
          {renderTestimonialText(testimonialText)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;