export type College = {
  // 大学名
  name: string;
  // 学部
  faculty: string;
  // 学科
  department: string;
};
export type Colleges = {
  search: string;
  result: CollegeResult[];
};
export type CollegeResult = {
  name: string;
  faculty: Faculty[];
};
export type Faculty = {
  name: string;
  department: string[];
};