import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from "react";

const Accordion = ({ title, content }) => {

  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  }

  return (
    <div className="accordion-box py-2">
      <button onClick={toggleAccordion} className="accordion-title-container flex justify-between items-center w-full">
        <span className="title">
          {title}
        </span>
        {accordionOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div className={`accordion-content-container grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="content overflow-hidden">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
