import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: 'inherit',
  height: '100%',
  '& .MuiInputBase-input': {
    cursor: 'pointer',
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    paddingLeft: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
        cursor: 'text',
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        width: '20ch',
      },
    },
  },
}))

const SearchAppBar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchAppBar
