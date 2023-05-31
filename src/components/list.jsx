import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import './styles/list.css';

const List = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [isConfettiActive, setConfettiActive] = useState(false);

    const handleToggle = (item) => {
        const updatedCheckedItems = [...checkedItems];
        if (checkedItems.includes(item)) {
            const index = updatedCheckedItems.indexOf(item);
            updatedCheckedItems.splice(index, 1);
        } else {
            updatedCheckedItems.push(item);
        }
        setCheckedItems(updatedCheckedItems);
        setConfettiActive(true); // Activate confetti

        // Deactivate confetti after 3 seconds
        setTimeout(() => {
            setConfettiActive(false);
        }, 3000);
    };

    const confettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 100,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: '10px',
        height: '10px',
        colors: ['#007bff', '#ff0000', '#00ff00', '#ffff00'],
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
                    <span className="item-label">Swim with Whales</span>
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
                <li>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={checkedItems.includes('Write a feature film')}
                            onChange={() => handleToggle('Write a feature film')}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="item-label">Write a feature film</span>
                </li>
            </ul>
            <Confetti active={isConfettiActive} config={confettiConfig} />
        </div>
    );
};

export default List;
