import { ICustomTheme } from 'interfaces'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { Box } from '@mui/material'

interface ICustomCheckboxProps extends CheckboxProps {
  branded?: boolean
}

const CustomIconStyles = {
  left: '2px',
  borderRadius: '4px',
  width: 16,
  height: 16,
  boxShadow: (theme: ICustomTheme) =>
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : `inset 0 0 0 1px ${theme.palette.grey[400]}`,
  backgroundImage: (theme: ICustomTheme) =>
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',

  backgroundColor: (theme: ICustomTheme) =>
    theme.palette.mode === 'dark' ? '#394b59' : theme.palette.grey[50],
  'input:hover ~ &': {
    backgroundColor: (theme: ICustomTheme) =>
      theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: (theme: ICustomTheme) =>
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}

const CustomBrandedIconStyles = {
  ...CustomIconStyles,
  boxShadow: (theme: ICustomTheme) =>
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : `inset 0 0 0 1px ${theme.palette.primary.main}`,
}

const CustomCheckedIconStyles = {
  backgroundColor: (theme: ICustomTheme) => theme.palette.primary.main,
  borderRadius: '4px',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: (theme: ICustomTheme) => theme.palette.primary.dark,
  },
}

const CheckBoxStyles = {
  marginLeft: '2px',
  '&:hover': { backgroundColor: 'rgba(111, 63, 245, 0.04)' },
}

const CustomIcon = () => <Box sx={CustomIconStyles}></Box>
const CustomCheckedIcon = () => <Box sx={CustomCheckedIconStyles}></Box>
const CustomBrandedIcon = () => <Box sx={CustomBrandedIconStyles}></Box>

const CustomCheckbox = (props: ICustomCheckboxProps) => {
  return (
    <Checkbox
      sx={CheckBoxStyles}
      // disableRipple
      color="default"
      checkedIcon={<CustomCheckedIcon />}
      icon={props.branded ? <CustomBrandedIcon /> : <CustomIcon />}
      inputProps={{ 'aria-label': 'Checkbox' }}
      {...props}
    />
  )
}

export default CustomCheckbox
