import { IInfoAuthCardProps } from "./type";

function InfoAuthCard(props: IInfoAuthCardProps) {
  const { auth } = props;
  return (
    <>
      <div className="flex flex-col gap-y-[10px] items-center ">
        <div className="w-full group relative overflow-hidden cursor-pointer">
          <img
            className="object-cover w-full rounded-lg shadow-xl h-[200px]"
            src={
              "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
          />
          <div className="p-2 flex items-center text-white absolute group-hover:pt-1/2 bottom-0 right-0 rounded-lg left-0 bg-black/60">
            <div className="pr-3">
              <img
                className="rounded-[50%] w-[20px] lg:w-[40px]"
                src={auth?.avt}
                alt=""
              />
            </div>
            <div>
              <h2 className="lg:text-sm group-hover:text-orange-200 truncate text-sm font-medium normal-case cursor-pointer">
                {auth?.name}
              </h2>
              <p className="text-[13px] font-thin">{auth?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoAuthCard;
