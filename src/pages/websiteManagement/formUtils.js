// formUtils.js
export const handleSelectChange = (selectedValues, mappings, setMappings, form, index) => {
    const updatedMappings = mappings.map((mapping) => {
      if (selectedValues.includes(mapping.originalValue)) {
        switch (selectedValues.indexOf(mapping.originalValue)) {
          case 0:
            return { ...mapping, displayedValue: 'Sadmin' };
          case 1:
            return { ...mapping, displayedValue: 'Admin' };
          case 2:
            return { ...mapping, displayedValue: 'Vendor' };
          case 3:
            return { ...mapping, displayedValue: 'Partner' };
          default:
            return mapping;
        }
      }
      return mapping;
    });
  
    setMappings(updatedMappings);
  
    form.setFieldsValue({ [`input${index}`]: selectedValues });
  };
  
  export const handleDeliveryPeriodChange = (selectedValues, mappings, setMappings, form, index) => {
    const updatedMappings = mappings.map((mapping) => {
      if (selectedValues.includes(mapping.originalValue)) {
        switch (selectedValues.indexOf(mapping.originalValue)) {
          case 0:
            return { ...mapping, displayedValue: '1 rs' };
          case 1:
            return { ...mapping, displayedValue: '2 rs' };
          case 2:
            return { ...mapping, displayedValue: '3 rs' };
          case 3:
            return { ...mapping, displayedValue: '4 rs' };
          case 4:
            return { ...mapping, displayedValue: '5 rs' };
          default:
            return mapping;
        }
      }
      return mapping;
    });
  
    setMappings(updatedMappings);
  
    form.setFieldsValue({ [`input${index}`]: selectedValues });
  };
  