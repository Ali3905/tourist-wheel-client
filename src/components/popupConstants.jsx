export const catogeryPopupLabel = [
  { name: 'MetaURL', label: 'Catogery URL', type: 'text', rules: [{ required: true, message: 'Please enter Meta URL for the product' }] }, 
  { name: 'MetaTitle', label: 'Catogery Title', type: 'text', rules: [{ required: true, message: 'Please enter Meta Title for the product' }] }, 
  { name: 'MetaDiscription', label: 'Catogery Discription', type: 'text', rules: [{ required: true, message: 'Please enter Meta Discription for the product' }] },
  { name: 'MetaKeywords', label: 'Catogery Keywords', type: 'text', rules: [{ required: true, message: 'Please enter Meta Keywords for the product' }] },  
  { name: 'MetaImage', label: 'Catogery Image', type: 'upload', rules: [{ required: true, message: 'Please upload image' }] },
];
const DummyVendors = ['Vendor 1', 'Vendor 2', 'vendor 3', 'Vendor 4'];
export const transferPopupLabel = [
  { name: 'TransferTo', label: 'Transfer To', type: 'select', options: DummyVendors, rules: [{ required: true, message: 'Please select a Transfer User' }] },
]