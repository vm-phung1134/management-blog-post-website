import { IBreadCrumbProps } from "./type";

function BreadCrumbs({ items }: IBreadCrumbProps) {
  return (
    <div className="text-[13px] breadcrumbs">
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.name}
              className={`${item.active ? "text-orange-500" : ""} my-1`}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BreadCrumbs;
