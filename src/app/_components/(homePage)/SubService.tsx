interface SubServiceProps {
  subText : string;
  Component : React.ComponentType;
}
const SubService = ({subText , Component} : SubServiceProps) => {
  return (
    <div
      id="sub_ser1"
      className="w-full min-h-screen text-5xl flex flex-col justify-center items-center p-5"
    >
      <p className="text-2xl text-gray-900">
        {subText}
      </p>
      <Component/>
    </div>
  );
};

export default SubService;
