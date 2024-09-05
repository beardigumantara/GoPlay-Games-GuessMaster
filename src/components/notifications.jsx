import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NOTIFICATION_TIMER } from "../lib/config";

const Notification = () => {
  return (
    <ToastContainer
      theme="dark"
      autoClose={NOTIFICATION_TIMER}
      position="top-center"
      closeButton={false}
      toastStyle={{
        border: '2px solid #444',
        backgroundColor: '#000b',
        marginBottom: 8,
        borderRadius: 8,
      }}
      progressStyle={{
        backgroundColor: '#df1995',
      }}
      style={{
        // fontSize: '1.25rem',
        position: 'absolute',
      }}
    />
  );

}

export default Notification;