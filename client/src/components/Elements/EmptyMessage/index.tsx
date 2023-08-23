import { IEmptyMessageProps } from "./type";

function EmptyMessage({ message }: IEmptyMessageProps) {
  return (
    <>
      <div className="justify-center flex h-40 w-full items-center">
        <p className="text-gray-400 uppercase text-xl">{message}</p>
      </div>
    </>
  );
}

export default EmptyMessage;
