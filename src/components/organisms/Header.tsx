import { useEffect, useState, MouseEvent } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material'
import {
  Menu as MenuIcon,
  NotificationsNone as NotificationsNoneIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  Language as LanguageIcon,
  PermIdentityOutlined as PermIdentityOutlinedIcon,
} from '@mui/icons-material'

import { layoutSelector, themeSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
import { CustomTheme } from 'interfaces'
import { SearchAppBar } from 'components'

const styles = {
  appBar: {
    height: '4rem',
    backgroundColor: (theme: CustomTheme) => 'black', //theme.palette.brand[theme],
  },
  container: { px: '2rem' },
  logoImage: {
    mr: 1,
    width: '200px',
    height: '40px',
  },
  desktop: {
    display: { xs: 'none', md: 'flex' },
  },
  mobile: {
    display: { xs: 'flex', md: 'none' },
  },
  menuBtn: {
    color: 'white',
    display: 'block',
    fontWeight: 400,
    px: '1.25rem',
    borderRadius: 0,
  },
}

const pages = [
  'Quick Order',
  'Promotions',
  'New Arrivals',
  'Best Sellers',
  'About',
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Header = () => {
  const fetchedLayout = useAppSelector(layoutSelector)
  // const fetchedTheme = useAppSelector(themeSelector)
  const [dynamicLayout, setDynamicLayout] = useState(fetchedLayout)

  useEffect(() => {
    if (fetchedLayout) {
      setDynamicLayout(fetchedLayout)
    }
  }, [fetchedLayout])

  const logoLink = dynamicLayout.layout.header.logoLink

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Box sx={styles.container}>
        {/* <Container sx={styles.container}> */}
        <Toolbar disableGutters>
          {/* LOGO IMAGE DESKTOP */}
          <Box
            sx={{
              ...styles.logoImage,
              ...styles.desktop,
              backgroundImage: logoLink || '',
            }}
          />

          {/* PAGES MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO IMAGE MOBILE */}
          <Box
            sx={{
              ...styles.logoImage,
              ...styles.mobile,
              backgroundImage: logoLink || '',
            }}
          />

          {/* PAGES DESKTOP */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => {}} sx={styles.menuBtn}>
                {page}
              </Button>
            ))}
          </Box>

          {/* ICONS DESKTOP */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
            }}
          >
            <SearchAppBar />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <PermIdentityOutlinedIcon />
            </IconButton>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Box>
    </AppBar>
  )
}
export default Header
