import React from 'react';
import { Link } from 'react-router-dom';
import dataPackage from '../Data/dataPackage.json'; // Adjust path

const CategoryPage = () => {
    const combinedCategories = dataPackage.catagory1;

    return (
        <div>
            <h1>Category Page</h1>
            <ul>
                {combinedCategories.map((item) => (
                    <li key={item.title}>
                        <Link to={`detail/${item.title}/`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
