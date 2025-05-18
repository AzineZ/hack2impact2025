import React from 'react';

const TableOfContents = () => {
    return (
        <nav aria-label="Table of contents">
            <h2 className="text-lg font-bold text-center text-black mb-4">Table of Contents</h2>
            <li><a href="#what-is-autism" className="hover:underline block">What is Autism?</a></li>
            <li><a href="#causes" className="hover:underline block">Causes</a></li>
            <li><a href="#symptoms" className="hover:underline block">Symptoms</a></li>
            <li><a href="#screenings" className="hover:underline block">Screenings</a></li>
            <li><a href="#treatments" className="hover:underline block">Treatments</a></li>
            <li><a href="#support" className="hover:underline block">Support & Resources</a></li>
        </nav>
    );
};
 
export default TableOfContents;