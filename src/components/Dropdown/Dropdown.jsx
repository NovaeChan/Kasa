import React from 'react'
import { useState } from 'react'

import chevron from '../../assets/images/vector.png'
import '../../styles/components/_dropdown.scss'

const Dropdown = ({ title, content }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown_header" onClick={() => setOpen(!open)}>
                <h3 className="dropdown_title">{title}</h3>
                <span className={`dropdown_chevron ${open}`}>
                    <img src={chevron} alt="Ouvrir le menu" />
                </span>
            </div>
            <div className={open ? 'dropdown_open' : 'dropdown_close'}>
                {open && (
                    <div className="dropdown_description">
                        {Array.isArray(content)
                            ? content.map((item, index) => {
                                  return <p key={index}>{item}</p>
                              })
                            : content}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown
