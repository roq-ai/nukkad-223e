import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RatingInterface {
  id?: string;
  score: number;
  project_id?: string;
  supplier_id?: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  project_id?: string;
  supplier_id?: string;
}
