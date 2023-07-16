import { Blog } from "./model/blogModel";


const BLOG_API = [
  {
    id: "1",
    srcImg:
      "https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg.webp",
    typeBlog: "Bussiness, Travel",
    title: "Your most unhappy customers are your greatest source of learning",
    plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
  },
  {
    id: "2",
    srcImg:
      "https://preview.colorlib.com/theme/magdesign/images/post_lg_3.jpg.webp",
    typeBlog: "Bussiness, Travel",
    title: "Your most unhappy customers are your greatest source of learning",
    plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
  },
  {
    id: "3",
    srcImg:
      "https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg.webp",
    typeBlog: "Bussiness, Travel",
    title: "Your most unhappy customers are your greatest source of learning",
    plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
  },
  {
    id: "4",
    srcImg:
      "https://preview.colorlib.com/theme/magdesign/images/img_7.jpg.webp",
    typeBlog: "Bussiness, Travel",
    title: "Your most unhappy customers are your greatest source of learning",
    plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
  },

  {
    id: "5",
    srcImg:
      "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg.webp",
    typeBlog: "Bussiness, Travel",
    title: "Your most unhappy customers are your greatest source of learning",
    plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
  },
  {
    id: "6",
    srcImg:
      "https://preview.colorlib.com/theme/magdesign/images/img_6.jpg.webp",
    typeBlog: "Bussiness, Travel",
    title: "Your most unhappy customers are your greatest source of learning",
    plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
  },
];

export const MOCK_BLOG = BLOG_API.map(blog => new Blog(blog));
