import { useState } from "react";

const CustomSelect = ({options, onSelect, initSelection}) => {

    const initOption = options.indexOf(initSelection) > -1 ? options.indexOf(initSelection) : 0;

    const [optionsOpen, setOptionsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState(initOption);

    const toggleOptions = () => {
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
                <button className={`drop-down-btn ${optionsOpen ? 'expanded' : ''}`} type="button" aria-haspopup="listbox" aria-expanded={optionsOpen} 
                onMouseDown={(event) => {
                    event.preventDefault();
                    if (optionsOpen) {
                        event.target.blur();
                    }
                    else {
                        event.target.focus();
                    }
                }}
                onFocus={(event) => {
                    event.preventDefault();
                    toggleOptions();
                }}
                onBlur={(event) => {
                    console.log('Custom select blur happened');
                    if (event.relatedTarget === null || !event.relatedTarget.classList.contains('custom-option')) {
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
                                <span>&#10003;</span>
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