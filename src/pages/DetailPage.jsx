import React from 'react';
import { useParams } from 'react-router-dom';
import dataPackage from '../Data/dataPackage.json'; // Adjust the path as needed

const DetailPage = () => {
    const { id } = useParams(); // Get the ID from the URL
    const category = dataPackage.catagory1.concat(dataPackage.catagory2); // Combine both categories into one array
    const item = category.find(item => item.id === parseInt(id)); // Find the item by ID

    if (!item) {
        return <div>Item not found</div>; // Handle case where item is not found
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>

            {/* Check if the include object exists */}
            {item.include && (
                <div>
                    <h2>Included Items:</h2>
                    <ul>
                        {Object.keys(item.include).map((key, index) => (
                            <li key={index}>{item.include[key]}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DetailPage;
