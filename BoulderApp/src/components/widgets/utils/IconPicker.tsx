import React, { useState } from 'react';
import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';
import ColorTheme from '../../../styles/theme/store/ColorMainTheme';
import BIcon from './icon';
import BLabel from './label';
import Picker from './Picker';


interface IconPickerProps {
  style?:any;
  containerStyle?:any;
  items: any[];
  placeholder:string
  label: string
}

const IconPicker: React.FC<IconPickerProps> = (props: IconPickerProps) => {
  const {items,placeholder,style,label,containerStyle} = props
  const ItemPickerItems = items.map((item )=> {return {label: item.name, value:item.id,icon: () => <Icon name={item.icon} size={18} color={ColorTheme.highlight} />}})

  const [selectedItem, setSelectedItem ] = useState(1);
  return (
    <Picker 
        items={ItemPickerItems} 
        placeholder={placeholder} 
        containerStyle={containerStyle} 
        label={label} 
        selectedItem={selectedItem}    
        setSelectedItem={setSelectedItem}
    />
    
  );
};

export default IconPicker;