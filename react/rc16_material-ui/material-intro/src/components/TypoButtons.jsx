import { Typography, Container } from "@mui/material";

// import Typography from '@mui/material/Typography';
// // or
// import { Typography } from '@mui/material';
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
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
        <Typography
          sx={{ bgcolor: "blue", border: "3px solid black" }}
          variant="h6"
          component="h1"
          align="justify"
          color="secondary"
        >
          Typography,Buttons,Container,Box
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          align="justify"
          color="secondary.dark"
          sx={{ background: "gray", mt: 5 }} //! inline styling
        >
          Typography,Buttons,Container,Box
        </Typography>
        <Typography variant="body1" align="justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          eos impedit illo quam earum molestiae magni reprehenderit laboriosam
          libero ipsum.
        </Typography>

        <Typography
          variant="button"
          align="justify"
          sx={{ display: "inline-block", mt: 4 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          eos impedit illo quam earum molestiae magni reprehenderit laboriosam
          libero ipsum.
        </Typography>
      </Container>
    </div>
  );
};

export default TypoButtons;

//* görüntü olarak h5 ama styled olarak h1 olarak

//* bodyler p tagı oluyor

//* button span
//* Container margin auto özelliği verir.
