import { useAlertContext } from "../contexts/AlertContext";
export default function Alert() {
  const { alertData } = useAlertContext();

  if (!alertData) {
    return null;
  }

  const { type, message } = alertData;

  const classes = {
    info: "info-class",
    success: "success-class",
    error: "error-class",
  };
  return <div className={classes[type]}>{message}</div>;
}
