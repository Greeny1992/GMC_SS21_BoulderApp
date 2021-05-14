import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from '../../styles/addBoulder';
import BText, {BTitle} from '../widgets/utils/text';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ScreenSizes} from '../../constants/ui';
import img from '../../assets/images/base64-climbing-wall';
import {useForm, Controller, set, SubmitHandler} from 'react-hook-form';
import {BoulderFormData, IBoulder} from '../../data/entities/Boulder';
import BButton, {BExtendedButton} from '../widgets/utils/button';
import LayoutStyle from '../../styles/utils/layout';
import BInput from '../widgets/utils/Input';
import IconPicker from '../widgets/utils/IconPicker';
import {
  colors,
  difficulty,
  location,
  regions,
} from '../../data/lookupValues/boulderDetailValues';
import {ILocation} from '../../data/entities/boulderDetailValues';
import BIcon from '../widgets/utils/icon';
import ColorTheme from '../../styles/theme/Color';
import DropDownPicker from 'react-native-dropdown-picker';
import { storeBoulder } from '../../data/service/BoulderService';
import { getData } from '../../data/store/store';

enum colourScale {
  black = 'black',
  white = 'white',
  yellow = 'yellow',
  red = 'red',
  blue = 'blue',
  green = 'green',
  turquoise = 'turquoise',
  orange = 'orange',
  violet = 'violet',
  pink = 'pink',
  grey = 'grey',
  none = '',
}

export interface Boulder {
  name: string;
  location: string;
  difficulty: string;
  colour: colourScale;
  image: string;
  isTopped: boolean;
}
interface AddBoulderProps {
  style?: any;
  navigation: any;
  route: any;
}
const AddBoulder: React.FC<AddBoulderProps> = (props: AddBoulderProps) => {
  let isEditmode=false;
  const {navigation, route} = props;
  const [userId, setUserId] = useState('');
  const currentBoulder = route.params.boulder as IBoulder;
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [difficultyPickerOpen, setDifficultyPickerOpen] = useState(false);
  const [difficultyValue, setDifficultyValue] = useState(null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorValue, setColorValue] = useState(null);


  getData('user').then(user => {
    setUserId(user.userId);  
  }).catch(err => 
    console.error(err)
  )
  let formTitle = 'Add new boulder';
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<BoulderFormData>();

  const onSubmit: SubmitHandler<BoulderFormData> = data => {
    console.log('---')
    console.log('SAVE: ', data);
 
    storeBoulder(data,userId,Number(currentBoulder?.id));
   
    navigation.navigate('HomeScreen',
      {update:true}
    );
  };

  const onLocationPickerOpen = useCallback(() => {
    setDifficultyPickerOpen(false);
    setColorPickerOpen(false);
  }, []);

  const onDifficultyPickerOpen = useCallback(() => {
    setLocationPickerOpen(false);
    setColorPickerOpen(false);
  }, []);

  const onColorPickerOpen = useCallback(() => {
    setLocationPickerOpen(false);
    setDifficultyPickerOpen(false);
  }, []);



  if (currentBoulder) {
    formTitle = 'Edit boulder';
    isEditmode=true;
  }
  const closeForm = () => {
    navigation.navigate('HomeScreen');
  }

  //Dropdownvalues
  const colorValues = colors();
  const difficultyValues = difficulty();
  const regionValues = regions();

  const bg = require('../../assets/images/background.jpg');
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={{flex: 1, width: '80%'}}>
        <BTitle label={formTitle} color="white" />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <BInput
              label="Title"
              placeholder="First trial and I did it"
              value={value}
              onChangeText={(value: string) => onChange(value)}
            />
          )}
          name="title"
          rules={{required: true}}
          defaultValue={currentBoulder?.title}
        />
        {errors.title && <Text>This is required.</Text>}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <IconPicker
              isOpen={locationPickerOpen}
              setIsOpen={setLocationPickerOpen}
              items={regionValues}
              selectedItem={locationValue}
              setSelectedItem={setLocationValue}
              label="Location"
              onOpen={onLocationPickerOpen}
              zIndex={3000}
              zIndexInverse={1000}
            />
          )}
          name="location_id"
          // rules={{required: true}}
          defaultValue={currentBoulder?.location_id}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <IconPicker
              isOpen={colorPickerOpen}
              setIsOpen={setColorPickerOpen}
              items={colorValues}
              selectedItem={colorValue}
              setSelectedItem={setColorValue}
              label="Color"
              onOpen={onColorPickerOpen}
              zIndex={2000}
              zIndexInverse={2000}
            />
          )}
          name="color"
          // rules={{required: true}}
          defaultValue={currentBoulder?.color}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <IconPicker
              isOpen={difficultyPickerOpen}
              setIsOpen={setDifficultyPickerOpen}
              items={difficultyValues}
              selectedItem={difficultyValue}
              setSelectedItem={setDifficultyValue}
              label="Difficulty"
              onOpen={onDifficultyPickerOpen}
              zIndex={1000}
              zIndexInverse={3000}
            />
          )}
          name="difficulty"
          // rules={{required: true}}
          defaultValue={1}
        />

   

        <View style={[LayoutStyle.containerRowSpace, {marginTop: 10}]}>
          <BExtendedButton
            underlined={true}
            onPress={closeForm}
            title="cancel"
          />
          <BExtendedButton
            underlined={true}
            onPress={handleSubmit(onSubmit)}
            title="save"
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default AddBoulder;
