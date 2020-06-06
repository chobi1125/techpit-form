import { Gender } from "./gender";
import { Career } from "./career";
import { Address } from "./address";
import { College } from "./college";

export type Profile = {
  name: string;
  description: string;
  birthday: string;
  gender: Gender;
  address: Address;
  college: College;
  careers: Career[];
}