import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ onSelectLab }) => {
    const labs = [
        { id: '1', title: 'Лабораторная работа 1' },
        { id: '2', title: 'Лабораторная работа 2' },
    ];

    return (
        <aside style={{ padding: "10px", background: "#00AB84", width: "200px" }}>
            <h3>Меню</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {labs.map((lab) => (
                    <li key={lab.id} style={{ marginBottom: "10px" }}>
                        <Link to={`/lab/${lab.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <button style={{ width: "100%", padding: "5px", cursor: "pointer" }}>
                                {lab.title}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Menu;
