import React from 'react'
import LabelStyle from '../../../styles/utils/label';
import BText from './text';

interface BLabelProps {
    style?: any,
    label:string
}

const BLabel: React.FC<BLabelProps> = (props: BLabelProps) => {
    const {style,  label} = props;
    return <BText style={[LabelStyle.label,style]} >{label}</BText>
}


export default BLabel
