import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="yvmanjay154@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="1800-0000-1001" Image={FiPhone} />
      <SingleInfo text="India, Vadodara" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
