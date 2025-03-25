import Input from "../../components/Input/Input";

const Homework06 = () => {
  return (
    <div className="p-6 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4">Enter Text</h2>
    <Input />
    <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg ">
      Submit
    </button>
  </div>
  );
};

export default Homework06;