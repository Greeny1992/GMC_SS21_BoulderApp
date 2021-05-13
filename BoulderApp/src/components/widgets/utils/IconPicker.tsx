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
  placeholder:string;
  label: string;
  onChange: Function;
  open:boolean;
  onOpen:any;
  defaultSelectedItem?:number;
}

const IconPicker: React.FC<IconPickerProps> = (props: IconPickerProps) => {
  const {items,placeholder,style,label,containerStyle, defaultSelectedItem,onChange,open,onOpen} = props
  const ItemPickerItems = items.map((item )=> {return {label: item.name, value:item.id,icon: () => <Icon name={item.icon} size={18} color={ColorTheme.highlight} />}})
  const [isOpen,setIsOpen] = useState(open)
  const [selectedItem, setSelectedItem ] = useState(defaultSelectedItem ?? 1);
  const handleChange = (item:any)=>{
      setSelectedItem(item);
      onChange(item)
      
  }
  console.log("LABEL: " + label + " " + open)
  return (
    <View style={[containerStyle
    //   ,{
    //   ...(Platform.OS !== 'android' && {
    //     zIndex: 10
    // })
    // }
    ]}>
        {label ? <BLabel label={label}/> : <></>}
        <DropDownPicker
            open={isOpen}
            onOpen={()=> {console.log("OPEN: " + label); onOpen()}}
            items={ItemPickerItems}
            placeholder={placeholder}
            defaultValue={selectedItem}
            containerStyle={[{height: 40}]}
            style={[{backgroundColor: '#fafafa'},style]}
            itemStyle={{
                justifyContent: 'flex-start', 
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item:any, index:number) => handleChange (index)}
            
        />
    </View>
    
  );
};

export default IconPicker;