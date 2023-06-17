export class Blog {
  id: number | undefined;
  title: string = "";
  typeBlog: string = "";
  srcImg: string = "";
  plot: string = "";

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.typeBlog) this.typeBlog = initializer.typeBlog;
    if (initializer.srcImg) this.srcImg = initializer.srcImg;
    if (initializer.plot) this.plot = initializer.plot;
  }
}
