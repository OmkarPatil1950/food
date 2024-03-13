import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function LinkData() {
  const [link, setLink] = useState(null);
  const [data, setData] = useState([]);
  const links = [
    { name: 'Category', url: 'showcategories' },
    { name: 'Products', url: 'showproducts' },
    { name: 'Product Details', url: 'showproductdetails' },
    { name: 'Admin', url: 'showadmins' },
  ];

  useEffect(() => {
    // Fetch data when 'link' changes
    if (link) {
      fetchData(link.url);
    }
  }, [link]);

  const handleClick = (link) => {
    setLink(link);
  };

  const fetchData = async (url) => {
    const response = await fetch(`http://localhost:8080/admins/${url}`);
    const result = await response.json();
    setData(result);
  };

  const renderTableHeader = () => {
    if (data.length > 0) {
      let header = Object.keys(data[0]);
      return header.map((key, index) => {
        // Skip rendering if the key contains an array or if the data type is bit/boolean
        if (
          data.some((item) => Array.isArray(item[key])) ||
          typeof data[0][key] === 'boolean' ||
          typeof data[0][key] === 'bit'
        ) {
          return null;
        }
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  };
  
  const renderTableData = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        let columns = Object.keys(item);
        return (
          <tr key={index}>
            {columns.map((column, index) => {
              let cellData = item[column];
              if (
                typeof cellData === 'boolean' ||
                typeof cellData === 'bit'
              ) {
                return null; // Skip rendering if the data type is bit/boolean
              }
              console.log(cellData);
              if (typeof cellData === 'string' && Date.parse(cellData)) {
                // Convert string to a formatted date if it is a valid date string
                let dateObj = new Date(cellData);
                cellData = dateObj.toLocaleDateString();
              }
              if (Array.isArray(cellData) || typeof cellData === 'object') {
                return null;
              }
              if (
                typeof cellData === 'string' &&
                (cellData.endsWith('.jpg') ||
                  cellData.endsWith('.png') ||
                  cellData.endsWith('.jpeg'))
              ) {
                // Render image if the cell data is a URL ending with a supported image extension
                return (
                  <td key={index}>
                    <div className="flex items-center justify-center">
                      <img
                        src={cellData}
                        alt="Image"
                        className="h-32 w-32 object-cover rounded-md"
                      />
                    </div>
                  </td>
                );
              }
              return <td key={index}>{cellData}</td>;
            })}
            <td className="flex justify-center items-center">
              {/* Buttons for update, delete, and display */}
              <Button
                variant="primary"
                as={Link}
                to={link ? `/updateSelected/${link.url}/${item[Object.keys(item)[0]]}` : '/'}
                className="bg-green-500 text-white mx-1"
              >
                Update
              </Button>
              <Button
                variant="primary"
                as={Link}
                to={link ? `/deleteSelected/${link.url}/${item[Object.keys(item)[0]]}` : '/'}
                className="bg-red-500 text-white mx-1"
              >
                Delete
              </Button>
              <Button
                variant="primary"
                as={Link}
                to={link ? `/displaySelected/${link.url}/${item[Object.keys(item)[0]]}` : '/'}
                className="bg-blue-500 text-white mx-1"
              >
                Display
              </Button>
            </td>
          </tr>
        );
      });
    }
  };
  
  const renderAddButton = () => {
    if (link && data.length > 0) { 
      const linkName = link.url;
      const addButtonUrl = `/addselected/${linkName}`;
      return (
        <tr>
          <td colSpan={Object.keys(data[0]).length + 1} className="flex justify-center">
            <Button
              variant="primary"
              as={Link}
              to={addButtonUrl}
              className="bg-pink-500 text-black py-2 px-4 rounded-md m-2 transition-transform hover:scale-110"
            >
              Add
            </Button>
          </td>
        </tr>
      );
    }
    return null; // Return null if link is null or data is empty
  };
  

  return (
    <div className="container mx-auto px-4">
      <ul className="flex justify-center mt-6">
        {/* Render buttons for each link */}
        {links.map((link, index) => (
          <li key={index}>
            <button
              className="bg-pink-500 text-black py-2 px-4 rounded-md m-2 transition-transform hover:scale-110"
              onClick={() => handleClick(link)}
            >
              <FaLink className="mr-1" />
              {link.name}
            </button>
          </li>
        ))}
        {renderAddButton()}
      </ul>

      <div className="mt-6">
        <Table responsive>
          <thead>
            <tr>{renderTableHeader()}</tr>
          </thead>
          <tbody>

            {renderTableData()}
           
          </tbody>
        </Table>
      </div>

    </div>
  );
}
export default LinkData;
