import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({ notifications }) => {
  useEffect(() => {
    notifications.forEach((notification) => {
      toast(notification.message, { type: notification.type });
    });
  }, [notifications]);

  return <ToastContainer />;
};

export default Notification;