import { Button, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../config/config';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#ffa31a',
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? 'tv' : 'movie'
        }?api_key=${API}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error('Error fetching trending:', error);
    }
  };

  const handleSearch = () => {
    fetchSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{ flex: 1, width: '100%' }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            style={{ marginLeft: 10, backgroundColor: '#ffa31a' }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>

        <div className="tabs">
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab label="Search Movies" />
            <Tab label="Search TV Series" />
          </Tabs>
        </div>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster_path={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? 'tv' : 'movie'}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          content.length < 2 &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
