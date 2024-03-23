const Contact = ({ addEmail, addPhone, confirm }) => {
  const handleChange = (e, item) => {
    if (item == "email") {
      addEmail(e.target.value);
    }
    if (item == "phone") {
      addPhone(e.target.value);
    }
  };

  return (
    <>
      <p className="mt-2">Enter your email and phone number</p>
      <input
        onChange={(e) => handleChange(e, "email")}
        type="email"
        className="w-full border-gray-300 my-6"
        placeholder="john@doe.com"
        required
      />
      <input
        onChange={(e) => handleChange(e, "phone")}
        type="tel"
        className="w-full border-gray-300"
        placeholder="+xxx-xxx-xxx-xxx"
      />
      <div className="flex mt-6 justify-end items-center">
        <button
          onClick={() => confirm(true)}
          className="border p-2  w-1/4  py-2 font-medium text-white transition-colors duration-300 transform bg-emerald-600  hover:bg-emerald-400 focus:outline-none"
        >
          Next
        </button>
      </div>
      <p className="mt-24 text-xs text-center text-gray-500">
        To keep you informed about your account and help with any issues, we
        need your contact information. We take your privacy seriously and will
        never share your details with third-party apps.
      </p>
    </>
  );
};

export default Contact;
