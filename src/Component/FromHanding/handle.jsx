import { useState } from "react";

const FormHandle = () => {
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const [DataView, setDataView] = useState(null);

  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputValue({
      ...inputValue  ,
      [name] : value ,

    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    setDataView(inputValue);

    setInputValue({
      fname: "",
      lname: "",
      email: "",
    });
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={inputValue.fname}
              onChange={handleInputValue}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={inputValue.lname}
              onChange={handleInputValue}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={inputValue.email}
              onChange={handleInputValue}
            />
          </div>
          <button
            type="submit"
            className="flex justify-start  bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition duration-200 "
          >
            Submit
          </button>
        </form>

      {DataView && (
        <div className="mt-8">
          <table className="min-w-full bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-orange-400 text-white">
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">{DataView.fname}</td>
                <td className="py-2 px-4 border-b">{DataView.lname}</td>
                <td className="py-2 px-4 border-b">{DataView.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default FormHandle;
