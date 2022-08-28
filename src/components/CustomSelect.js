import { useState } from "react";

const CustomSelect = () => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(0);

    const options = ['Easy', 'Medium', 'Impossible'];

    const toggleOptions = () => {
        setOptionsOpen(!optionsOpen);
    };

    return ( 
        <div className="custom-select">
            <div className="select-wrapper">
                <button type="button" onClick={toggleOptions} aria-haspopup="listbox" aria-expanded={optionsOpen}>
                    {options}
                </button>
                <ul className={`options-list ${optionsOpen ? 'open' : ''}`} tabIndex={-1} role="listbox" aria-activedescendant={options[currentOption]}>
                    {
                        options.map((option, index) => {
                            <li id={option} role="option" aria-selected={currentOption == index} tabIndex={0}>
                                {option}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default CustomSelect;