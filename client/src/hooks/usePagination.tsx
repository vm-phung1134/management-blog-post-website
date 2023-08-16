import { useQuery } from "@tanstack/react-query";
import { IBlog } from "../interface/blog";
import { IAuthorBlogsLimit } from "../redux/reducers/blog/type";
import { getAllBlogsAuthor } from "../redux/reducers/blog/api";
import { useAppDispatch } from "../redux/store";

export const usePagination = (props: IAuthorBlogsLimit) => {
  const dispatch = useAppDispatch();
  const { page, limit, authorId } = props;
  return useQuery<IBlog[]>({
    queryKey: ["blogs-author", page, limit, authorId],
    queryFn: async () => {
      const action = await dispatch(getAllBlogsAuthor(props));
      return action.payload || [];
    },
  });
};
