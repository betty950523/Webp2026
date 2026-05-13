import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./App.css";

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then((res) => res.json())
      .then((data) => {
        const newRows = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo?.[0]?.location || "無資料",
          price: item.showInfo?.[0]?.price || "無資料",
        }));

        setRows(newRows);
      });
  }, []);

  const columns = [
    { field: "title", headerName: "名稱", width: 500 },
    { field: "location", headerName: "地點", width: 300 },
    { field: "price", headerName: "票價", width: 350 },
  ];

  return (
    <div className="container">
      <h1>景點觀光展覽資訊</h1>

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;