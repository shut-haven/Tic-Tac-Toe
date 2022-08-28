import { useState } from "react";

const CustomSelect = () => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(0);

    const optionsList = ['Easy', 'Medium', 'Impossible'];

    const toggleOptions = () => {
        setOptionsOpen(!optionsOpen);
    };

    return ( 
        <div className="custom-select">
            <div className="select-wrapper">
                <button type="button" onClick={toggleOptions} aria-haspopup="listbox" aria-expanded={optionsOpen}>
                    ^
                </button>
                <ul className={`options-list ${optionsOpen ? 'open' : ''}`} tabIndex={-1}>
                    {
                        optionsList.map((option, index) => {
                            <li id={option} role="option">

                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default CustomSelect;