import Avatar from "@mui/material/Avatar";

const StatusIcon = ({ color }: { color: string }) => {
  const backgroundColor = color;
  return (
    <Avatar
      sx={{
        backgroundColor,
        color,
        width: 12,
        height: 12,
        marginRight: 1,
        display: "inline-block",
      }}
    ></Avatar>
  );
};

export default StatusIcon;
