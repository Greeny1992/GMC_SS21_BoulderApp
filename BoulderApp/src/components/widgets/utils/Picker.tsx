import React, { useState } from 'react';
import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import ColorTheme from '../../../styles/theme/store/ColorMainTheme';
import BLabel from './label';


interface IPickerProps {
  style?:any;
  containerStyle?:any;
  items: any[];
  placeholder:string
  label?: string;
  selectedItem:any;
  setSelectedItem:Function;
  selectedLabelStyle?:any
}

const Picker: React.FC<IPickerProps> = (props: IPickerProps) => {
  const {items,placeholder,style,label,containerStyle,selectedItem, setSelectedItem,selectedLabelStyle} = props
  return (
    <View style={containerStyle}>
        {label ? <BLabel label={label}/> : <></>}
        <DropDownPicker
            items={items}
            placeholder={placeholder}
            defaultValue={selectedItem}
            containerStyle={[{height: 40}]}
            style={[{backgroundColor: '#fafafa'},style]}
            itemStyle={{
                justifyContent: 'flex-start', 
            }}
            selectedLabelStyle={selectedLabelStyle}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setSelectedItem (item.value)
            }
        />
    </View>
    
  );
};

export default Picker;