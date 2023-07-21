import { RatingInterface } from 'interfaces/rating';
import { VendorInterface } from 'interfaces/vendor';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  vendor_id?: string;
  supplier_id?: string;
  created_at?: any;
  updated_at?: any;
  rating?: RatingInterface[];
  vendor?: VendorInterface;
  user?: UserInterface;
  _count?: {
    rating?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  vendor_id?: string;
  supplier_id?: string;
}
