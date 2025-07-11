import { IRedirectUser } from "./interface";

const RedirectUser = ({ question, response, link }: IRedirectUser) => {
  return (
    <p className="text-sm font-medium text-[#8799B5]">
      {question}{" "}
      <a href={link} className="text-primary font-bold">
        {response}
      </a>
    </p>
  );
};

export { RedirectUser };
