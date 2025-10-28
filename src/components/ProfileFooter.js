// ProfileFooter.jsx
import React, { useContext, useState } from "react";
import { Typography, Box } from "@mui/material";
import themes from "../data/colors";
import ThemeContext from "../context/context";
import VisitSwiper from "./visitSwiper"; // 👈 Drawer
import ThemedCircularProgress from "./ThemedCircularProgress";

function ProfileFooter({ image, name, status, link, avito, site }) {
  const { currentTheme } = useContext(ThemeContext);
  const colors = themes[currentTheme];

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setLoading(true); // показываем индикатор
    setTimeout(() => {
      setOpen(true);
      setLoading(false); // скрываем индикатор
    }, 300); // небольшой delay, имитация загрузки
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ mt: 0, textAlign: "center" }}>
        <Typography
          component="span"
          onClick={handleOpen}
          sx={{
            color: colors.profileFooter.hoverColor,
            fontWeight: "bold",
            fontSize: 12,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            transition: "color 0.2s ease",
            "&:hover": { color: colors.contacts.buttonColor },
          }}
        >
          {loading ? (
            <ThemedCircularProgress size={16} />
          ) : (
            "Хотите такую визитку?"
          )}
        </Typography>
      </Box>

      {/* сам Drawer */}
      <VisitSwiper
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        image={image}
        name={name}
        link={link}
        status={status}
        avito={avito}
        site={site}
      />
    </>
  );
}

export default ProfileFooter;
