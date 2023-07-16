function Spinner() {
  return (
    <>
      <div className="loadingx flex flex-col">
        <img
          src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg"
          className="py-2"
          alt="LOGO"
        />
        <div className="flex flex-row gap-1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Spinner;
