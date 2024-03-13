import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function DisplaySelected() {
  const [record, setRecord] = useState({});
  const { url, code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `http://localhost:8080/admins/${url}/${code}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((error) => console.log(error));
  }, [url, code]);

  const renderTableHeader = () => {
    if (record) {
      let header = Object.keys(record);
      return header.map((key, index) => {
        let columnData = record[key];
        console.log(columnData)
        if (typeof columnData === "string" || typeof columnData === "number") {
          return (
            <th key={index} style={{ color: "black" }}>
              {key.toUpperCase()}
            </th>
          );
        } else if (Array.isArray(columnData)) {
          return <th key={index}>{"_"}</th>;
        } else {
          return <th key={index}>{"Header"}</th>;
        }
      });
    }
  };

  const renderTableData = () => {
    if (record) {
      let columns = Object.keys(record);

      return (
        <tr>
          {columns.map((column, index) => {
            let cellData = record[column];

            if (typeof cellData === "string" && Date.parse(cellData)) {
              let dateObj = new Date(cellData);
              cellData = dateObj.toLocaleDateString();
            }

            if (Array.isArray(cellData) || typeof cellData === 'object') {
              return null;
            }

            if (
              typeof cellData === "string" &&
              (cellData.endsWith(".jpg") ||
                cellData.endsWith(".png") ||
                cellData.endsWith(".jpeg"))
            ) {
              return (
                <td key={index}>
                  <img
                    src={`/${cellData}`}
                    alt="Image"
                    style={{ width: "300px", height: "auto" }}
                  />
                </td>
              );
            }

            return <td key={index}>{cellData}</td>;
          })}
        </tr>
      );
    }
  };

  return (
    <div>
      <h3>Selected Record</h3>
      <Table striped hover bordered>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      <Button variant="danger" onClick={() => navigate("/api/admin")}>
        Back
      </Button>
    </div>
  );
}
