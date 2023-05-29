import React, { useState } from 'react';
import './styles/list.css';

const List = () => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleToggle = (item) => {
        const updatedCheckedItems = [...checkedItems];
        if (checkedItems.includes(item)) {
            const index = updatedCheckedItems.indexOf(item);
            updatedCheckedItems.splice(index, 1);
        } else {
            updatedCheckedItems.push(item);
        }
        setCheckedItems(updatedCheckedItems);
    };

    return (
        <div>
            <ul>
                <li>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={checkedItems.includes('Private Island')}
                            onChange={() => handleToggle('Private Island')}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="item-label">Private Island</span>
                </li>
                <li>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={checkedItems.includes('Whale Tour French Polynesia')}
                            onChange={() => handleToggle('Whale Tour French Polynesia')}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="item-label">Whale Tour French Polynesia</span>
                </li>
                <li>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={checkedItems.includes('Safari')}
                            onChange={() => handleToggle('Safari')}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="item-label">Safari</span>
                </li>
                <li>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={checkedItems.includes('See the Northern Lights')}
                            onChange={() => handleToggle('See the Northern Lights')}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="item-label">See the Northern Lights</span>
                </li>
                <li>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={checkedItems.includes('Seychelles')}
                            onChange={() => handleToggle('Seychelles')}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="item-label">Seychelles</span>
                </li>
            </ul>
        </div>
    );
};

export default List;
