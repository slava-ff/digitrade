import { CircularProgress, Box } from '@mui/material'

const styles = { display: 'flex', marginTop: '45vh', justifyContent: 'center' }

const Loading = () => {
  return (
    <Box sx={styles}>
      <CircularProgress color="primary" />
    </Box>
  )
}

export default Loading
