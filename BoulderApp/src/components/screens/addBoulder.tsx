import React, {useCallback, useState} from 'react';
import {View,Text,ImageBackground, Platform,} from 'react-native';
import styles from '../../styles/addBoulder';
import  {BTitle} from '../widgets/utils/text';
import {useForm, Controller, set, SubmitHandler} from 'react-hook-form';
import {BoulderFormData, IBoulder} from '../../data/entities/Boulder';
import  {BExtendedButton} from '../widgets/utils/button';
import LayoutStyle from '../../styles/utils/layout';
import BInput from '../widgets/utils/Input';
import IconPicker from '../widgets/utils/IconPicker';
import {colors,difficulty,regions,} from '../../data/lookupValues/boulderDetailValues';
import { storeBoulder } from '../../data/service/BoulderService';
import { getData } from '../../data/store/store';
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
  const [difficultyPickerOpen, setDifficultyPickerOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  // console.log("currentBoulder")
  // console.log(currentBoulder)

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

  const onSubmit: SubmitHandler<BoulderFormData> = async data => {
    // console.log("onSubmit",currentBoulder?.lastChangeTimestamp,currentBoulder?.lastEditor )
    const s = await storeBoulder(data,userId,currentBoulder?.id, currentBoulder?.lastChangeTimestamp,currentBoulder?.lastEditor).then(()=>{
      console.log("NAVIGATE")
      navigation.navigate('HomeScreen',
      {update:true}
    )
    }
    )
  
    
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
          //HIDDEN Field for the boulder id
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
           <></>
          )}
          name="boulder_id"
          // rules={{required: true}}
          defaultValue={currentBoulder?.id}
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <BInput
              label="Title"
              placeholder="First trial and I did it"
              value={value}
              onChangeText={(value: string) => onChange(value)}
              labelStyle={{marginBottom: -10}}
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
              containerStyle={[Platform.OS === 'ios' && {zIndex: 200}]}
              isOpen={locationPickerOpen}
              setIsOpen={setLocationPickerOpen}
              items={regionValues}
              selectedItem={value}
              setSelectedItem={onChange}
              label="Location"
              onOpen={onLocationPickerOpen}
              zIndex={3000}
              zIndexInverse={1000}
            />
          )}
          name="location_id"
          rules={{required: true}}
          defaultValue={currentBoulder?.location_id ?? 2}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <IconPicker
              containerStyle={[Platform.OS === 'ios' && {zIndex: 200}]}
              isOpen={colorPickerOpen}
              setIsOpen={setColorPickerOpen}
              items={colorValues}
              selectedItem={value}
              setSelectedItem={onChange}
              label="Color"
              onOpen={onColorPickerOpen}
              zIndex={2000}
              zIndexInverse={2000}
            />
          )}
          name="color"
          rules={{required: true}}
          defaultValue={currentBoulder?.color ?? 2}
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <IconPicker
              containerStyle={[Platform.OS === 'ios' && {zIndex: 200}]}
              isOpen={difficultyPickerOpen}
              setIsOpen={setDifficultyPickerOpen}
              items={difficultyValues}
              selectedItem={value}
              setSelectedItem={onChange}
              label="Difficulty"
              onOpen={onDifficultyPickerOpen}
              zIndex={1000}
              zIndexInverse={3000}
            />
          )}
          name="difficulty"
          rules={{required: true}}
          defaultValue={currentBoulder?.difficulty ?? 2}
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
