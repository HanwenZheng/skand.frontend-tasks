// node
import React, { Fragment, useState } from "react";
import { deleteUser } from "../Redux/Action/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// style
import {
  makeStyles,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
  TableFooter,
  TablePagination,
  IconButton,
} from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

// Used in Home, to display a table based on props.users
const UserTable = ({ users, deleteUser }) => {
  const Styles = makeStyles(() => ({
    table: {
      minWidth: 650,
    },
    btnGroup: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Fragment>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Fragment>
    );
  }

  const rows = [];
  users.map((user) => {
    return rows.push({
      id: user.id,
      email: user.email,
      jobsCount: user.jobs_count,
      active: user.active ? "Active" : "Inactive",
    });
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={Styles.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right">Jobs Count</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="right">{row.jobsCount}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="center" className={Styles.btnGroup}>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="contained primary button group"
                >
                  <Button>
                    <Link to={`/home/${row.id}`} style={{ color: "white" }}>
                      View
                    </Link>
                  </Button>
                  <Button>
                    <Link to={`/home/${row.id}/edit`} style={{ color: "white" }}>
                      Edit
                    </Link>
                  </Button>
                  <Button onClick={() => deleteUser(row.id)}>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && page !== 0 && <TableRow style={{ height: 69.3 * emptyRows }} />}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default connect(null, { deleteUser })(UserTable);
