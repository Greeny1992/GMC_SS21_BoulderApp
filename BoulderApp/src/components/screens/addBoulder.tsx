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
  const {navigation, route} = props;
  const currentBoulder = route.params.boulder as IBoulder;
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [difficultyPickerOpen, setDifficultyPickerOpen] = useState(false);
  const [difficultyValue, setDifficultyValue] = useState(null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorValue, setColorValue] = useState(null);

  let formTitle = 'Add new boulder';
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<BoulderFormData>();

  const onSubmit: SubmitHandler<BoulderFormData> = data => {
    console.log('SAVE: ', data);

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

  const clearForm = () => {
    setValue('title', '');
    setValue('color', 0);
    setValue('difficulty', 0);
    setValue('img', '');
    setValue('location_id', '');
    setValue('boulder_id', '');
    setValue('topped', false);
    setValue('like', false);
    setValue('id', '');
  };

  const setDefaultForm = () => {
    if (currentBoulder) {
      setValue('title', currentBoulder.title);
      setValue('color', currentBoulder.color);
      setValue('difficulty', currentBoulder.difficulty);
      setValue('img', currentBoulder.img);
      setValue('location_id', currentBoulder.location_id);
      setValue('boulder_id', currentBoulder.id);
      setValue('topped', currentBoulder?.topped ?? false);
      setValue('like', currentBoulder.like);
      setValue('id', currentBoulder.id);
    }
  };
  if (currentBoulder) {
    formTitle = 'Edit boulder';
    setDefaultForm();
  } else {
    clearForm();
  }
  const closeForm = () => {
    navigation.navigate('HomeScreen');
    clearForm();
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
          defaultValue={control.defaultValuesRef}
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
          rules={{required: true}}
          defaultValue={1}
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
          rules={{required: true}}
          defaultValue={1}
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
          rules={{required: true}}
          defaultValue={1}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formrow}>
              <CheckBox
                value={value}
                onValueChange={onChange}
                style={styles.checkbox}
              />
              <BText>Boulder has been topped</BText>
            </View>
          )}
          name="topped"
          rules={{required: true}}
          defaultValue={1}
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.formrow}>
              <CheckBox
                value={value}
                onValueChange={onChange}
                style={styles.checkbox}
              />
              <BText>Like this boulder</BText>
            </View>
          )}
          name="like"
          rules={{required: true}}
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
