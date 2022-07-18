import { Typography } from "@mui/material";

// import Typography from '@mui/material/Typography';
// // or
// import { Typography } from '@mui/material';
const TypoButtons = () => {
  return (
    <div>
      <Typography
        variant="subtitle"
        component="h1"
        align="center"
        color="primary"
      >
        Typography,Buttons,Container,Box
      </Typography>
      <Typography
        variant="caption"
        component="h1"
        align="center"
        color="secondary"
      >
        Typography,Buttons,Container,Box
      </Typography>
      <Typography variant="h6" component="h1" align="justify" color="error">
        Typography,Buttons,Container,Box
      </Typography>
    </div>
  );
};

export default TypoButtons;

//* görüntü olarak h5 ama styled olarak h1 olarak
