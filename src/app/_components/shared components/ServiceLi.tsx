interface ServiceLiProps {
  serviceTitle : string;
  subServicesTitles : string[];
}
export default function ServiceLi(
  {serviceTitle , subServicesTitles} : ServiceLiProps
) {
  return (
    <li>
      <h3 className="text-gray-800">{serviceTitle}</h3>
      {subServicesTitles.map((el, idx) => (
        <p key={idx} className="text-gray-500 ml-1.5">
          {el}
        </p>
      ))}
    </li>
  );
}
