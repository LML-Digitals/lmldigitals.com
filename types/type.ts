export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  role: string[];
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  title: string;
  menuList: SideNavItem[];
};

export type PartialBy<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;


export type Post = {
  id: number;
  title: String;
  content: String;
  authorId: number;
  blogCategoryId: number;
  tag: String;
  published: Boolean;
  createdAt: Date;
  updatedAt: Date;
  metaTitle?: String;
  metaDescription?: String;
  publishedAt?: Date;
};
