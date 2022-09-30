import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import searchTable from "../../svg/searchTable.svg";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./table.scss";
const List = () => {
  const rows = [
    {
      name: "tom",
      gender: "male",
      ph: "123-4567-890",
      email: "eabc@gmail.com",
      package: "1 month package",
      duration: "30 days",
      status: "view profile",
    },

    {
      name: "tom",
      gender: "male",
      ph: "123-4567-890",
      email: "eabc@gmail.com",
      package: "1 month package",
      duration: "30 days",
      status: "view profile",
    },

    {
      name: "tom",
      gender: "male",
      ph: "123-4567-890",
      email: "eabc@gmail.com",
      package: "1 month package",
      duration: "30 days",
      status: "view profile",
    },

    {
      name: "tom",
      gender: "male",
      ph: "123-4567-890",
      email: "eabc@gmail.com",
      package: "1 month package",
      duration: "30 days",
      status: "view profile",
    },

    {
      name: "tom",
      gender: "male",
      ph: "123-4567-890",
      email: "eabc@gmail.com",
      package: "1 month package",
      duration: "30 days",
      status: "view profile",
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div
          style={{
            marginTop: "4%",
            margin: "2.3%",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "95%",
              height: "10%",

              margin: "2.5%",
              marginBottom: "0px",
              backgroundColor: "#011627",
              borderRadius: "12px",
            }}
          >
            <h1
              className="topHead"
              style={{
                color: "#D0FD3E",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: "1%",
                paddingBottom: "1%",

                fontFamily: "MonumentExtended",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "30.5px",
                lineHeight: "37px",
              }}
            >
              Users
            </h1>
          </div>

          <div
            style={{
              paddingTop: "2%",
              paddingBottom: "2%",
              marginLeft: "2%",
            }}
          >
            <img
              src={searchTable}
              style={{
                zIndex: "10",
                display: "inline-block",
                transform: "translateY(5px) translateX(34px)",
              }}
            />
            <input
              placeholder="search"
              type="text"
              style={{
                color: "black",
                padding: ".8%",
                width: "23%",
                height: "8%",
                fontSize: "120%",
                backgroundColor: "#FFFFFF",
                border: "0.8px solid #011627",
                borderRadius: "10px",

                paddingLeft: "3.1rem",
                paddingRight: "1rem",
              }}
            />
          </div>

          <div
            style={{
              borderTop: "1px solid #808080",
              // margin: "5%",
            }}
          >
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCells">Name</TableCell>
                    <TableCell className="tableCells">Gender</TableCell>
                    <TableCell className="tableCells">Phone</TableCell>
                    <TableCell className="tableCells">Email Address</TableCell>
                    <TableCell className="tableCells">Package Type</TableCell>
                    <TableCell className="tableCells">
                      Package Duration
                    </TableCell>
                    <TableCell className="tableCells">Action</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="tableCell">{row.name}</TableCell>
                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                          {/* <img src={row.img} alt="" className="image" /> */}
                          {row.gender}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{row.ph}</TableCell>
                      <TableCell className="tableCell">{row.email}</TableCell>
                      <TableCell className="tableCell">{row.package}</TableCell>
                      <TableCell className="tableCell">
                        {row.duration}
                      </TableCell>
                      <TableCell className="tableCell">
                        <span className="status">{row.status}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
