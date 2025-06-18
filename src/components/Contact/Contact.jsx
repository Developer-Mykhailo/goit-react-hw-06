import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={s.contact_wrap}>
      <div className={s.contact_data}>
        <div className={s.contact_info}>
          <FaUserLarge />
          <p>{name}</p>
        </div>

        <div className={s.contact_info}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
