import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFA500',
    },
  },
});

const CustomPagination = ({ setPage, numOfPages = 20 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        paddingTop: 20,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          shape="rounded"
          color="primary"
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
