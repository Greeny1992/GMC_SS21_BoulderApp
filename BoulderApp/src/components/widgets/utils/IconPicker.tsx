import React, { useState } from 'react';
import { Platform, View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';
import ColorTheme from '../../../styles/theme/store/ColorMainTheme';
import BLabel from './label';


interface IconPickerProps {
  style?:any;
  containerStyle?:any;
  items: any[];
  label: string;
  selectedItem: any;
  setSelectedItem: any;
  isOpen: boolean;
  setIsOpen: any;
  onOpen?: any;
  zIndex: any;
  zIndexInverse: any,
  placeholder?:string
}

const IconPicker: React.FC<IconPickerProps> = (props: IconPickerProps) => {
  const {items,label,containerStyle, selectedItem, placeholder,setSelectedItem, isOpen, setIsOpen, style, onOpen, zIndex, zIndexInverse} = props
  const ItemPickerItems = items.map((item )=> {return {label: item.name, value:item.id,icon: () => <Icon name={item.icon} size={18} color={ColorTheme.highlight} />}})
  console.log("ItemPickerItems");
  console.log(ItemPickerItems);

  
  return (
    <View style={[containerStyle]}>
        {label ? <BLabel label={label}/> : <></>}
        <DropDownPicker
          onOpen={onOpen}
          placeholder={placeholder}
          items={ItemPickerItems}
          value={selectedItem}
          setValue={setSelectedItem}
          open={isOpen}
          setOpen={setIsOpen}
          containerStyle={[{height: 40}]}
          style={[{backgroundColor: '#fafafa'},style]}
          labelStyle={{
              justifyContent: 'flex-start', 
          }}
          dropDownContainerStyle={{backgroundColor: '#fafafa'}}
          zIndex={zIndex}
          zIndexInverse={zIndexInverse}
          
        />

    </View>
    
  );
};

export default IconPicker;