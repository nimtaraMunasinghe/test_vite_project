import { Button } from "@mui/material";

const VButton = ({ label, onClick, buttonStyles }) => {
  return (
    <Button
      type="submit"
      variant="outlined"
      sx={[
        {
          color: "#000",
          borderRadius: "12px",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
          textTransform: "none",
        },
        buttonStyles,
      ]}
      onClick={onClick ?? null}
    >
      {label}
    </Button>
  );
};

export default VButton;
