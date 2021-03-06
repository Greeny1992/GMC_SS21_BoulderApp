import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, Text, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import {
  BoulderInteraction,
  BoulderInteractionFormData,
} from '../../../data/entities/BoulderInteraction';
import {getAllStatus} from '../../../data/lookupValues/BoulderInteractionValues';
import LayoutStyle from '../../../styles/utils/layout';
import styles from '../../../styles/widgets/boulderInteractionModal';
import {BExtendedButton} from '../utils/button';
import BIcon from '../utils/icon';
import IconPicker from '../utils/IconPicker';
import BInput from '../utils/Input';
import {BTitle} from '../utils/text';
import {useForm, Controller} from 'react-hook-form';

interface BoulderInteractionModalProps {
  style?: any;
  showModal: boolean;
  handleHideModal: Function;
  handleSaveInteraction: Function;
  currentAction?: BoulderInteraction;
  boulderID: string;
}

const BoulderInteractionModal: React.FC<BoulderInteractionModalProps> = (
  props: BoulderInteractionModalProps,
) => {
  const {showModal, handleHideModal, handleSaveInteraction, boulderID} = props;
  let {currentAction} = props;
  const [statusPickerOpen, setStatusPickerOpen] = useState(false);
  const statusValues = getAllStatus();
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<BoulderInteractionFormData>();
  useEffect(() => {
    setDefaultForm();
  }, [showModal]);

  const onSubmit = (data: BoulderInteractionFormData) => {
    handleSaveInteraction(data);
    currentAction = undefined;
    handleHideModal(true);
    clearForm();
  };
  const clearForm = () => {
    setValue('title', '');
    setValue('comment', '');
    setValue('status', 1);
    setValue('id', '');
  };
  const setDefaultForm = () => {
    if (currentAction) {
      setValue('id', currentAction.id);
      setValue('title', currentAction.title);
      setValue('comment', currentAction.comment);
      setValue('status', currentAction.status);
    }
  };
  const closeForm = () => {
    handleHideModal();
    clearForm();
  };

  return (
    <Overlay
      animationType={'slide'}
      transparent={true}
      isVisible={showModal}
      onBackdropPress={closeForm}
      overlayStyle={styles.modal}>
      <ScrollView style={{width: '100%'}}>
        <View style={LayoutStyle.containerRow}>
          <BTitle label="Create a activity" style={{flex: 8}} />

          <BIcon icon="close" onPress={closeForm} style={{flex: 2}} />
        </View>

        <View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <BInput
                label="Headline"
                placeholder="First trial and I did it"
                value={value}
                onChangeText={(value: string) => onChange(value)}
              />
            )}
            name="title"
            rules={{required: true}}
            defaultValue={currentAction?.title}
          />
          {errors.title && <Text>This is required.</Text>}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <IconPicker
               containerStyle={[{marginBottom: 20}, Platform.OS === 'ios' && {zIndex: 200}]}
                isOpen={statusPickerOpen}
                setIsOpen={setStatusPickerOpen}
                items={statusValues}
                selectedItem={value}
                setSelectedItem={onChange}
                label="Status"
                zIndex={3000}
                zIndexInverse={1000}
              />
            )}
            name="status"
            rules={{required: true}}
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <BInput
                label="Comment"
                multiline={true}
                value={value}
                onChangeText={(value: string) => onChange(value)}
                placeholder="the first few moves, are really hard but after them, this is the rock to go"
              />
            )}
            name="comment"
            rules={{required: true}}
            defaultValue={currentAction?.comment}
          />
          {errors.comment && <Text>This is required.</Text>}

          <View style={[LayoutStyle.containerRowSpace, {marginTop: 30}]}>
            {/* <BIconBackround onPress={()=>handleHideModal() } icon="cancel" style={{flex:3,width:'30%'}}/>
                        <BIconBackround onPress={()=>storeInteraction() } icon="save"  style={{flex:3,width:'30%'}}/>  */}
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
      </ScrollView>
    </Overlay>
  );
};
export default BoulderInteractionModal;
