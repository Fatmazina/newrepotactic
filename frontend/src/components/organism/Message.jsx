import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons"; // Import de l'icône utilisateur par défaut

const Message = ({ align, message, createdAt, user, currentUser }) => {
  const formatMessageDate = (createdAt) => {
    const messageDate = new Date(createdAt);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const isToday =
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear();

    const isYesterday =
      messageDate.getDate() === yesterday.getDate() &&
      messageDate.getMonth() === yesterday.getMonth() &&
      messageDate.getFullYear() === yesterday.getFullYear();

    if (isToday) {
      // Aujourd'hui
      return messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (isYesterday) {
      // Hier
      return "Hier";
    } else {
      // Autre date
      return messageDate.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    }
  };

  // Formater la date du message
  const formattedDate = formatMessageDate(createdAt);

  return (
    <div className={align}>
      <div className="message-avatar">
        {align === "left" &&
          (user.avatar ? (
            <Avatar src={user.avatar} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          ))}

        {align === "right" &&
          (currentUser.avatar ? (
            <Avatar src={currentUser.avatar} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          ))}
      </div>

      <div className="message-content">
        {/* {align === "left" && <div className="message-author">{user.name}</div>}
        {align === "right" && (
          <div className="message-author">{currentUser.name}</div>
        )} */}

        <div className="message-body">{message}</div>
        <div className="message-date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default Message;