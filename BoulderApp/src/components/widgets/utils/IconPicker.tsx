import React, { useState } from 'react';

import DropDownPicker from 'react-native-dropdown-picker';


interface IconPickerProps {
  style?:any;
  items: any[];
  placeholder:string
}

const Picker: React.FC<IconPickerProps> = (props: IconPickerProps) => {
  const {items,placeholder,style} = props
  const [selectedItem, setSelectedItem ] = useState(2);
  return (
   
    <DropDownPicker
        items={items}
        placeholder={placeholder}
        defaultValue={selectedItem}
        containerStyle={[{height: 40}]}
        style={[{backgroundColor: '#fafafa'},style]}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => setSelectedItem (item.value)
        }
    />
    
  );
};

export default Picker;