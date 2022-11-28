import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Badge } from "@mui/material";
import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="sticky" >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          sx={{
            flexGrow: 1,
          }}
        >
          Ecomm
        </Typography>
        <Box>

        <IconButton
          size="large"
          aria-label="shows cart item count"
          color="inherit"
        >
          <Badge badgeContent={1} color="error" > 
            <ShoppingCartIcon></ShoppingCartIcon>
          </Badge>
        </IconButton>
        </Box>
        <Button color="inherit" > Login</Button>
      </Toolbar>
    </AppBar>
  );
}
