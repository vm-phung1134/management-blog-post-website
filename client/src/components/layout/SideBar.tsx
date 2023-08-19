function SideBar() {
  return (
    <div className="drawer w-fit drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn drawer-button border-none hover:bg-transparent hover:border-none bg-transparent"
        >
          <svg
            className="swap-off fill-current w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <div className="flex justify-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <label
              htmlFor="my-drawer"
              className="btn border-none drawer-button hover:bg-transparent hover:border-none bg-transparent"
            >
              <svg
                className="swap-on fill-current w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <ul>
            <li>
              <p>Sidebar Item 1</p>
            </li>
            <li>
              <p>Sidebar Item 2</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
