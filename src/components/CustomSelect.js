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
                <button className="" type="button" onClick={toggleOptions}>
                    1P
                </button>
                <ul className={`options-list ${optionsOpen ? 'open' : ''}`}>
                </ul>
            </div>
        </div>
     );
}
 
export default CustomSelect;