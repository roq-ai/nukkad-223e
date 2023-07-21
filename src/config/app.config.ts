interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Vendor Owner'],
  customerRoles: ['Supplier'],
  tenantRoles: ['Vendor Owner'],
  tenantName: 'Vendor',
  applicationName: 'Nukkad',
  addOns: ['chat', 'notifications', 'file'],
};
