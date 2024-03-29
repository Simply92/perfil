import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 480,
        sm: 768,
        md: 980,
        lg: 1200,
        xl: 1536,
        xxl: 2048,
      },
    },
    typography: {
      h1: {
        fontFamily: "Bebas Neue",
      },
      h2: {
        fontFamily: "Bebas Neue",
      },
      h4: {
        fontFamily: "Montserrat",
        //  cardCarouselPromotionn
        // support
        // Questions
      },
      h5: {
        fontFamily: "Montserrat",
        // homeProduct
        //Support
      },
      h6: {
        fontFamily: "Montserrat",
        // navItems
      },
      subtitle2: {
        fontFamily: "Montserrat",
        // ProductCardSubtitle
        // ProductPrice
      },
      body1: {
        fontFamily: "Montserrat",
        //Loadings Flags
      },
      body2: {
        fontFamily: "Montserrat",
        // support
      },
      span: {},
    },
  });