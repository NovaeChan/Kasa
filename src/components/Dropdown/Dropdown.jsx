import React from 'react';
import { useState } from 'react';

import chevron from '../../assets/images/vector.png';
import '../../styles/components/_dropdown.scss';

const Dropdown = ({ title, content }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown_header" onClick={() => setOpen(!open)}>
                <div className="dropdown_title">{title}</div>
                <span className={`dropdown_chevron ${open}`}>
                    <img src={chevron} alt="Ouvrir le menu" />
                </span>
            </div>
            {open && (
                <div className="dropdown_description">
                    {Array.isArray(content)
                        ? content.map((item, index) => {
                              return <p key={index}>{item}</p>;
                          })
                        : content}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
