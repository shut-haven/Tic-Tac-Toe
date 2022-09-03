import { useCallback, useEffect, useRef, useState } from "react";

const CustomSelect = ({options, onSelect}) => {

    const [optionsOpen, setOptionsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(0);

    const toggleOptions = () => {
        console.log('Toggled options');
        setOptionsOpen(!optionsOpen);
    };

    const handleKeyDown = (index) => (e) => {
        switch (e.key) {
          case " ":
          case "SpaceBar":
          case "Enter":
            e.preventDefault();
            setCurrentOption(index);
            setOptionsOpen(false);
            break;
          default:
            break;
        }
    };

    return ( 
        <div className="custom-select">
            <div className="select-wrapper">
                <button className={optionsOpen ? 'expanded' : ''} type="button" aria-haspopup="listbox" aria-expanded={optionsOpen} onFocus={toggleOptions}
                onBlur={(event) => {
                    if (event.relatedTarget === null || !event.relatedTarget.classList.contains('custom-option')) {
                        console.log('User clicked on another part of the window');
                        toggleOptions();
                    }
                }}
                >
                    <span className="drop-down-icon"></span>
                    {options[currentOption]}
                </button>
                <ul className={`options-list ${optionsOpen ? 'open' : ''}`} tabIndex={-1} role="listbox" aria-activedescendant={options[currentOption]}>
                    {
                        options.map((option, index) => {

                            return (<li className="custom-option" id={option} role="option" aria-selected={currentOption === index} tabIndex={0} key={index}
                                onKeyDown={handleKeyDown(index)}
                                onClick={(event) => {
                                    console.log('Option was selected');
                                    setCurrentOption(index);
                                    setOptionsOpen(false);
                                    onSelect(options[index]);
                                }}>
                                {option}
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default CustomSelect;